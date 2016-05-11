var vm = new Vue({
  el: 'body',
  data: {
    shouldShowProjectOverlay: false,
    backgroundColor: "#3a4b60",
    chosenProject: {},
    chosenID: '',
    projects: [
      {
        title: 'Work Well Done',
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
        title: 'Cooltech',
        url: 'http://cooltechglobal.com',
        thumbnail: 'images/screenshot-cooltech.png',
        description: 'Coming Soon',
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
        url: 'http://www.openport.com',
        thumbnail: 'images/screenshot-openport.png',
        description: 'Coming Soon',
      },
      {
        title: 'Quantifeed',
        url: 'https://www.quantifeed.com/',
        thumbnail: 'images/screenshot-quantifeed.png',
        description: 'Coming Soon',
      },
      {
        title: 'onActivity',
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
        title: 'The Edge',
        url: 'http://theedge.com.hk/',
        thumbnail: 'images/screenshot-theedge.png',
        description: 'Coming Soon',
      },
      {
        title: 'Big Bloom',
        url: 'http://bigbloom.hk',
        thumbnail: 'images/screenshot-bigbloom.png',
        description: 'Coming Soon',
      },
    ]
  },
  methods: {
    openProjectModal: function(project, index) {
      var self = this;
      self.chosenProject = project;
      self.chosenID = 'project-' + index; // save chosen project ID for later when closing modal

      var viewportWidth = document.documentElement.clientWidth;
      var projectOverlay = document.getElementById('fullscreen-project-overlay');
      var originNode = document.getElementById(self.chosenID);
      var rect = originNode.getBoundingClientRect();
      var offsetTop = rect.top;
      var offsetLeft = rect.left;
      var width = rect.width;
      var height = rect.height;
      var placeholder = document.createElement("div");

      placeholder.style.position = "fixed";
      placeholder.style.background = self.backgroundColor;
      placeholder.style.top = offsetTop + "px";
      placeholder.style.left = offsetLeft + "px";
      placeholder.style.width = width;
      placeholder.style.height = height;
      placeholder.style.opacity = 0;

      document.body.appendChild(placeholder);

      var tl = new TimelineLite({onComplete: function() {
        self.shouldShowProjectOverlay = true;
        placeholder.parentNode.removeChild(placeholder);

        TweenMax.staggerFromTo(".animate", 0.5, {y: "20px", opacity: 0}, {y: 0, opacity: 1}, 0.1);
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

    },
    closeProjectModal: function() {
      var self = this;
      if (self.shouldShowProjectOverlay) {
        var placeholder = document.createElement("div");
        var originNode = document.getElementById(self.chosenID);
        var rect = originNode.getBoundingClientRect();
        var offsetTop = rect.top;
        var offsetLeft = rect.left;
        var width = rect.width;
        var height = rect.height;

        placeholder.style.position = "fixed";
        placeholder.style.background = self.backgroundColor;
        placeholder.style.top = 0;
        placeholder.style.left = 0;
        placeholder.style.width = "100%";
        placeholder.style.height = "100%";

        document.body.appendChild(placeholder);

        TweenMax.to(".animate", 0.5, {y: 20, opacity: 0, onComplete: closeModal});

        function closeModal() {
          self.shouldShowProjectOverlay = false;
          var tl = new TimelineLite({
            onComplete: function() {
              placeholder.parentNode.removeChild(placeholder);
              self.chosenProject = {};
            }
          });

          tl.to(placeholder, 0.4, {top: offsetTop + 'px', left: offsetLeft + "px", width: width, height: height});
          tl.to(placeholder, 0.3, {opacity: 0});
          tl.to('#' + self.chosenID + ' .uk-overlay-panel h3', 0.3, {y: "-=100%", opacity: 1}, "-=0.4");
        }
      }
    }
  }
});

// initial FastClick to remove touch latency
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}
