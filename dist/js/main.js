var vm=new Vue({el:"body",data:{shouldShowProjectOverlay:!1,isAnimating:!1,scrollPos:0,backgroundColor:"#3a4b60",chosenProject:{},chosenID:"",projects:[{title:"Work Well Done",color:"#006564",cssClass:"project-cx",url:"http://workwelldone.cathaypacific.com",thumbnail:"images/screenshot-wwd.png",description:'<p>Work Well Done is a relatively simple project. The purpose of the site is to allow Cathay Pacific staff to write thank you card to each other.</p><p>For a better user experience, I have built the wall of cards using Vue.js. By using a reactive JS library, I can make this part of the website interactive. Users are able to fetch more cards or search for cards without the need of reloading the whole page. The API that fetches the cards are built with <a href="https://wordpress.org/plugins/rest-api/" target="_blank">WP REST API</a> plugin, which conveniently turns your WordPress database into JSON api.</p><p>I have decided to use Vue.js because it is lightweight, fast, well documented and easy to use. You can just mount it to your HTML template and it just works. It plays well with other JS libraries such as jQuery and GSAP. It is perfect if you only want a part of the website interactive. I would use it again in future projects.</p><p>Other than the website, I have also made email templates that was sent out to all Cathay Pacific staff. The template is made by Foundation Email, which saves me from writing a lot of tables.</p><p>Overall, I enjoyed doing project a lot. It is very satisfying to see Cathay Pacific staff actually using the system I built to write thank you card to each other.</p>',builtWith:[{name:"WordPress",url:"https://wordpress.org/"},{name:"Vue.js",url:"http://vuejs.org/"},{name:"uikit",url:"http://getuikit.com/"}]},{title:"Cooltech Global",color:"#414d5c",cssClass:"project-cooltech",url:"http://cooltechglobal.com",thumbnail:"images/screenshot-cooltech.png",description:'<p>Cooltech Global was a fun website to work on. The most challenging part of the website was the <a href="http://cooltechglobal.com/diesel/#?hz=50&brand=cummins" target="_blank">Genset table</a>. It should be able to filter Gensets, and the URL should reflect those filter options making it sharable to other users.</p><p>I tackled the problem using the <a href="http://lorenzofox3.github.io/smart-table-website/" target="_blank">SmartTable</a> module for AngularJS. The API for Genset data was provided by <a href="https://wordpress.org/plugins/rest-api/" target="_blank">WP REST API</a>.</p><p>The generator outline animation on landing page was done in AfterEffect, exported to JSON and displayed via <a href="https://github.com/bodymovin/bodymovin" target="_blank">bodymovin</a>.</p>',builtWith:[{name:"WordPress",url:"https://wordpress.org/"},{name:"AngularJS",url:"https://angularjs.org/"},{name:"bodymovin",url:"https://github.com/bodymovin/bodymovin"},{name:"uikit",url:"http://getuikit.com/"}]},{title:"OpenPort",color:"#3a4b60",cssClass:"project-openport",url:"http://www.openport.com",thumbnail:"images/screenshot-openport.png",description:"Coming Soon"},{title:"Quantifeed",color:"#f5f9f9",cssClass:"project-quantifeed",url:"https://www.quantifeed.com/",thumbnail:"images/screenshot-quantifeed.png",description:"Coming Soon"},{title:"onActivity",color:"#2c3657",cssClass:"project-onactivity",url:"http://onactivity.com",thumbnail:"images/screenshot-onactivity.png",description:"Coming Soon",builtWith:[{name:"WordPress",url:"https://wordpress.org/"},{name:"smoothState.js",url:"http://miguel-perez.github.io/smoothState.js/"},{name:"uikit",url:"http://getuikit.com/"}]},{title:"Sterling Apparel",color:"#fff",cssClass:"project-sterling",url:"http://www.sterlingapparel.com.hk",thumbnail:"images/screenshot-sterling.png",description:"Coming Soon",builtWith:[{name:"WordPress",url:"https://wordpress.org/"},{name:"smoothState.js",url:"http://miguel-perez.github.io/smoothState.js/"},{name:"uikit",url:"http://getuikit.com/"}]},{title:"The Edge",color:"#e31e26",cssClass:"project-theedge",url:"http://theedge.com.hk/",thumbnail:"images/screenshot-theedge.png",description:"Coming Soon"},{title:"Big Bloom",color:"#fff",cssClass:"project-bigbloom",url:"http://bigbloom.hk",thumbnail:"images/screenshot-bigbloom.png",description:"Coming Soon"}]},methods:{openProjectModal:function(e,t){var o=this;if(!o.shouldShowProjectOverlay&&!o.isAnimating){o.isAnimating=!0,o.chosenProject=e,o.chosenID="project-"+t,o.scrollPos=window.pageYOffset;var i=document.documentElement,n=document.body,s=window.innerWidth,a=window.innerHeight,l=(document.getElementById("fullscreen-project-overlay"),document.getElementsByClassName("overflow-container"),document.getElementById(o.chosenID)),r=l.getBoundingClientRect(),c=r.top,h=r.left,p=r.width,d=r.height,u=document.createElement("div");i.style.marginTop=-1*o.scrollPos+"px",n.style.position="fixed",n.style.width=s+"px",n.style.height=a+"px",u.style.position="fixed",u.style.background=o.chosenProject.color||o.backgroundColor,u.style.top=c+"px",u.style.left=h+"px",u.style.width=p+"px",u.style.height=d+"px",u.style.opacity=0,u.style.zIndex=5,document.body.appendChild(u);var m=new TimelineLite({onComplete:function(){o.shouldShowProjectOverlay=!0,u.parentNode.removeChild(u),TweenMax.staggerFromTo(".animate",.5,{y:"20px",opacity:0},{y:0,opacity:1,onComplete:function(){o.isAnimating=!1}},.1)}});m.to("#"+o.chosenID+" .uk-overlay-panel h3",.3,{y:"+=100%",opacity:0}),m.to(u,.3,{opacity:1},"-=0.3"),768>s?m.to(u,.3,{top:0,left:0,width:"100%",height:"100%"}):(m.to(u,.4,{top:0,height:"100%"},"-=0.1"),m.to(u,.3,{left:0,width:"100%"}))}},closeProjectModal:function(){var e=this;if(e.shouldShowProjectOverlay&&!e.isAnimating){e.isAnimating=!0;var t=document.documentElement,o=document.body;t.removeAttribute("style"),o.removeAttribute("style"),window.scrollTo(0,e.scrollPos);var i=document.getElementById(e.chosenID),n=document.getElementsByClassName("overflow-container"),s=i.getBoundingClientRect(),a=s.top,l=s.left,r=s.width,c=s.height,h=document.createElement("div");h.style.position="fixed",h.style.background=e.chosenProject.color||e.backgroundColor,h.style.top=0,h.style.left=0,h.style.width="100%",h.style.height="100%",h.style.zIndex=5,document.body.appendChild(h),TweenMax.to(".animate",.5,{y:20,opacity:0,onComplete:function(){n[0].scrollTop=0,e.shouldShowProjectOverlay=!1;var t=new TimelineLite({onComplete:function(){h.parentNode.removeChild(h),e.isAnimating=!1,e.chosenProject={}}});t.to(h,.3,{top:a+"px",left:l+"px",width:r+"px",height:c+"px"}),t.to(h,.3,{opacity:0}),t.to("#"+e.chosenID+" .uk-overlay-panel h3",.3,{y:"-=100%",opacity:1},"-=0.4")}})}}}});"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1);