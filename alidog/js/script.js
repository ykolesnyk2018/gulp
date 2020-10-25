$(document).ready(function(){
	$(function() {
		$('select').styler();
  	});
	/* toggle */
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(this).toggleClass("active");
		$(toggle_id).toggleClass("active");
	}); 
	/* toggle */
	/* popUp */
    $('.show_popup').click(function() {
		var popup_id = $('#' + $(this).attr("data-target"));
		$(popup_id).show();
		$('.overlay').show();
	}); 
	$('.overlay, .popup-close').click(function() {
		$('.overlay, .popup').hide();
	});
	/* popUp */
	$(function(){
		var availableTags = [
		  "Зарядка JD233",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "COBOL",
		  "ColdFusion",
		  "Erlang",
		  "Fortran",
		  "Groovy",
		  "Haskell",
		  "Java",
		  "JavaScript",
		  "Lisp",
		  "Perl",
		  "PHP",
		  "Python",
		  "Ruby",
		  "Scala",
		  "Scheme"
		];
		$("#tags").autocomplete({
		  source: availableTags
		});
	 });
    $('#tags').click(function() {
		$(".close-autocomplete").addClass('active');
		$(".search-bg").addClass('active');
		$(".search-form").addClass('active');
	}); 
    $('.close-autocomplete, .search-bg').click(function() {
		$(".search-bg").removeClass("active");
		$("#tags").autocomplete("close");
		$("#tags").val('');
		$(this).removeClass('active');
		$(".search-form").removeClass('active');
		$(".close-autocomplete").removeClass('active');
	}); 
	$('.main-slider').slick({
		arrows: true,
		dots: true,
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 720,
			  settings: {
				arrows: false,
  				adaptiveHeight: true
			  }
			}
		  ]
	});
	$('.feedbacks-slider').slick({
	  dots: true,
	  speed: 300,
	  slidesToScroll: 1,
  	  adaptiveHeight: true,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 720,
		  settings: {
			  arrows: false,
	  	      variableWidth: false
		  }
		}
	  ]
	});
	$(function(){
		$(".tabs").tabs();
	});
    if(window.innerWidth < 720){
        $(".show_popup").click(function(){
            $('body').addClass("fix");
        }); 
        $(".popup-close").click(function(){
            $('body').removeClass("fix");
        }); 
        $(".search-form form .close-autocomplete").click(function(){
            $('.search-form').addClass("active");
        }); 
    };
	$(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			$('header').addClass('shadow');
		}
		else { 
			$('.shadow').removeClass('shadow');
		}
	});
	
	
    $(function() {
        $(".search-btn, .main-menu-btn, .filter-btn, .filter-btn2").click(function(){
            $('body').toggleClass("fix");
        }); 
    });
    $(function() {
        $(".main-menu-btn").click(function(){
            $('header').toggleClass("main-menu-fix");
        }); 
    });
    $(function() {
        $(".filter-rating a").click(function(){
			$(".filter-rating a").removeClass('active');
            $(this).addClass("active");
        }); 
    });
	$( "#slider-range" ).slider({
	      // orientation: "vertical",
	      // step: 15,
	      range: true,
	      min: 0,
	      max: 35340,
	      values: [ 0, 4000 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.values[ 0 ] );
	        $( "#amount_1" ).val( ui.values[ 1 ] );
	      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	// Изменение местоположения ползунка при вводиде данных в первый элемент input
	$("input#amount").change(function(){
		var value1=$("input#amount").val();
		var value2=$("input#amount_1").val();
	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#amount").val(value1);
		}
		$("#slider-range").slider("values",0,value1);	
	});
	  
	// Изменение местоположения ползунка при вводиде данных в второй элемент input 	
	$("input#amount_1").change(function(){
		var value1=$("input#amount").val();
		var value2=$("input#amount_1").val();

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#amount_1").val(value2);
		}
		$("#slider-range").slider("values",1,value2);
	});

	// фильтрация ввода в поля
	jQuery('#amount, #amount_1').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;

	});
	
	
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true,
	  variableWidth: true
	});
	 $('.slider-for2').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  fade: true,
	  asNavFor: '.slider-nav2'
	});
	$('.slider-nav2').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for2',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true,
	  variableWidth: true
	});
    $('.slider-nav2').click(function() {
		$('.slider-for2').addClass("active");
		$('.slider-for').removeClass("active");
	}); 
    $('.slider-nav').click(function() {
		$('.slider-for').addClass("active");
		$('.slider-for2').removeClass("active");
	}); 
});