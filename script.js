$(document).ready(function() {
	$.ajaxSetup({
    	headers: { 
    		'X-Wikia-API-Key': '43af6ed19dfcc1dc9d7943d8548953529fc75fac' 
    	},

	});

	$('.mytaste').waypoint(function(direction) {
	  $('#navtohome').toggleClass('currentpage');
	  $('#navtotaste').toggleClass('currentpage');
	});
	$('.myalbum').waypoint(function(direction) {
	  $('#navtoalbum').toggleClass('currentpage');
	  $('#navtotaste').toggleClass('currentpage');
	  $(".header").html("My Fav Albums");
	  if (direction === "up") {
			$(".header").html("Home");
		}
	});
	$("#m-sidebar-btn").click(function () {	 
		var sidebar = $('#m-sidebar');
		if (sidebar.hasClass('visible')){
	        sidebar.animate({"left":"-50%"}, 350).removeClass('visible');
	    } else {
	        sidebar.animate({"left":"0px"}, 350).addClass('visible');
	    }
	    $(".overlay").fadeToggle();
	});
});

function validateRequired(field,alerttxt){
	if (field.value==null||field.value==""){
		// $("label#"+field.name).css("color", "red");
		$("div#"+field.name+"error").css("display", "block");
		return false;
	} else {
		$("div#"+field.name+"error").css("display", "none");
		$("label#"+field.name).css("color", "");
		return true;
	}
}
function validateEmail(field,alerttxt){ 
	var apos=field. value.indexOf("@"); 
	var dotpos=field.value.lastIndexOf("."); 
	if (apos<1||dotpos-apos<2){
		// $("input#email").css("background-color", "red");
		$("div#"+field.name+"error").css("display", "block");
		return false;
	} else {
		$("div#"+field.name+"error").css("display", "none");
		// $("input#email").css("background-color", "");
		return true;
	} 
}
function  validateForm(){
	if (false==validateRequired(document.forms["contact"]["name"], "Name must be supplied")){
		return false;
	}
	if (false==validateEmail(document.forms["contact"]["email"], "Valid Email must be supplied")){
		return false;
	}
	if (false==validateRequired(document.forms["contact"]["message"], "Message must be supplied")){
		return false;
	}
	return true;
}
$(document).ready(function() {
    $('.tohome').click(function(e) {
    	e.preventDefault(); 
        $('html, body').stop().animate({
           scrollTop: 0
        });
    });
    $('#totaste').click(function(e) {
    	e.preventDefault(); 
        $('html, body').stop().animate({
           scrollTop: $("#mytaste").offset().top
        });
    });
    $('#toalbum').click(function(e) {
    	e.preventDefault(); 
        $('html, body').stop().animate({
           scrollTop: $("#myalbum").offset().top
        });
    });

    $('#sidebar-tohome').click(function(e) {
    	e.preventDefault(); 
        $('html, body').stop().animate({
           scrollTop: 0
        });
        var sidebar = $('#m-sidebar');
		if (sidebar.hasClass('visible')){
	        sidebar.animate({"left":"-50%"}, 350).removeClass('visible');
	    } else {
	        sidebar.animate({"left":"0px"}, 350).addClass('visible');
	    }
	    $(".overlay").fadeOut();
    });

    $('#sidebar-toalbum').click(function(e) {
    	e.preventDefault(); 
        $('html, body').stop().animate({
           scrollTop: $("#myalbum").offset().top
        });
        var sidebar = $('#m-sidebar');
		if (sidebar.hasClass('visible')){
	        sidebar.animate({"left":"-50%"}, 350).removeClass('visible');
	    } else {
	        sidebar.animate({"left":"0px"}, 350).addClass('visible');
	    }
	    $(".overlay").fadeOut();
    });

    $('.header').click(function(e) {
    	e.preventDefault(); 
        $('html, body').stop().animate({
           scrollTop: 0
        });
    });

	 $('#happy-lyric').click(function() {
			$.getJSON("http://lyrics.wikia.com/api.php?func=getSong&artist=Pharrell_Williams&song=Happy&fmt=realjson&callback=?", function (data) {
				$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/y6Sxv-sUYtM' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
				},"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});

	 $('#get-lucky-lyric').click(function() {
			$.getJSON("http://lyrics.wikia.com/api.php?func=getSong&artist=Daft_Punk&song=Get_Lucky&fmt=realjson&callback=?", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/5NV6Rdv1a3I' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#beyond-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Daft_Punk&song=Beyond&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/3T0NqvdUiWI' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#within-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Daft_Punk&song=Within&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/cuj__JnGWLg' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#someone-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Adele&song=Someone_like_you&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/hLQl3WQQoQ0' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#rolling-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Adele&song=Rolling_In_the_deep&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/rYEDA3JcQqw' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#rumour-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Adele&song=Rumour_has_it&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/vXottBGAQp8' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#ateam-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Ed_Sheeran&song=The_A_Team&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/UAWcs5H-qgQ' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#lego-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Ed_Sheeran&song=Lego_House&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/c4BLVznuWnU' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#this-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Ed_Sheeran&song=This&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/KqzlYTmFBGY' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('#young-lyric').click(function() {
			$.get("http://lyrics.wikia.com/api.php?artist=Fun&song=We_Are_Young&fmt=realjson", function (data) {
					$(".lyrics1").html("<strong>" + data.song + "<br/><span class='muted'>by " + data.artist + "</span></strong><br/><br/>" + "<iframe width='560' height='315' src='http://www.youtube.com/embed/Sv6dMFF_yts' frameborder='0' allowfullscreen></iframe><br/><br/><p>" + data.lyrics + "</p><br/><br/><a href='" + data.url + "'>" + data.url + "</a>");
			 },"jsonp");
			$(".lyrics").fadeIn();
			$(".overlay").fadeIn();

		
	});
	 $('.overlay').click(function() {
	 	$(".lyrics1").html("");
	 	$(".lyrics").fadeOut();
	 	$(".overlay").fadeOut();
	 	var sidebar = $('#m-sidebar');
		if (sidebar.hasClass('visible')){
	        sidebar.animate({"left":"-50%"}, 350).removeClass('visible');
	    } 
	 	});
});  