$(document).ready(function() {
	$(function() {
	    $.mobile.panel.prototype._positionPanel = function() {
	        var self = this,
	            panelInnerHeight = self._panelInner.outerHeight(),
	            expand = panelInnerHeight > $.mobile.getScreenHeight();

	        if ( expand || !self.options.positionFixed ) {
	            if ( expand ) {
	                self._unfixPanel();
	                $.mobile.resetActivePageHeight( panelInnerHeight );
	            }
	          //window.scrollTo( 0, $.mobile.defaultHomeScroll );
	        } else {
	            self._fixPanel();
	        }
	    };
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
});
