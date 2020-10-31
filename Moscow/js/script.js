$(document).ready(function(){
	$(function() {
		$('select').styler();
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
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(this).toggleClass('active');
		$(toggle_id).toggleClass('active');
	}); 
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $(function(){
        $(".tabs").tabs();
    });
	$('.one-time').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
	$('.first_slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  dotsClass: 'custom_paging',
	  customPaging: function (slider, i) {
			//FYI just have a look at the object to find available information
			//press f12 to access the console in most browsers
			//you could also debug or look in the source
			console.log(slider);
			return  (i + 1) + ' <span>/' + slider.slideCount + '</span>';
	  }
	});
	$('.advantages-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  dotsClass: 'advantages_paging',
	  customPaging: function (slider, i) {
			//FYI just have a look at the object to find available information
			//press f12 to access the console in most browsers
			//you could also debug or look in the source
			console.log(slider);
			return  (i + 1) + ' <span>/' + slider.slideCount + '</span>';
	  }
	});
	
	$(document).ready(function(){
		$('.main-menu ul li a').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
			if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 64}, 1000); // анимируем скроолинг к элементу scroll_el
			}
			return false; // выключаем стандартное действие
		});
	});
});