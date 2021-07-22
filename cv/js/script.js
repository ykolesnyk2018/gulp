/* Lazyload */
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
/* Lazyload */
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
	$('.one-time').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
});