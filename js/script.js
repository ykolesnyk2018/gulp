$(document).ready(function () {
    // WEBP FUNCTION
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    // =======================================================================================================================

    // TEST WEBP
    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });

    // =======================================================================================================================
    // function findVideos() {
    //     let videos = document.querySelectorAll('.video');

    //     for (let i = 0; i < videos.length; i++) {
    //         setupVideo(videos[i]);
    //     }
    // }

    // function setupVideo(video) {
    //     let link = video.querySelector('.video__link');
    //     let media = video.querySelector('.video__media');
    //     let button = video.querySelector('.video__button');
    //     let id = parseMediaURL(media);

    //     video.addEventListener('click', () => {
    //         let iframe = createIframe(id);

    //         link.remove();
    //         button.remove();
    //         video.appendChild(iframe);
    //     });

    //     link.removeAttribute('href');
    //     video.classList.add('video_enabled');
    // }

    // function parseMediaURL(media) {
    //     let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    //     let url = media.src;
    //     let match = url.match(regexp);

    //     return match[1];
    // }

    // function createIframe(id) {
    //     let iframe = document.createElement('iframe');

    //     iframe.setAttribute('allowfullscreen', '');
    //     iframe.setAttribute('src', generateURL(id));
    //     iframe.classList.add('video__media');

    //     return iframe;
    // }

    // function generateURL(id) {
    //     let query = '?rel=0&showinfo=0&autoplay=1';

    //     return 'https://www.youtube.com/embed/' + id + query;
    // }

    // findVideos();
    // =======================================================================================================================

    // ANCHORS
    $(".anchors").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    // =======================================================================================================================


    //SLIDERS
    if ($('.pay-item__slider').length > 0) {
        $('.pay-item__slider').slick({
            //autoplay: true,
            //infinite: false,
            dots: true,
            arrows: true,
            accessibility: false,
            slidesToShow: 1,
            centerMode: true,
            // autoplaySpeed: 3000,
            //asNavFor:'',
            //appendDots:
            //appendArrows:$('.mainslider-arrows .container'),
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                    }
                }, {
                    breakpoint: 670,
                    settings: {
                        // centerMode: false,
                        arrow: false,
                    }
                }, {
                    breakpoint: 425,
                    settings: {
                        centerMode: false,
                    }
                }
            ]
        });
    }

    // =======================================================================================================================

    // TABS
    (function ($) {
        $(function () {

            $('ul.tabs__caption').each(function (i) {
                var storage = localStorage.getItem('tab' + i);
                if (storage) {
                    $(this).find('li').removeClass('active').eq(storage).addClass('active')
                        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(storage).addClass('active');
                }
            });

            $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
                var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
                localStorage.removeItem('tab' + ulIndex);
                localStorage.setItem('tab' + ulIndex, $(this).index());
            });

        });
    })(jQuery);

    // =======================================================================================================================
    var $counter = $('#counter');
    var $fill = $('.bar .fill');
    function setBar() {
        $fill.css("width", $counter.val() + "%");
    }
    $counter.on('input', setBar);
    setBar();

    $('.btn-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        setBar();
        return false;
    });
    $('.btn-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        setBar();
        return false;
    });
    // =======================================================================================================================

    // Dynamic Adapt v.1
    // HTML data-move="where(uniq class name),position(digi),when(breakpoint)"
    // e.x. data-move="item,2,992"
    // Andrikanych Yevhen 2020
    var move_array = [];
    var move_objects = document.querySelectorAll("[data-move]");

    if (move_objects.length > 0) {
        for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
            var _el6 = move_objects[_index10];

            var data_move = _el6.getAttribute("data-move");

            if (data_move != "" || data_move != null) {
                _el6.setAttribute("data-move-index", _index10);

                move_array[_index10] = {
                    parent: _el6.parentNode,
                    index: index_in_parent(_el6)
                };
            }
        }
    }

    function dynamic_adapt() {
        var w = document.querySelector("body").offsetWidth;

        if (move_objects.length > 0) {
            for (var _index11 = 0; _index11 < move_objects.length; _index11++) {
                var _el7 = move_objects[_index11];

                var _data_move = _el7.getAttribute("data-move");

                if (_data_move != "" || _data_move != null) {
                    var data_array = _data_move.split(",");

                    var data_parent = document.querySelector("." + data_array[0]);
                    var data_index = data_array[1];
                    var data_bp = data_array[2];

                    if (w < data_bp) {
                        if (!_el7.classList.contains("js-move_done_" + data_bp)) {
                            if (data_index > 0) {
                                //insertAfter
                                var actual_index = index_of_elements(data_parent)[data_index];
                                data_parent.insertBefore(_el7, data_parent.childNodes[actual_index]);
                            } else {
                                data_parent.insertBefore(_el7, data_parent.firstChild);
                            }

                            _el7.classList.add("js-move_done_" + data_bp);
                        }
                    } else {
                        if (_el7.classList.contains("js-move_done_" + data_bp)) {
                            dynamic_adaptive_back(_el7);

                            _el7.classList.remove("js-move_done_" + data_bp);
                        }
                    }
                }
            }
        }

        custom_adapt(w);
    }

    function dynamic_adaptive_back(el) {
        var index_original = el.getAttribute("data-move-index");
        var move_place = move_array[index_original];
        var parent_place = move_place["parent"];
        var index_place = move_place["index"];

        if (index_place > 0) {
            //insertAfter
            var actual_index = index_of_elements(parent_place)[index_place];
            parent_place.insertBefore(el, parent_place.childNodes[actual_index]);
        } else {
            parent_place.insertBefore(el, parent_place.firstChild);
        }
    }

    function index_in_parent(node) {
        var children = node.parentNode.childNodes;
        var num = 0;

        for (var _i2 = 0; _i2 < children.length; _i2++) {
            if (children[_i2] == node) return num;
            if (children[_i2].nodeType == 1) num++;
        }

        return -1;
    }

    function index_of_elements(parent) {
        var children = [];

        for (var _i3 = 0; _i3 < parent.childNodes.length; _i3++) {
            if (parent.childNodes[_i3].nodeType == 1 && parent.childNodes[_i3].getAttribute("data-move") == null) {
                children.push(_i3);
            }
        }

        return children;
    }

    window.addEventListener("resize", function (event) {
        dynamic_adapt();
    });
    dynamic_adapt();

    function custom_adapt(w) { }

    // =======================================================================================================================

    var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
    if (isMobile.any()) { }

    if (location.hash) {
        var hsh = location.hash.replace('#', '');
        if ($('.popup-' + hsh).length > 0) {
            popupOpen(hsh);
        } else if ($('div.' + hsh).length > 0) {
            $('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
        }
    }
    // $('.wrapper').addClass('loaded');

    var act = "click";
    if (isMobile.iOS()) {
        var act = "touchstart";
    }

    //POPUP
    $('.pl').click(function (event) {
        var pl = $(this).attr('href').replace('#', '');
        var v = $(this).data('ms');
        popupOpen(pl, v);
        return false;
    });
    function popupOpen(pl, v) {
        $('.popup').removeClass('active').hide();
        if (!$('.menu__body').hasClass('active')) {
            //$('body').data('scroll',$(window).scrollTop());
        }
        if (!isMobile.any()) {
            $('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
            $('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
        } else {
            setTimeout(function () {
                $('body').addClass('lock');
            }, 300);
        }
        history.pushState('', '', '#' + pl);
        if (v != '' && v != null) {
            $('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        }
        $('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

        if ($('.popup-' + pl).find('.slick-slider').length > 0) {
            $('.popup-' + pl).find('.slick-slider').slick('setPosition');
        }
    }
    function openPopupById(popup_id) {
        $('#' + popup_id).fadeIn(300).delay(300).addClass('active');
    }
    function popupClose() {
        $('.popup').removeClass('active').fadeOut(300);
        if (!$('.menu__body').hasClass('active')) {
            if (!isMobile.any()) {
                setTimeout(function () {
                    $('body').css({ paddingRight: 0 });
                    $('.pdb').css({ paddingRight: 0 });
                }, 200);
                setTimeout(function () {
                    $('body').removeClass('lock');
                    //$('body,html').scrollTop(parseInt($('body').data('scroll')));
                }, 200);
            } else {
                $('body').removeClass('lock');
                //$('body,html').scrollTop(parseInt($('body').data('scroll')));
            }
        }
        $('.popup-video__value').html('');

        history.pushState('', '', window.location.href.split('#')[0]);
    }
    $('.popup-close,.popup__close,.popup-details__btn-cancel, .popup-thanks__button').click(function (event) {
        popupClose();
        return false;
    });
    $('.popup').click(function (e) {
        if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
            popupClose();
            return false;
        }
    });
    $(document).on('keydown', function (e) {
        if (e.which == 27) {
            popupClose();
        }
    });

    $('.goto').click(function () {
        var el = $(this).attr('href').replace('#', '');
        var offset = 0;
        $('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

        if ($('.menu__body').hasClass('active')) {
            $('.menu__body,.icon-menu').removeClass('active');
            $('body').removeClass('lock');
        }
        return false;
    });

    //Клик вне области
    $(document).on('click touchstart', function (e) {
        if (!$(e.target).is(".select *")) {
            $('.select').removeClass('active');
        };
    });

    //UP
    // $(window).scroll(function () {
    //     var w = $(window).width();
    //     if ($(window).scrollTop() > 50) {
    //         $('#up').fadeIn(300);
    //     } else {
    //         $('#up').fadeOut(300);
    //     }
    // });
    // $('#up').click(function (event) {
    //     $('body,html').animate({ scrollTop: 0 }, 300);
    // });

    // $('body').on('click', '.tab__navitem', function (event) {
    //     var eq = $(this).index();
    //     if ($(this).hasClass('parent')) {
    //         var eq = $(this).parent().index();
    //     }
    //     if (!$(this).hasClass('active')) {
    //         $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
    //         $(this).addClass('active');
    //         $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
    //         if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
    //             $(this).closest('.tabs').find('.slick-slider').slick('setPosition');
    //         }
    //     }
    // });
    // $.each($('.spoller.active'), function (index, val) {
    //     $(this).next().show();
    // });
    // $('body').on('click', '.spoller', function (event) {
    //     if ($(this).hasClass('mob') && !isMobile.any()) {
    //         return false;
    //     }

    //     if ($(this).parents('.one').length > 0) {
    //         $(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
    //         $(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
    //     }

    //     if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
    //         $.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
    //             $(this).removeClass('active');
    //             $(this).next().slideUp(300);
    //         });
    //     }
    //     $(this).toggleClass('active').next().slideToggle(300, function (index, val) {
    //         if ($(this).parent().find('.slick-slider').length > 0) {
    //             $(this).parent().find('.slick-slider').slick('setPosition');
    //         }
    //     });
    //     return false;
    // });



    // function scrolloptions() {
    //     var scs = 100;
    //     var mss = 50;
    //     var bns = false;
    //     if (isMobile.any()) {
    //         scs = 10;
    //         mss = 1;
    //         bns = true;
    //     }
    //     var opt = {
    //         cursorcolor: "#fff",
    //         cursorwidth: "4px",
    //         background: "",
    //         autohidemode: true,
    //         cursoropacitymax: 0.4,
    //         bouncescroll: bns,
    //         cursorborderradius: "0px",
    //         scrollspeed: scs,
    //         mousescrollstep: mss,
    //         directionlockdeadzone: 0,
    //         cursorborder: "0px solid #fff",
    //     };
    //     return opt;
    // }
    // function scroll() {
    //     $('.scroll-body').niceScroll('.scroll-list', scrolloptions());
    // }
    // if (navigator.appVersion.indexOf("Mac") != -1) {
    // } else {
    //     if ($('.scroll-body').length > 0) { scroll(); }
    // }

    /*
    function scrollwhouse(){
            var scs=100;
            var mss=50;
            var bns=false;
        if(isMobile.any()){
            scs=10;
            mss=1;
            bns=true;
        }
        var opt={
            cursorcolor:"#afafaf",
            cursorwidth: "5px",
            background: "",
            autohidemode:false,
            railalign: 'left',
            cursoropacitymax: 1,
            bouncescroll:bns,
            cursorborderradius: "0px",
            scrollspeed:scs,
            mousescrollstep:mss,
            directionlockdeadzone:0,
            cursorborder: "0px solid #fff",
        };
        return opt;
    }
    $('.whouse-content-body').niceScroll('.whouse-content-scroll',scrollwhouse());
    $('.whouse-content-body').scroll(function(event) {
            var s=$(this).scrollTop();
            var r=Math.abs($(this).outerHeight()-$('.whouse-content-scroll').outerHeight());
            var p=s/r*100;
        $('.whouse-content__shadow').css({opacity:1-1/100*p});
    });
    */


    if ($('.t,.tip').length > 0) {
        tip();
    }
    function tip() {
        $('.t,.tip').webuiPopover({
            placement: 'top',
            trigger: 'hover',
            backdrop: false,
            //selector:true,
            animation: 'fade',
            dismissible: true,
            padding: false,
            //hideEmpty: true
            onShow: function ($element) { },
            onHide: function ($element) { },
        }).on('show.webui.popover hide.webui.popover', function (e) {
            $(this).toggleClass('active');
        });
    }

    // =======================================================================================================================

    // IBG
    function ibg() {
        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
    ibg();

    // =======================================================================================================================

    // BURGER
    let iconMenu = document.querySelector(".icon-menu");
    let body = document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    if (iconMenu) {
        iconMenu.addEventListener("click", function () {
            iconMenu.classList.toggle("active");
            body.classList.toggle("lock");
            menuBody.classList.toggle("active");
        });
    }

    // =======================================================================================================================

    // $('.item')
    //     .on('mouseenter', function (e) {
    //         let parentOffset = $(this).offset(),
    //             relX = e.pageX - parentOffset.left,
    //             relY = e.pageY - parentOffset.top;
    //         $(this).find('.item__overlay').css({ top: relY, left: relX })
    //     })
    //     .on('mouseout', function (e) {
    //         let parentOffset = $(this).offset(),
    //             relX = e.pageX - parentOffset.left,
    //             relY = e.pageY - parentOffset.top;
    //         $(this).find('.item__overlay').css({ top: relY, left: relX })
    //     });

    // =======================================================================================================================

    // $('span[data-value]').each(function () {
    //     this.innerText = $(this).attr('data-value');
    // });

    // =======================================================================================================================

    //FORMS
    function forms() {
        //SELECT
        // if ($('select').length > 0) {
        //     function selectscrolloptions() {
        //         var scs = 100;
        //         var mss = 50;
        //         if (isMobile.any()) {
        //             scs = 10;
        //             mss = 1;
        //         }
        //         var opt = {
        //             cursorcolor: "#9B4E7C",
        //             cursorwidth: "12px",
        //             background: "",
        //             autohidemode: false,
        //             bouncescroll: false,
        //             cursorborderradius: "10px",
        //             scrollspeed: scs,
        //             mousescrollstep: mss,
        //             directionlockdeadzone: 0,
        //             cursorborder: "0px solid #fff",
        //         };
        //         return opt;
        //     }

        //     function select() {
        //         $.each($('select'), function (index, val) {
        //             var ind = index;
        //             $(this).hide();
        //             if ($(this).parent('.select-block').length == 0) {
        //                 $(this).wrap("<div class='select-block " + $(this).attr('class') + "-select-block'></div>");
        //             } else {
        //                 $(this).parent('.select-block').find('.select').remove();
        //             }
        //             let cl = '';
        //             var milti = '';
        //             var check = '';
        //             var sblock = $(this).parent('.select-block');
        //             var soptions = "<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
        //             if ($(this).attr('multiple') == 'multiple') {
        //                 milti = 'multiple';
        //                 check = 'check';
        //             }
        //             $.each($(this).find('option'), function (index, val) {
        //                 if ($(this).attr('class') != '' && $(this).attr('class') != null) {
        //                     let cl = $(this).attr('class');
        //                 }
        //                 if ($(this).attr('value') != '') {
        //                     if ($(this).attr('data-icon') != '' && $(this).attr('data-icon') != null) {
        //                         soptions = soptions + "<div data-value='" + $(this).attr('value') + "' class='select-options__value_" + ind + " select-options__value value_" + $(this).val() + " " + cl + " " + check + "'><div><img src=" + $(this).attr('data-icon') + " alt=\"\"></div><div>" + $(this).html() + "</div></div>";
        //                     } else {
        //                         soptions = soptions + "<div data-value='" + $(this).attr('value') + "' class='select-options__value_" + ind + " select-options__value value_" + $(this).val() + " " + cl + " " + check + "'>" + $(this).html() + "</div>";
        //                     }
        //                 } else if ($(this).parent().attr('data-label') == 'on') {
        //                     if (sblock.find('.select__label').length == 0) {
        //                         sblock.prepend('<div class="select__label">' + $(this).html() + '</div>');
        //                     }
        //                 }
        //             });
        //             soptions = soptions + "</div></div></div>";
        //             if ($(this).attr('data-type') == 'search') {
        //                 sblock.append("<div data-type='search' class='select_" + ind + " select" + " " + $(this).attr('class') + "__select " + milti + "'>" +
        //                     "<div class='select-title'>" +
        //                     "<div class='select-title__arrow ion-ios-arrow-down'></div>" +
        //                     "<input data-value='" + $(this).find('option[selected="selected"]').html() + "' class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "' />" +
        //                     "</div>" +
        //                     soptions +
        //                     "</div>");
        //                 $('.select_' + ind).find('input.select-title__value').jcOnPageFilter({
        //                     parentSectionClass: 'select-options_' + ind,
        //                     parentLookupClass: 'select-options__value_' + ind,
        //                     childBlockClass: 'select-options__value_' + ind
        //                 });
        //             } else if ($(this).attr('data-icon') == 'true') {
        //                 sblock.append("<div class='select_" + ind + " select" + " " + $(this).attr('class') + "__select icon " + milti + "'>" +
        //                     "<div class='select-title'>" +
        //                     "<div class='select-title__arrow ion-ios-arrow-down'></div>" +
        //                     "<div class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "'><div><img src=" + $(this).find('option[selected="selected"]').attr('data-icon') + " alt=\"\"></div><div>" + $(this).find('option[selected="selected"]').html() + "</div></div>" +
        //                     "</div>" +
        //                     soptions +
        //                     "</div>");
        //             } else {
        //                 sblock.append("<div class='select_" + ind + " select" + " " + $(this).attr('class') + "__select " + milti + "'>" +
        //                     "<div class='select-title'>" +
        //                     "<div class='select-title__arrow ion-ios-arrow-down'></div>" +
        //                     "<div class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "'>" + $(this).find('option[selected="selected"]').html() + "</div>" +
        //                     "</div>" +
        //                     soptions +
        //                     "</div>");
        //             }
        //             if ($(this).find('option[selected="selected"]').val() != '') {
        //                 sblock.find('.select').addClass('focus');
        //             }

        //             if (sblock.find('.select-options__value').length == 1) {
        //                 sblock.find('.select').addClass('one');
        //             }

        //             if ($(this).attr('data-req') == 'on') {
        //                 $(this).addClass('req');
        //             }
        //             $(".select_" + ind + " .select-options-scroll").niceScroll('.select-options-list', selectscrolloptions());
        //         });
        //     }
        //     select();

        //     $('body').on('keyup', 'input.select-title__value', function () {
        //         $('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
        //         $(this).parents('.select').addClass('active');
        //         $(this).parents('.select').find('.select-options').slideDown(50, function () {
        //             $(this).find(".select-options-scroll").getNiceScroll().resize();
        //         });
        //         $(this).parents('.select-block').find('select').val('');
        //     });
        //     $('body').on('click', '.select', function () {
        //         if (!$(this).hasClass('disabled') && !$(this).hasClass('one')) {
        //             $('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
        //             $(this).toggleClass('active');
        //             $(this).find('.select-options').slideToggle(50, function () {
        //                 $(this).find(".select-options-scroll").getNiceScroll().resize();
        //             });

        //             //	var input=$(this).parent().find('select');
        //             //removeError(input);

        //             if ($(this).attr('data-type') == 'search') {
        //                 if (!$(this).hasClass('active')) {
        //                     searchselectreset();
        //                 }
        //                 $(this).find('.select-options__value').show();
        //             }


        //             var cl = $.trim($(this).find('.select-title__value').attr('class').replace('select-title__value', ''));
        //             $(this).find('.select-options__value').show().removeClass('hide').removeClass('last');
        //             if (cl != '') {
        //                 $(this).find('.select-options__value.' + cl).hide().addClass('hide');
        //             }
        //             if ($(this).find('.select-options__value').last().hasClass('hide')) {
        //                 $(this).find('.select-options__value').last().prev().addClass('last');
        //             }
        //         }
        //     });
        //     $('body').on('click', '.select-options__value', function () {
        //         if ($(this).parents('.select').hasClass('multiple')) {
        //             if ($(this).hasClass('active')) {
        //                 if ($(this).parents('.select').find('.select-title__value span').length > 0) {
        //                     $(this).parents('.select').find('.select-title__value').append('<span data-value="' + $(this).data('value') + '">, ' + $(this).html() + '</span>');
        //                 } else {
        //                     $(this).parents('.select').find('.select-title__value').data('label', $(this).parents('.select').find('.select-title__value').html());
        //                     $(this).parents('.select').find('.select-title__value').html('<span data-value="' + $(this).data('value') + '">' + $(this).html() + '</span>');
        //                 }
        //                 $(this).parents('.select-block').find('select').find('option').eq($(this).index() + 1).prop('selected', true);
        //                 $(this).parents('.select').addClass('focus');
        //             } else {
        //                 $(this).parents('.select').find('.select-title__value').find('span[data-value="' + $(this).data('value') + '"]').remove();
        //                 if ($(this).parents('.select').find('.select-title__value span').length == 0) {
        //                     $(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
        //                     $(this).parents('.select').removeClass('focus');
        //                 }
        //                 $(this).parents('.select-block').find('select').find('option').eq($(this).index() + 1).prop('selected', false);
        //             }
        //             return false;
        //         }


        //         if ($(this).parents('.select').attr('data-type') == 'search') {
        //             $(this).parents('.select').find('.select-title__value').val($(this).html());
        //             $(this).parents('.select').find('.select-title__value').attr('data-value', $(this).html());
        //         } else {
        //             $(this).parents('.select').find('.select-title__value').attr('class', 'select-title__value value_' + $(this).data('value'));
        //             $(this).parents('.select').find('.select-title__value').html($(this).html());

        //         }

        //         $(this).parents('.select-block').find('select').find('option').removeAttr("selected");
        //         if ($.trim($(this).data('value')) != '') {
        //             $(this).parents('.select-block').find('select').val($(this).data('value'));
        //             $(this).parents('.select-block').find('select').find('option[value="' + $(this).data('value') + '"]').attr('selected', 'selected');
        //         } else {
        //             $(this).parents('.select-block').find('select').val($(this).html());
        //             $(this).parents('.select-block').find('select').find('option[value="' + $(this).html() + '"]').attr('selected', 'selected');
        //         }


        //         if ($(this).parents('.select-block').find('select').val() != '') {
        //             $(this).parents('.select-block').find('.select').addClass('focus');
        //         } else {
        //             $(this).parents('.select-block').find('.select').removeClass('focus');

        //             $(this).parents('.select-block').find('.select').removeClass('err');
        //             $(this).parents('.select-block').parent().removeClass('err');
        //             $(this).parents('.select-block').removeClass('err').find('.form__error').remove();
        //         }
        //         if (!$(this).parents('.select').data('tags') != "") {
        //             if ($(this).parents('.form-tags').find('.form-tags__item[data-value="' + $(this).data('value') + '"]').length == 0) {
        //                 $(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="' + $(this).data('value') + '" href="" class="form-tags__item">' + $(this).html() + '<span class="fa fa-times"></span></a>');
        //             }
        //         }
        //         $(this).parents('.select-block').find('select').change();

        //         if ($(this).parents('.select-block').find('select').data('update') == 'on') {
        //             select();
        //         }
        //     });
        //     $(document).on('click touchstart', function (e) {
        //         if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
        //             $('.select').removeClass('active');
        //             $('.select-options').slideUp(50, function () { });
        //             searchselectreset();
        //         };
        //     });
        //     $(document).on('keydown', function (e) {
        //         if (e.which == 27) {
        //             $('.select').removeClass('active');
        //             $('.select-options').slideUp(50, function () { });
        //             searchselectreset();
        //         }
        //     });
        // }
        //FIELDS
        $('input,textarea').focus(function () {
            if ($(this).val() == $(this).attr('data-value')) {
                $(this).addClass('focus');
                $(this).parent().addClass('focus');
                if ($(this).attr('data-type') == 'pass') {
                    $(this).attr('type', 'password');
                };
                $(this).val('');
            };
            removeError($(this));
        });
        $('input[data-value], textarea[data-value]').each(function () {
            if (this.value == '' || this.value == $(this).attr('data-value')) {
                if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
                    $(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
                } else {
                    this.value = $(this).attr('data-value');
                }
            }
            if (this.value != $(this).attr('data-value') && this.value != '') {
                $(this).addClass('focus');
                $(this).parent().addClass('focus');
                if ($(this).hasClass('l') && $(this).parent().find('.form__label').length == 0) {
                    $(this).parent().append('<div class="form__label">' + $(this).attr('data-value') + '</div>');
                }
            }

            $(this).click(function () {
                if (this.value == $(this).attr('data-value')) {
                    if ($(this).attr('data-type') == 'pass') {
                        $(this).attr('type', 'password');
                    };
                    this.value = '';
                };
            });
            $(this).blur(function () {
                if (this.value == '') {
                    if (!$(this).hasClass('l')) {
                        this.value = $(this).attr('data-value');
                    }
                    $(this).removeClass('focus');
                    $(this).parent().removeClass('focus');
                    if ($(this).attr('data-type') == 'pass') {
                        $(this).attr('type', 'text');
                    };
                };
                if ($(this).hasClass('vn')) {
                    formValidate($(this));
                }
            });
        });
        $('.form-input__viewpass').click(function (event) {
            if ($(this).hasClass('active')) {
                $(this).parent().find('input').attr('type', 'password');
            } else {
                $(this).parent().find('input').attr('type', 'text');
            }
            $(this).toggleClass('active');
        });

        //$('textarea').autogrow({vertical: true, horizontal: false});


        //MASKS//
        //'+7(999) 999 9999'
        //'+38(999) 999 9999'
        //'+375(99)999-99-99'
        //'a{3,1000}' только буквы минимум 3
        //'9{3,1000}' только цифры минимум 3
        $.each($('input.phone'), function (index, val) {
            $(this).attr('type', 'tel');
            $(this).focus(function () {
                $(this).inputmask('+7(999) 999 9999', {
                    clearIncomplete: true, clearMaskOnLostFocus: true,
                    "onincomplete": function () { maskclear($(this)); }
                });
                $(this).addClass('focus');
                $(this).parent().addClass('focus');
                $(this).parent().removeClass('err');
                $(this).removeClass('err');
            });
        });
        $('input.phone').focusout(function (event) {
            maskclear($(this));
        });
        $.each($('input.num'), function (index, val) {
            $(this).focus(function () {
                $(this).inputmask('9{1,1000}', { clearIncomplete: true, placeholder: "", clearMaskOnLostFocus: true, "onincomplete": function () { maskclear($(this)); } });
                $(this).addClass('focus');
                $(this).parent().addClass('focus');
                $(this).parent().removeClass('err');
                $(this).removeClass('err');
            });
        });
        $('input.num').focusout(function (event) {
            maskclear($(this));
        });
        /*
        $.each($('input.date'), function(index, val) {
            $(this).focus(function(){
                $(this).inputmask('dd.mm.yyyy',{
                    clearIncomplete: true,
                    placeholder:"_",
                    //yearrange:{'minyear':n-40,'maxyear':n},
                    clearMaskOnLostFocus: true,
                    "onincomplete": function(){maskclear($(this));},
                    "oncomplete": function(){
                        $(this).datepicker("setDate",$(this).val());
                    }
                });
                $(this).addClass('focus');
                $(this).parents('.form-column').addClass('focus');
                $(this).parent().addClass('focus');
                $(this).parent().removeClass('err');
                $(this).removeClass('err');
            });
            $(this).focusout(function(event) {
                maskclear($(this));
            });
            $(this).datepicker({
                dateFormat : "dd.mm.yy",
                //yearRange: "1915:2015",
                //defaultDate: '-18Y', 
                //inDate: '-85Y', 
                //maxDate: "0Y",
                beforeShow :function(event){
                    $('.ui-datepicker').show();
                },
                onSelect:function(event){
                    if($(this).val()!=$(this).attr('data-value') && $(this).val()!=''){
                        $(this).addClass('focus');
                        $(this).parent().addClass('focus');
                        if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
                            $(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
                        }
                    }
                }
            });
        });
        */

        //CHECK
        $.each($('.check'), function (index, val) {
            if ($(this).find('input').prop('checked') == true) {
                $(this).addClass('active');
            }
        });
        $('body').off('click', '.check', function (event) { });
        $('body').on('click', '.check', function (event) {
            if (!$(this).hasClass('disable')) {
                var target = $(event.target);
                if (!target.is("a")) {
                    $(this).toggleClass('active');
                    if ($(this).hasClass('active')) {
                        $(this).find('input').prop('checked', true);
                    } else {
                        $(this).find('input').prop('checked', false);
                    }
                }
            }
        });

        //OPTION
        $.each($('.option.active'), function (index, val) {
            $(this).find('input').prop('checked', true);
        });
        $('.option').click(function (event) {
            if (!$(this).hasClass('disable')) {
                var target = $(event.target);
                if (!target.is("a")) {
                    if ($(this).hasClass('active') && $(this).hasClass('order')) {
                        $(this).toggleClass('orderactive');
                    }
                    $(this).parents('.options').find('.option').removeClass('active');
                    $(this).toggleClass('active');
                    $(this).children('input').prop('checked', true);
                }
            }
        });
        //RATING
        $('.rating.edit .star').hover(function () {
            var block = $(this).parents('.rating');
            block.find('.rating__activeline').css({ width: '0%' });
            var ind = $(this).index() + 1;
            var linew = ind / block.find('.star').length * 100;
            setrating(block, linew);
        }, function () {
            var block = $(this).parents('.rating');
            block.find('.star').removeClass('active');
            var ind = block.find('input').val();
            var linew = ind / block.find('.star').length * 100;
            setrating(block, linew);
        });
        $('.rating.edit .star').click(function (event) {
            var block = $(this).parents('.rating');
            var re = $(this).index() + 1;
            block.find('input').val(re);
            var linew = re / block.find('.star').length * 100;
            setrating(block, linew);
        });
        $.each($('.rating'), function (index, val) {
            var ind = $(this).find('input').val();
            var linew = ind / $(this).parent().find('.star').length * 100;
            setrating($(this), linew);
        });
        function setrating(th, val) {
            th.find('.rating__activeline').css({ width: val + '%' });
        }
        //QUANTITY
        $('.quantity__btn').click(function (event) {
            var n = parseInt($(this).parent().find('.quantity__input').val());
            if ($(this).hasClass('dwn')) {
                n = n - 1;
                if (n < 1) { n = 1; }
            } else {
                n = n + 1;
            }
            $(this).parent().find('.quantity__input').val(n);
            return false;
        });
        //RANGE
        if ($("#range").length > 0) {
            $("#range").slider({
                range: true,
                min: 0,
                max: 5000,
                values: [0, 5000],
                slide: function (event, ui) {
                    $('#rangefrom').val(ui.values[0]);
                    $('#rangeto').val(ui.values[1]);
                    $(this).find('.ui-slider-handle').eq(0).html('<span>' + ui.values[0] + '</span>');
                    $(this).find('.ui-slider-handle').eq(1).html('<span>' + ui.values[1] + '</span>');
                },
                change: function (event, ui) {
                    if (ui.values[0] != $("#range").slider("option", "min") || ui.values[1] != $("#range").slider("option", "max")) {
                        $('#range').addClass('act');
                    } else {
                        $('#range').removeClass('act');
                    }
                }
            });
            $('#rangefrom').val($("#range").slider("values", 0));
            $('#rangeto').val($("#range").slider("values", 1));

            $("#range").find('.ui-slider-handle').eq(0).html('<span>' + $("#range").slider("option", "min") + '</span>');
            $("#range").find('.ui-slider-handle').eq(1).html('<span>' + $("#range").slider("option", "max") + '</span>');

            $("#rangefrom").bind("change", function () {
                if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
                    $(this).val($("#range").slider("option", "max"));
                }
                if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
                    $(this).val($("#range").slider("option", "min"));
                }
                $("#range").slider("values", 0, $(this).val());
            });
            $("#rangeto").bind("change", function () {
                if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
                    $(this).val($("#range").slider("option", "max"));
                }
                if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
                    $(this).val($("#range").slider("option", "min"));
                }
                $("#range").slider("values", 1, $(this).val());
            });
            $("#range").find('.ui-slider-handle').eq(0).addClass('left');
            $("#range").find('.ui-slider-handle').eq(1).addClass('right');
        }
        //ADDFILES
        $('.form-addfile__input').change(function (e) {
            if ($(this).val() != '') {
                var ts = $(this);
                ts.parents('.form-addfile').find('ul.form-addfile-list').html('');
                $.each(e.target.files, function (index, val) {
                    if (ts.parents('.form-addfile').find('ul.form-addfile-list>li:contains("' + e.target.files[index].name + '")').length == 0) {
                        ts.parents('.form-addfile').find('ul.form-addfile-list').append('<li>' + e.target.files[index].name + '</li>');
                    }
                });
            }
        });
    }
    forms();

    function digi(str) {
        var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        return r;
    }

    //VALIDATE FORMS
    $('form button[type=submit]').click(function () {
        var er = 0;
        var form = $(this).parents('form');
        var ms = form.data('ms');
        $.each(form.find('.req'), function (index, val) {
            er += formValidate($(this));
        });
        if (er == 0) {
            removeFormError(form);
            /*
                var messagehtml='';
            if(form.hasClass('editprofile')){
                var messagehtml='';
            }
            formLoad();
            */

            //ОПТРАВКА ФОРМЫ
            /*
            function showResponse(html){
                if(!form.hasClass('nomessage')){
                    showMessage(messagehtml);
                }
                if(!form.hasClass('noclear')){
                    clearForm(form);
                }
            }
            var options={
                success:showResponse
            };
                form.ajaxForm(options);
            

            setTimeout(function(){
                if(!form.hasClass('nomessage')){
                    //showMessage(messagehtml);
                    showMessageByClass(ms);
                }
                if(!form.hasClass('noclear')){
                    clearForm(form);
                }
            },0);

            return false;
            */
            if (ms != null && ms != '') {
                showMessageByClass(ms);
                return false;
            }
        } else {
            return false;
        }
    });
    function formValidate(input) {
        var er = 0;
        var form = input.parents('form');
        if (input.attr('name') == 'email' || input.hasClass('email')) {
            if (input.val() != input.attr('data-value')) {
                var em = input.val().replace(" ", "");
                input.val(em);
            }
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.val())) || input.val() == input.attr('data-value')) {
                er++;
                addError(input);
            } else {
                removeError(input);
            }
        } else {
            if (input.val() == '' || input.val() == input.attr('data-value')) {
                er++;
                addError(input);
            } else {
                removeError(input);
            }
        }
        if (input.attr('type') == 'checkbox') {
            if (input.prop('checked') == true) {
                input.removeClass('err').parent().removeClass('err');
            } else {
                er++;
                input.addClass('err').parent().addClass('err');
            }
        }
        if (input.hasClass('name')) {
            if (!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))) {
                er++;
                addError(input);
            }
        }
        if (input.hasClass('pass-2')) {
            if (form.find('.pass-1').val() != form.find('.pass-2').val()) {
                addError(input);
            } else {
                removeError(input);
            }
        }
        return er;
    }
    function formLoad() {
        $('.popup').hide();
        $('.popup-message-body').hide();
        $('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
        $('.popup-message').addClass('active').fadeIn(300);
    }
    function showMessageByClass(ms) {
        $('.popup').hide();
        popupOpen('message.' + ms, '');
    }
    function showMessage(html) {
        $('.popup-loading').remove();
        $('.popup-message-body').show().html(html);
    }
    function clearForm(form) {
        $.each(form.find('.input'), function (index, val) {
            $(this).removeClass('focus').val($(this).data('value'));
            $(this).parent().removeClass('focus');
            if ($(this).hasClass('phone')) {
                maskclear($(this));
            }
        });
    }
    function addError(input) {
        input.addClass('err');
        input.parent().addClass('err');
        input.parent().find('.form__error').remove();
        if (input.hasClass('email')) {
            var error = '';
            if (input.val() == '' || input.val() == input.attr('data-value')) {
                error = input.data('error');
            } else {
                error = input.data('error');
            }
            if (error != null) {
                input.parent().append('<div class="form__error">' + error + '</div>');
            }
        } else {
            if (input.data('error') != null && input.parent().find('.form__error').length == 0) {
                input.parent().append('<div class="form__error">' + input.data('error') + '</div>');
            }
        }
        if (input.parents('.select-block').length > 0) {
            input.parents('.select-block').parent().addClass('err');
            input.parents('.select-block').find('.select').addClass('err');
        }
    }
    function addErrorByName(form, input__name, error_text) {
        var input = form.find('[name="' + input__name + '"]');
        input.attr('data-error', error_text);
        addError(input);
    }
    function addFormError(form, error_text) {
        form.find('.form__generalerror').show().html(error_text);
    }
    function removeFormError(form) {
        form.find('.form__generalerror').hide().html('');
    }
    function removeError(input) {
        input.removeClass('err');
        input.parent().removeClass('err');
        input.parent().find('.form__error').remove();

        if (input.parents('.select-block').length > 0) {
            input.parents('.select-block').parent().removeClass('err');
            input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
            //input.parents('.select-block').find('.select-options').hide();
        }
    }
    function removeFormErrors(form) {
        form.find('.err').removeClass('err');
        form.find('.form__error').remove();
    }
    function maskclear(n) {
        if (n.val() == "") {
            n.inputmask('remove');
            if (!n.hasClass('l')) {
                n.val(n.attr('data-value'));
            }
            n.removeClass('focus');
            n.parent().removeClass('focus');
        }
    }
    function searchselectreset() {
        $.each($('.select[data-type="search"]'), function (index, val) {
            var block = $(this).parent();
            var select = $(this).parent().find('select');
            if ($(this).find('.select-options__value:visible').length == 1) {
                $(this).addClass('focus');
                $(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
                $(this).find('.select-title__value').val($('.select-options__value:visible').html());
                $(this).find('.select-title__value').attr('data-value', $('.select-options__value:visible').html());
            } else if (select.val() == '') {
                $(this).removeClass('focus');
                block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
                block.find('input.select-title__value').attr('data-value', select.find('option[selected="selected"]').html());
            }
        });
    }
})