$(document).ready(function() {
	$('.portfolio').waypoint(function(direction) {
		$('.navtohome').toggleClass('currentpage');
		$('.navtoport').toggleClass('currentpage');
	});
	$('.resume').waypoint(function(direction) {
		$('.navtoport').toggleClass('currentpage');
		$('.navtores').toggleClass('currentpage');
	});
	$('.tohome').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: 0
		});
	});
	$('.navtoport').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $("#portfolio").offset().top
		});
	});
	$('.navtores').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $("#resume").offset().top
		});
	});
	$('.navtocon').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $("#contact").offset().top
		});
	});
	$('.header1').click(function(e) {
		e.preventDefault();
		$('html, body').stop().animate({
		scrollTop: 0
		});
	});
});
