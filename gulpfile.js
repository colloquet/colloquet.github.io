// grab our gulp packages
var gulp  = require('gulp');
var argv = require('yargs').argv;
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var production = !!argv.production;

// start browser sync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  });
});

// for js
gulp.task('js', function() {
  return gulp.src('js/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.js')) // combine all .js into one in order to reduce http requests
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

// for sass
gulp.task('sass', function() {
  return gulp.src('css/*.scss')
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('main.css')) // combine all .css into one in order to reduce http requests
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
});

// watch file changes
gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['js', browserSync.reload]);
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'js', 'sass', 'watch']);
