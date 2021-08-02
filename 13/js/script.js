$(document).ready(function(){
	$(function() {
		$('select.styler').styler();
  	});
	if(document.querySelector(".container")){
	};
	/* Tabs */
	$('.tabs-navigation li a').click(function() {
		var tabs_id = $('#' + $(this).attr("data-target"));
		$(this).closest("ul").find("li").removeClass("active");
		$(this).closest(".tabs").find(".tabs-con").removeClass("active");
		$(this).parent().addClass("active");
		$(tabs_id).addClass("active");
	}); 
	/* Tabs */
	/* toggle */
    $('.toggle').click(function() {
		var toggle_id = "#" + $(this).attr("data-target");
		$(toggle_id).toggleClass("active");
		$(this).toggleClass("active");
	}); 
	/* toggle */
	
    $('.main-menu ul li a, .anchor a, .go-to').click( function(){
	var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
	    return false;
    });
	
	/* popUp */
    $('.show_popup').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).show();
		$('.overlay_popup').show();
	}); 
	$('.overlay_popup').click(function() {
		$('.overlay_popup, .popup').hide();
	});
	/* popUp */
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
    });
	$('.main-slider').slick({
	  dots: true,
    arrows: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 1
	});
});