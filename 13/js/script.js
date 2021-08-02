$(document).ready(function(){
	/* toggle */
    $('.toggle').click(function() {
		var toggle_id = "#" + $(this).attr("data-target");
		$(toggle_id).toggleClass("active");
		$(this).toggleClass("active");
	}); 
	/* toggle */
	/* popUp */
    $('.show_popup').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).show();
		$('.overlay_popup').show();
	}); 
	$('.overlay_popup, .close').click(function() {
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