$(document).ready(function() {
	$('.portfolio').waypoint(function(direction) {
		$('#navtohome').toggleClass('currentpage');
		$('#navtoport').toggleClass('currentpage');
	});
	$('.resume').waypoint(function(direction) {
		$('#navtoport').toggleClass('currentpage');
		$('#navtores').toggleClass('currentpage');
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
	$('.tohome').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: 0
		});
	});
	$('#navtoport').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $("#portfolio").offset().top
		});
	});
	$('#navtores').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $("#resume").offset().top
		});
	});
	$('#navtocon').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $("#contact").offset().top
		});
	});
	$('#sidebar-tohome').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $("#top").offset().top
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
	$('.header1').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
		scrollTop: 0
		});
	});
	$('.overlay').click(function() {
		$(".lyrics").fadeOut();
		$(".overlay").fadeOut(function() {
			$(".lyrics1").html("");
		});
		var sidebar = $('#m-sidebar');
		if (sidebar.hasClass('visible')){
			sidebar.animate({"left":"-50%"}, 350).removeClass('visible');
		}
	});
});
