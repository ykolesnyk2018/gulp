$( document ).ready(function(){
    $('.show-more').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.no-when').toggleClass('active');
    });
    $('.return').click(function(e){
        e.preventDefault();
        $('.show-more').removeClass('active');
        $('.no-when').removeClass('active');
    });
    $('.show-more2').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.when-more2').toggleClass('active');
    });
    $('.return2').click(function(e){
        e.preventDefault();
        $('.show-more2').removeClass('active');
        $('.when-more2').removeClass('active');
    });
    $('.open-popup').click(function(e){
        e.preventDefault();
        $('.overflow').toggleClass('active');
        $('.close').toggleClass('active');
    });
    $('.overflow, .close, .close-button').click(function(e){
        e.preventDefault();
        $('.popup.active').removeClass('active');
        $('.overflow.active').removeClass('active');
        $('.close.active').removeClass('active');
    });
    $('.open-popup1').click(function(e){
        e.preventDefault();
        $('.popup1').toggleClass('active');
    });
    $('.open-popup2').click(function(e){
        e.preventDefault();
        $('.popup2').toggleClass('active');
    });
    $('.open-popup3').click(function(e){
        e.preventDefault();
        $('.popup3').toggleClass('active');
    });
    $('.open-popup4').click(function(e){
        e.preventDefault();
        $('.popup4').toggleClass('active');
    });
    $('.open-popup5').click(function(e){
        e.preventDefault();
        $('.popup5').toggleClass('active');
    });
    $('.open-popup6').click(function(e){
        e.preventDefault();
        $('.popup6').toggleClass('active');
    });
    $('.open-popup7').click(function(e){
        e.preventDefault();
        $('.popup7').toggleClass('active');
    });
    $('.rate-the-book a:nth-child(1)').focus(function(e){
        e.preventDefault();
        $('.rate-the-book a').removeClass('active');
        $('.rate-the-book a:nth-child(1)').addClass('active');
    });
    $('.rate-the-book a:nth-child(2)').focus(function(e){
        e.preventDefault();
        $('.rate-the-book a').removeClass('active');
        $('.rate-the-book a:nth-child(1)').addClass('active');
        $('.rate-the-book a:nth-child(2)').addClass('active');
    });
    $('.rate-the-book a:nth-child(3)').focus(function(e){
        e.preventDefault();
        $('.rate-the-book a').removeClass('active');
        $('.rate-the-book a:nth-child(1)').addClass('active');
        $('.rate-the-book a:nth-child(2)').addClass('active');
        $('.rate-the-book a:nth-child(3)').addClass('active');
    });
    $('.rate-the-book a:nth-child(4)').focus(function(e){
        e.preventDefault();
        $('.rate-the-book a').removeClass('active');
        $('.rate-the-book a:nth-child(1)').addClass('active');
        $('.rate-the-book a:nth-child(2)').addClass('active');
        $('.rate-the-book a:nth-child(3)').addClass('active');
        $('.rate-the-book a:nth-child(4)').addClass('active');
    });
    $('.rate-the-book a:nth-child(5)').focus(function(e){
        e.preventDefault();
        $('.rate-the-book a').removeClass('active');
        $('.rate-the-book a:nth-child(1)').addClass('active');
        $('.rate-the-book a:nth-child(2)').addClass('active');
        $('.rate-the-book a:nth-child(3)').addClass('active');
        $('.rate-the-book a:nth-child(4)').addClass('active');
        $('.rate-the-book a:nth-child(5)').addClass('active');
    });
    
    $(function() {
      $('select').styler();
    });
    $('.child ano-no-no-no-no-no-no-no-no').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        
        $('.user').removeClass('active');
        $(".user-menu").removeClass('active');
    });
    $('.free-download-title').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.navigation-for-mobil-bottom-right').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.reader-inside-content-top').toggleClass('active');
    });
    $('.close-popup-menu').click(function(e){
        e.preventDefault();
        $(".child a").removeClass('active');
    });
    $('.user').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(".user-menu").toggleClass('active');
        $(".mobil-overflow").toggleClass('active');
        $("body").toggleClass('fixed');
        
        $(".child a").removeClass('active');
    });
    $('.main-menu-button').click(function(e){
        e.preventDefault();
        $('.main-menu-button').toggleClass('active');
        $('.main-menu').toggleClass('active');
        $(".mobil-overflow").addClass('active');
        
        $('.user-menu').removeClass('active');
        $("body.fixed").removeClass('fixed');
    });
    
    $('.main-menu-button').click(function(e){
        e.preventDefault();
        $('.main-menu-mobil').addClass('active');
    });
    $('.main-menu-mobil-container>ul>li.child>a').click(function(e){
        e.preventDefault();
        $(this).addClass('active');
        $('.main-menu-mobil').addClass('inside');
    });
    $('.prev').click(function(e){
        e.preventDefault();
        $('.main-menu-mobil-container>ul>li.child>a').removeClass('active');
        $('.main-menu-mobil').removeClass('inside');
    });
    
    $('.mobil-overflow').click(function(e){
        $(".mobil-overflow").removeClass('active');
        $(".user-menu").removeClass('active');
        $("body").removeClass('fixed');
        $('.main-menu-mobil').removeClass('active');
        $('.header-bottom').removeClass('active');
        $('body').removeClass('no-scroll');
    });
    $('.header-bottom .search input').click(function(e){
        e.preventDefault();
        $('.header-bottom').toggleClass('active');
        $('.mobil-overflow').toggleClass('active');
    });
    $('.header-bottom-hidden-btn').click(function(e){
        e.preventDefault();
        $('.header-bottom').removeClass('active');
        $('.mobil-overflow').removeClass('active');
        $('body').removeClass('no-scroll');
        
        
        $('.header-bottom-hidden-bottom').removeClass('active');
        $('.mobil-overflow').removeClass('active');
        $('.header-bottom').removeClass('active');
        $('.header-bottom-hidden-right').removeClass('active');
    });
    $('.advanced-search-title').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.header-bottom-hidden-right').click(function(e){
        e.preventDefault();
        $('body').addClass('no-scroll');
        $('.header-bottom-hidden-bottom').toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.open-mobil-filter').click(function(e){
        e.preventDefault();
        $('body').addClass('no-scroll');
        $('.header-bottom-hidden-bottom').toggleClass('active');
        $('.mobil-overflow').toggleClass('active');
        $('.header-bottom').toggleClass('active');
        $('.header-bottom-hidden-right').toggleClass('active');
    });
    $('.genres-block-title').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.multiple-items2').slick({
      dots: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1429,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.authors-block-right').slick({
      dots: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1429,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.multiple-items').slick({
      dots: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1429,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.forgot-btn').click(function(e){
        e.preventDefault();
        $('.forgot-hidden').toggleClass('active');
    });
    $('.quotes-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.search-block-head').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.type-one').click(function(e){
        e.preventDefault();
        $('.category').removeClass('type-one');
        $('.category').removeClass('type-two');
        $('.category').removeClass('type-three');
        $('.category').removeClass('type-four');
        $('.category-navigation a').removeClass('active');
        
        $(this).addClass('active');
        $('.category').addClass('type-one');
    });
    $('.type-two').click(function(e){
        e.preventDefault();
        $('.category').removeClass('type-one');
        $('.category').removeClass('type-two');
        $('.category').removeClass('type-three');
        $('.category').removeClass('type-four');
        $('.category-navigation a').removeClass('active');
        
        $(this).addClass('active');
        $('.category').addClass('type-two');
    });
    $('header, .main-banner-left>div div, .main-banner-right, .slider-module').hover(function(e){
        e.preventDefault();
        $('.main-banner-left>div div').removeClass('active');
        $('.main-banner-left>div div').removeClass('active-bottom');
    });
    $('.row1-top').hover(function(e){
        e.preventDefault();
        $(this).addClass('active');
    });
    $('.row1-bottom').hover(function(e){
        e.preventDefault();
        $('.row1-top').addClass('active-bottom');
    });
    $('.row3-top').hover(function(e){
        e.preventDefault();
        $(this).addClass('active');
    });
    $('.row3-bottom').hover(function(e){
        e.preventDefault();
        $('.row3-top').addClass('active-bottom');
    });
    $('.row5-top').hover(function(e){
        e.preventDefault();
        $(this).addClass('active');
    });
    $('.row5-bottom').hover(function(e){
        e.preventDefault();
        $('.row5-top').addClass('active-bottom');
    });
    $('.type-three').click(function(e){
        e.preventDefault();
        $('.category').removeClass('type-one');
        $('.category').removeClass('type-two');
        $('.category').removeClass('type-three');
        $('.category').removeClass('type-four');
        $('.category-navigation a').removeClass('active');
        
        $(this).addClass('active');
        $('.category').addClass('type-three');
    });
    $('.type-four').click(function(e){
        e.preventDefault();
        $('.category').removeClass('type-one');
        $('.category').removeClass('type-two');
        $('.category').removeClass('type-three');
        $('.category').removeClass('type-four');
        $('.category-navigation a').removeClass('active');
        
        $(this).addClass('active');
        $('.category').addClass('type-four');
    });
    $('.setting').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.search-left').toggleClass('active');
    });
    $(function(){
        $(".tabs").tabs();
    });
    $(".spinner").spinner();
    $(".reader-inside-content-top-left .spinner").spinner({
      min: 0,
      max: 2500,
      step: 10,
      start: 100
    });
    (function (document, window, index){
			'use strict';
			var inputs = document.querySelectorAll('.inputfile');
			Array.prototype.forEach.call(inputs, function (input) {
				var label = input.nextElementSibling,
						labelVal = label.innerHTML;

				input.addEventListener('change', function (e) {
					var fileName = '';
					if (this.files && this.files.length > 1)
						fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
					else
						fileName = e.target.value.split('\\').pop();

					if (fileName)
						label.querySelector('span').innerHTML = fileName;
					else
						label.innerHTML = labelVal;
				});

				// Firefox bug fix
				input.addEventListener('focus', function () {
					input.classList.add('has-focus');
				});
				input.addEventListener('blur', function () {
					input.classList.remove('has-focus');
				});
			});
		}(document, window, 0));
    
    function detectBrowserSize() {
        var myWidth = 0;
        if (typeof (window.innerWidth) == 'number') {
            //Non-IE
            myWidth = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
        }
        return myWidth;
    }
    if (detectBrowserSize() < 767 ){ 
        $('.products-mobil-slider').slick({
          dots: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
            infinite: false,
            swipeToSlide: true
        });
        $('.library-slider').slick({
          dots: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
            infinite: false,
            swipeToSlide: true
        });
        $('.similar-books').slick({
          dots: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
            infinite: false,
            swipeToSlide: true
        });
    }
    $('#color1').change(function(e){
        e.preventDefault();
        var idColor1 = document.getElementById('color1').value;
        document.getElementById('color_1').style.background = idColor1;
    });
    $('#color2').change(function(e){
        e.preventDefault();
        var idColor1 = document.getElementById('color2').value;
        document.getElementById('color_2').style.background = idColor1;
    });
    
    
    
    
        function getChar(event) {
          if (event.which == null) {
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode) // IE
          }

          if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which) // остальные
          }

          return null; // специальная клавиша
    }
    
    
    $('.navigation-left form input')[0].onkeypress = function(e) {

          e = e || event;

          if (e.ctrlKey || e.altKey || e.metaKey) return;

          var chr = getChar(e);

          // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
          // на всякий случай лучше вынести проверку chr == null отдельно
          if (chr == null) return;

          if (chr < '0' || chr > '9') {
            return false;
          }

        }
    
    $('.numer-filter2')[0].onkeypress = function(e) {

          e = e || event;

          if (e.ctrlKey || e.altKey || e.metaKey) return;

          var chr = getChar(e);

          // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
          // на всякий случай лучше вынести проверку chr == null отдельно
          if (chr == null) return;

          if (chr < '0' || chr > '9') {
            return false;
          }

        }
    
    
    $('.ui-spinner-input')[0].onkeypress = function(e) {

          e = e || event;

          if (e.ctrlKey || e.altKey || e.metaKey) return;

          var chr = getChar(e);

          // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
          // на всякий случай лучше вынести проверку chr == null отдельно
          if (chr == null) return;

          if (chr < '0' || chr > '9') {
            return false;
          }

        }

});