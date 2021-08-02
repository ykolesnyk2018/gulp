/* Lazyload 
var imgs = [];
$('img').each(function () {
	$(this).attr('data-src', $(this).attr("src"));
	$(this).attr('src', "images/lazyload.png")
});

const lazyImages = document.querySelectorAll('img,source');
const loadMapBlock = document.querySelectorAll('._load-map');
const windowHeight = document.documentElement.clientHeight;
let lazyImagesPposition = [];
if(lazyImages.length>0){
	lazyImages.forEach(img => {
		if(img.dataset.src || img.dataset.srcset){
			lazyImagesPposition.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}
window.addEventListener("scroll", lazyScrollCheck);
$(".slick-arrow").click(function(){
	$(".slick-slider").slick("refresh"); 
});
console.log(lazyImagesPposition);
function lazyScroll(){
	if(lazyImagesPposition[imgIndex] > 0){
		lazyScrollCheck();
	}
}
function lazyScrollCheck() {
	let imgIndex = lazyImagesPposition.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if(imgIndex >= 0){
		if(lazyImages[imgIndex].dataset.src){
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if(lazyImages[imgIndex].dataset.srcset){
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPposition[imgIndex];
	}
}
 Lazyload */
$(document).ready(function(){
	$('.services').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 6,
	  variableWidth: true,
  	  focusOnSelect: true
	});
	$('.services').slick('slickGoTo', 3);
	if(document.querySelector(".styler")){
		$(function() {
			$('select.styler').styler();
		});
	};
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  adaptiveHeight: true,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
	  autoplay: true,
	  autoplaySpeed: 10000,
	});
	$('.slider-nav').slick({
	  slidesToShow: 10,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  focusOnSelect: true,
  	  variableWidth: true,
	  autoplay: true,
	  autoplaySpeed: 10000,
	  dots: false,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			  arrows: false
		  }
		}
	  ]
	});
	$('.update').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 4,
	  centerMode: false,
	  variableWidth: true,
  	  focusOnSelect: true,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			arrows: false,
	  		adaptiveHeight: true
		  }
		}
	  ]
	});
	$('.feedbacks').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			arrows: false,
	  		variableWidth: true,
  	  		focusOnSelect: true,
	     adaptiveHeight: true
		  }
		}
	  ]
	});
	$('.clients-slider').slick({
	      slidesToShow: 4,
	      slidesToScroll: 1,
 		  rows: 2,
		  responsive: [
			{
			  breakpoint: 1310,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				arrows: false
			  }
			}
		  ]
	});
	
	/* popUp */
	if(document.querySelector(".showPopup")){
		$('.showPopup').click(function() {
			var popup_id = $('#' + $(this).attr("rel"));
			$(popup_id).addClass('active');
			$('.overlayPopup').addClass('active');
			$('body').addClass('popupMode');
		}); 
		$('.overlayPopup, .close').click(function() {
			$('.overlayPopup, .popup').removeClass('active');
			$('body').removeClass('popupMode');
		});
	};
	/* popUp */
	if(document.querySelector(".toggle")){
		$(function() {
			$(".toggle").click(function(){
				var toggle_id = "#" + $(this).attr("data-target");
				$(toggle_id).toggleClass("active");
				$(this).toggleClass("active");
			}); 
		});
	};
	
	/* Tabs */
	if(document.querySelector(".tabs-navigation")){
		$('.tabs-navigation li a').click(function() {
			var tabs_id = $('#' + $(this).attr("data-target"));
			$(this).closest("ul").find("li").removeClass("active");
			$(this).closest(".tabs").find(".tabs-con").removeClass("active");
			$(this).parent().addClass("active");
			$(tabs_id).addClass("active");
		}); 
	};
	/* Tabs */
	$('.one-time').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
	/* SCROLL */
	$('*[data-scrollTo]').click( function(){ 
		var scroll_el = $(this).attr('data-scrollTo'); 
		$(".dropdown-menu-mob, .main-menu-btn").removeClass("active");
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
			}
		return false;
	});
	/* SCROLL */
	if(window.innerWidth <= 1310){
    
	$('.tarifs').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
    speed: 300,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			arrows: false,
	  		variableWidth: true,
  	  		focusOnSelect: true,
	     adaptiveHeight: true
		  }
		}
	  ]
	});
	 }
});