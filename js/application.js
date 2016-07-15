var vm = new Vue({
  el: '#app',
  data: {
    shouldShowProjectOverlay: false,
    isAnimating: false,
    scrollPos: 0,
    isModalOpened: false,
    backgroundColor: "#3a4b60",
    chosenProject: {},
    chosenID: '',
    projects: [
      {
        title: 'Russia.com',
        slug: 'russia',
        color: '#0e2163',
        cssClass: 'project-russia',
        url: 'http://russia.com/',
        thumbnail: 'images/screenshot-russia.png',
        description: 'Coming soon',
        builtWith: [
          {
            name: 'WordPress',
            url: 'https://wordpress.org/'
          },
          {
            name: 'Vue.js',
            url: 'http://vuejs.org/'
          },
          {
            name: 'uikit',
            url: 'http://getuikit.com/'
          },
        ]
      },
      {
        title: 'Eqibeat',
        slug: 'eqibeat',
        color: '#2f3c5d',
        cssClass: 'project-eqibeat',
        url: 'http://eqibeat.com/',
        thumbnail: 'images/screenshot-eqibeat.png',
        description: 'Coming soon',
        builtWith: [
          {
            name: 'WordPress',
            url: 'https://wordpress.org/'
          },
          {
            name: 'AngularJS',
            url: 'https://angularjs.org/'
          },
          {
            name: 'uikit',
            url: 'http://getuikit.com/'
          },
        ]
      },
      {
        title: 'Work Well Done',
        slug: 'work-well-done',
        color: '#006564',
        cssClass: 'project-cx',
        url: 'http://workwelldone.cathaypacific.com',
        thumbnail: 'images/screenshot-wwd.png',
        description: '<p>Work Well Done is a relatively simple project. The purpose of the site is to allow Cathay Pacific staff to write thank you card to each other.</p><p>For a better user experience, I have built the wall of cards using Vue.js. By using a reactive JS library, I can make this part of the website interactive. Users are able to fetch more cards or search for cards without the need of reloading the whole page. The API that fetches the cards are built with <a href="https://wordpress.org/plugins/rest-api/" target="_blank">WP REST API</a> plugin, which conveniently turns your WordPress database into JSON api.</p><p>I have decided to use Vue.js because it is lightweight, fast, well documented and easy to use. You can just mount it to your HTML template and it just works. It plays well with other JS libraries such as jQuery and GSAP. It is perfect if you only want a part of the website interactive. I would use it again in future projects.</p><p>Other than the website, I have also made email templates that was sent out to all Cathay Pacific staff. The template is made by Foundation Email, which saves me from writing a lot of tables.</p><p>Overall, I enjoyed doing project a lot. It is very satisfying to see Cathay Pacific staff actually using the system I built to write thank you card to each other.</p>',
        builtWith: [
          {
            name: 'WordPress',
            url: 'https://wordpress.org/'
          },
          {
            name: 'Vue.js',
            url: 'http://vuejs.org/'
          },
          {
            name: 'uikit',
            url: 'http://getuikit.com/'
          },
        ]
      },
      {
        title: 'Cooltech Global',
        slug: 'cooltech-global',
        color: '#414d5c',
        cssClass: 'project-cooltech',
        url: 'http://cooltechglobal.com',
        thumbnail: 'images/screenshot-cooltech.png',
        description: '<p>Cooltech Global was a fun website to work on. The most challenging part of the website was the <a href="http://cooltechglobal.com/diesel/#?hz=50&brand=cummins" target="_blank">Genset table</a>. It should be able to filter Gensets, and the URL should reflect those filter options making it sharable to other users.</p><p>I tackled the problem using the <a href="http://lorenzofox3.github.io/smart-table-website/" target="_blank">SmartTable</a> module for AngularJS. The API for Genset data was provided by <a href="https://wordpress.org/plugins/rest-api/" target="_blank">WP REST API</a>.</p><p>The generator outline animation on landing page was done in AfterEffect, exported to JSON and displayed via <a href="https://github.com/bodymovin/bodymovin" target="_blank">bodymovin</a>.</p>',
        builtWith: [
          {
            name: 'WordPress',
            url: 'https://wordpress.org/'
          },
          {
            name: 'AngularJS',
            url: 'https://angularjs.org/'
          },
          {
            name: 'bodymovin',
            url: 'https://github.com/bodymovin/bodymovin'
          },
          {
            name: 'uikit',
            url: 'http://getuikit.com/'
          },
        ]
      },
      {
        title: 'OpenPort',
        slug: 'openport',
        color: '#3a4b60',
        cssClass: 'project-openport',
        url: 'http://www.openport.com',
        thumbnail: 'images/screenshot-openport.png',
        description: 'Coming Soon',
      },
      {
        title: 'Quantifeed',
        slug: 'quantifeed',
        color: '#f5f9f9',
        cssClass: 'project-quantifeed',
        url: 'https://www.quantifeed.com/',
        thumbnail: 'images/screenshot-quantifeed.png',
        description: 'Coming Soon',
      },
      {
        title: 'onActivity',
        slug: 'onactivity',
        color: '#2c3657',
        cssClass: 'project-onactivity',
        url: 'http://onactivity.com',
        thumbnail: 'images/screenshot-onactivity.png',
        description: 'Coming Soon',
        builtWith: [
          {
            name: 'WordPress',
            url: 'https://wordpress.org/'
          },
          {
            name: 'smoothState.js',
            url: 'http://miguel-perez.github.io/smoothState.js/'
          },
          {
            name: 'uikit',
            url: 'http://getuikit.com/'
          },
        ]
      },
      {
        title: 'Sterling Apparel',
        slug: 'sterling-apparel',
        color: '#fff',
        cssClass: 'project-sterling',
        url: 'http://www.sterlingapparel.com.hk',
        thumbnail: 'images/screenshot-sterling.png',
        description: 'Coming Soon',
        builtWith: [
          {
            name: 'WordPress',
            url: 'https://wordpress.org/'
          },
          {
            name: 'smoothState.js',
            url: 'http://miguel-perez.github.io/smoothState.js/'
          },
          {
            name: 'uikit',
            url: 'http://getuikit.com/'
          },
        ]
      },
      {
        title: 'Jachin Capital',
        slug: 'jachin-capital',
        color: '#dfe6ea',
        cssClass: 'project-jachin-capital',
        url: 'https://www.jachincapital.com/',
        thumbnail: 'images/screenshot-jachin.png',
        description: 'Coming Soon'
      },
      {
        title: 'The Edge',
        slug: 'the-edge',
        color: '#e31e26',
        cssClass: 'project-theedge',
        url: 'http://theedge.com.hk/',
        thumbnail: 'images/screenshot-theedge.png',
        description: 'Coming Soon',
      },
      {
        title: 'Big Bloom',
        slug: 'big-bloom',
        color: '#fff',
        cssClass: 'project-bigbloom',
        url: 'http://bigbloom.hk',
        thumbnail: 'images/screenshot-bigbloom.png',
        description: 'Coming Soon',
      },
    ],
    sideProjects: [
      {
        title: 'Vue Memory Game',
        slug: 'vue-memory-game',
        color: '#fff',
        cssClass: 'project-vue-memory-game',
        url: 'http://colloquet.github.io/vue-memory-game',
        thumbnail: 'images/screenshot-vue-memory-game.png',
        description: 'Coming Soon',
      },
      {
        title: 'React Unsplash Client',
        slug: 'react-unsplash-client',
        color: '#fff',
        cssClass: 'project-react-unsplash-client',
        url: 'http://colloquet.github.io/unsplash-react',
        thumbnail: 'images/screenshot-unsplash-react.png',
        description: 'Coming Soon',
      },
    ]
  },
  methods: {
    onProjectClick: function(project) {
      var self = this;
      if (!self.isAnimating) {
        History.pushState({ project: project }, project.title, "?project=" + project.slug);
      }
    },
    openProjectModal: function(project) {
      ga('send', 'event', 'Projects', 'open', project.title);

      var self = this;

      if (!self.shouldShowProjectOverlay && !self.isAnimating) {

        self.isAnimating = true;
        self.chosenProject = project;
        self.chosenID = 'project-' + project.slug; // save chosen project ID for later when closing modal
        self.scrollPos = window.pageYOffset;

        var html = document.documentElement;
        var body = document.body;
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        var projectOverlay = document.getElementById('fullscreen-project-overlay');
        var overflowContainer = document.getElementsByClassName('overflow-container');
        var originNode = document.getElementById(self.chosenID);
        var rect = originNode.getBoundingClientRect();
        var offsetTop = rect.top;
        var offsetLeft = rect.left;
        var width = rect.width;
        var height = rect.height;
        var placeholder = document.createElement("div");


        html.style.marginTop = (-1 * self.scrollPos) + "px";
        body.style.position = "fixed";
        body.style.width = viewportWidth + "px";
        body.style.height = viewportHeight + "px";

        placeholder.style.position = "fixed";
        placeholder.style.background = self.chosenProject.color || self.backgroundColor;
        placeholder.style.top = offsetTop + "px";
        placeholder.style.left = offsetLeft + "px";
        placeholder.style.width = width + "px";
        placeholder.style.height = height + "px";
        placeholder.style.opacity = 0;
        placeholder.style.zIndex = 5;

        document.body.appendChild(placeholder);

        var tl = new TimelineLite({onComplete: function() {
          self.shouldShowProjectOverlay = true;
          placeholder.parentNode.removeChild(placeholder);
          TweenMax.staggerFromTo(".animate", 0.5, {y: "20px", opacity: 0}, {y: 0, opacity: 1, onComplete: function() {
            self.isAnimating = false;
            self.isModalOpened = true;
          }}, 0.1);
        }});

        tl.to('#' + self.chosenID + ' .uk-overlay-panel h3', 0.3, {y: "+=100%", opacity: 0});
        tl.to(placeholder, 0.3, {opacity: 1}, "-=0.3");

        // if on small device, simply animate to fullscreen
        // if on large device, animate to full height first then full width
        if (viewportWidth < 768) {
          tl.to(placeholder, 0.3, {top: 0, left: 0, width: "100%", height: "100%"});
        } else {
          tl.to(placeholder, 0.4, {top: 0, height: "100%"}, "-=0.1");
          tl.to(placeholder, 0.3, {left: 0, width: "100%"});
        }
      }
    },
    handleCloseProjectModal: function() {
      console.log('asd');
      History.pushState(null, null, "/");
    },
    closeProjectModal: function() {
      var self = this;
      if (self.shouldShowProjectOverlay && !self.isAnimating) {
        self.isAnimating = true;

        var html = document.documentElement;
        var body = document.body;

        html.removeAttribute("style");
        body.removeAttribute("style");
        window.scrollTo(0, self.scrollPos);

        var originNode = document.getElementById(self.chosenID);
        var overflowContainer = document.getElementsByClassName('overflow-container');
        var rect = originNode.getBoundingClientRect();
        var offsetTop = rect.top;
        var offsetLeft = rect.left;
        var width = rect.width;
        var height = rect.height;
        var placeholder = document.createElement("div");

        placeholder.style.position = "fixed";
        placeholder.style.background = self.chosenProject.color || self.backgroundColor;
        placeholder.style.top = 0;
        placeholder.style.left = 0;
        placeholder.style.width = "100%";
        placeholder.style.height = "100%";
        placeholder.style.zIndex = 5;

        document.body.appendChild(placeholder);

        TweenMax.to(".animate", 0.5, {y: 20, opacity: 0, onComplete: function() {
          overflowContainer[0].scrollTop = 0;
          self.shouldShowProjectOverlay = false;
          var tl = new TimelineLite({
            onComplete: function() {
              placeholder.parentNode.removeChild(placeholder);
              self.isAnimating = false;
              self.isModalOpened = false;
              self.chosenProject = {};
            }
          });

          tl.to(placeholder, 0.3, {top: offsetTop + 'px', left: offsetLeft + "px", width: width + "px", height: height + "px"});
          tl.to(placeholder, 0.3, {opacity: 0});
          tl.to('#' + self.chosenID + ' .uk-overlay-panel h3', 0.3, {y: "-=100%", opacity: 1}, "-=0.4");
        }});
      }
    }
  },
  mounted: function() {
    var self = this;

    document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key == "Escape";
      } else {
        isEscape = evt.keyCode == 27;
      }
      if (isEscape && self.isModalOpened) {
        self.handleCloseProjectModal();
      }
    };

    History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
      var State = History.getState(); // Note: We are using History.getState() instead of event.state
      if (State.data.project === undefined) {
        self.closeProjectModal();
      } else {
        self.openProjectModal(State.data.project);
      }
    });

    History.replaceState(null, "Colloque Tsui", "/");
  }
});

// initial FastClick to remove touch latency
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
