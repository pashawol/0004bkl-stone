$(document).ready(function(){
// меню
    var timerId;
    $(".second-item").mouseenter(function(){
        var item = this;
        timerId = setTimeout(function(){
            $(item).find(".three-stage").show(300);
        }, 300);
      
        
    });
    $(".second-item").mouseleave(function(){
        clearTimeout(timerId);
        $(this).find(".three-stage").hide(300);
    });

    _drop = $(".dropdownMobile");
    _h_Header = $(".header-top").outerHeight() + $(".header-center").outerHeight();
    _h_HeaderFull = $(".header").outerHeight();
    _back = $(".menu-back").outerHeight(true);
    h_List();
    if($(window).width() < 1025){
        $(".header-catalog").addClass("BtnMenu");
    }else{
        $(".header-catalog").removeClass("BtnMenu");
    }
    $(document).on('click','.BtnMenu', function(){
        $(this).toggleClass("close");
        $("body").toggleClass("fixed");
        if ($(this).is(".header-catalog") == false){
            if ($(this).is(".close") == true) {
                $(this).find("i").addClass("icon-3-2_cross");
            } else {
                $(this).find("i").removeClass("icon-3-2_cross");
            }
            $(".sectionMenu .Mobmenu-List_wrap").toggleClass("show");
            $(".sectionMenu .Mobmenu-List_wrap").find(_drop).removeClass("show");
            $(".sectionMenu .Mobmenu-List .btnDown").click(function () {
                $(this).next().addClass("show");
                _itemVal = $(this).find('a').text();
                $(this).next().find(".section-name").text(_itemVal);
            });
        }else{

            if ($(this).is(".close") == true) {
                $(this).find("i").addClass("icon-3-1_cross");
            } else {
                $(this).find("i").removeClass("icon-3-1_cross");
            }
            $(".catalogMenu .Mobmenu-List_wrap").toggleClass("show");
            $(".catalogMenu .Mobmenu-List_wrap").find(_drop).removeClass("show");
            $(".catalogMenu .Mobmenu-List .btnDown").click(function () {
                $(this).next().addClass("show");
                _itemVal = $(this).find('a').text();
                $(this).next().find(".section-name").text(_itemVal);
            });
        }
        $(document).on('click', '.menu-back button', function(){
            $(this).closest(".dropdownMobile").removeClass("show");
        });
    });
  
    function h_List() {
        if($(window).width() > 767){
            _h_Header = $(".header-top").outerHeight() + $(".header-center").outerHeight();
        }else{
            _h_Header = $(".header-center").outerHeight();
        }
        _h_List = $(window).height() - _h_Header;
        _h_HeaderFull = $(".header").outerHeight();
        $(".list-wrap").css("height", _h_List);
        $(".dropdownMobile .list-wrap").css("height", _h_List - _back);
        $(".Mobmenu-List_wrap").css("top", _h_Header);
        $(".catalogMenu .list-wrap").css("height", $(window).height() - _h_HeaderFull);
        $(".catalogMenu .Mobmenu-List_wrap").css("top", _h_HeaderFull);
        $(".catalogMenu .dropdownMobile .list-wrap").css("height", $(window).height() - _h_HeaderFull - _back);
    }
    $(window).resize(function () {
        if ($(window).width() < 1025) {
            $(".header-catalog").addClass("BtnMenu");
        } else {
            $(".header-catalog").removeClass("BtnMenu");
        }
        h_List()
    });

    
// боьшой слайдер на главной странице
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        allowTouchMove: false,
        effect: 'fade',

        // preventInteractionOnTransition: true,
        controller: {
            inverse: true,
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 2,
        // allowTouchMove: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        normalizeSlideIndex: true,
        loop: true,
        grabCursor: true,
        speed: 1500,
        // autoplay: {
        //     delay: 3750,
        // },
        thumbs: {
            swiper: galleryTop
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        coverflowEffect: {
            depth: 300
        },
        breakpoints: {
            1921: {
                spaceBetween: 24,
                slidesPerView: 4
            },
            1025: {
                spaceBetween: 24,
                slidesPerView: 3
            },
            768: {
                spaceBetween: 24,
                slidesPerView: 2
            },
            575: {
                slidesPerView: 3,
                spaceBetween: 16,
            }
        }
    });

/* event click slide im main slider */
    $(".gallery-thumbs .swiper-slide").click(function(){
        galleryThumbs.slideTo($(this).index(), 400, true);
        galleryThumbs.autoplay.start();
        offset = 1500;
        var len = $(".gallery-thumbs").find(".swiper-slide").length,
            index = $(this).index();
        data_index = $(this).attr("data-swiper-slide-index");
        if(len - index <= 2){
            $(".gallery-thumbs .swiper-slide").not(".swiper-slide-duplicate").each(function () {
                if ($(this).attr("data-swiper-slide-index") == data_index) {
                    galleryThumbs.slideTo($(this).index(), 400, true);
                }
            });
        }
    });
    $(".articles swiper-container .swiper-slide, .our-works__slider .swiper-slide").click(function () {
        offset = 1500;
    });


// табы
    $(".tab-btn").each(function(){
        if ($(this).index() == 0){
            $(this).addClass("active");
        }
    });
    $(".tab-body").each(function(){
        if ($(this).index() == 0){
            $(this).fadeIn();
        }
    });
//    / $(".tab-btn").eq(0).addClass("active");
    // $(".tab-body").eq(0).fadeIn();
    $(document).on('click', '.tab-btn', function(){
        var _dataTabs = $(this).closest(".tab-btns").attr("data-tabs");
        var _dataTabs_body = _dataTabs;
        var _this = $(this).attr("data-tab");
        $(".tab-btn").each(function(){
            if ($(this).closest(".tab-btns").attr("data-tabs") == _dataTabs){
                if ($(this).attr("data-tab") != _this){
                    $(this).removeClass("active");
                }else{
                    $(this).addClass("active");
                }
            }
        });
        $(".tab-body").each(function(){
            if ($(this).closest(".tab-bodies").attr("data-tabs-body") == _dataTabs_body) {
                if ($(this).attr("data-body") != _this){
                    $(this).fadeOut(100);
                }else{
                    $(this).fadeIn(100);

                }
            }
        });
        
    });
    function tab_scroll(){
        $(".tab-btns").each(function(){
            tabs_len = $(this).find(".tab-btn").length;
            var win_width = $(window).width();
            if (win_width < 1025) {
                n = 186;
            } else {
                if (win_width < 768) {
                    n = 143
                } else {
                    n = 230;
                }
            }
            tabs_full_len = n * tabs_len;
            
            if (tabs_len > 6 || $(window).width() < tabs_full_len){
                $(this).closest(".tab-btns__wrap").css("overflow-x", "scroll");
            }else{
                $(this).closest(".tab-btns__wrap").css("overflow-x", "hidden");
            }
            
        });
    }
    tab_scroll()
    $(window).resize(function(){
        tab_scroll();
        workGrid();
    });
    
// catalog-slider
    var swiper = new Swiper('.catalog-slider .swiper-container', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1025: {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
            },
            768: {
                spaceBetween: 24,
                slidesPerView: 1,
                slidesPerColumn: 3,
                slidesPerColumnFill: 'row',
            },
            320: {
                slidesPerView: 1,
                slidesPerColumnFill: 'row',
                slidesPerColumn: 3,
                spaceBetween: 16
            }
        }
    });
    // gallery slider
    var mainGallery = new Swiper('.main-gallery', {
        spaceBetween: 16,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        observer: true,
        speed: 1200,
        autoplay: {
            delay: 1000,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerColumn: 1,
                slidesPerColumnFill: 'row',
            },
            1025: {
                slidesPerView: 4,
                slidesPerColumn: 1,
                slidesPerColumnFill: 'row',
            },
            1200: {
                slidesPerView: 5,
                slidesPerColumn: 1,
                slidesPerColumnFill: 'row',
            }
        }
    }); 

    /* fancybox loop */
    $('[data-fancybox="gallery"]').fancybox({
        loop: true
    });
// masonry
    $('.grid').masonry({
        percentPosition: true,
        itemSelector: '.grid-item'
    });
    function workGrid(){
        if ($(window).width() < 1025 && $(".List-step").is("#start_m")){
            $('.grid1').masonry({
                percentPosition: true,
                itemSelector: '.grid1-item'
            });
            
            var len = $(".step-top").length;
            $(".step-top").offset();
            var firstStep = $(".step-top").eq(0).offset().top;
            var lastStep = $(".step-top").eq(len - 1).offset().top;
            $(".step-line").css("height", lastStep - firstStep);
        }
    }
    workGrid();
//
    var _ser_Btn = $(".services-tabs__left .tab-btn");
    _ser_Btn.each(function(){
        if ($(this).index() < 9){
            $(this).find('.tab-number').append("0" + ($(this).index() + 1));
        }else{
            $(this).find('.tab-number').append($(this).index() + 1);
        }

    });

// news-slider
    var mySwiper = new Swiper('.news-slider', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'row',
        allowTouchMove: true,
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 1500,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            576:{
                slidesPerView: 1,
                slidesPerColumn: 3,
                slidesPerColumnFill: 'row',
                allowTouchMove: false,
            },
            991: {
                slidesPerView: 3,
                slidesPerColumn: 1,
                spaceBetween: 24,
                slidesPerColumnFill: 'row',
                allowTouchMove: false,
            },
        }
    });

// checkbox
    $(document).on('click', '.input-brim input', function(){
        $(this).closest('.input-brim').toggleClass('active');
    });
    $(".more-InfoBtn").click(function(){
        $(this).parent().prev().addClass("full");
        $(this).parent().css("display", "none");
    });
// reviews-slider in mainPage
    var mySwiper = new Swiper('.reviews .swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 40
    });
    var articles = new Swiper('.articles .swiper-container', {
        spaceBetween: 24,
        slidesPerView: 1,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 3700,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2
            }
        }
    });

    /* для кнопки загрузить еще */
    var n=8;
    if ($(".further-list").is(".catalog-list")){
        n=9;
    } else if ($(".further-list").is(".reviews-list")){
        n=4;
    } else if ($(".further-list").is(".articleList") && $(".further-list").is(".otherArticles") == false){
        n=2
    } else if (($(".further-list").is(".otherArticles"))){
        n=4;
    }

    for(var i=0;i<=n;i++){
        $(".further").eq(i).fadeIn();
    }
    $(document).on("click", ".BtnMore button", function(){
        $(this).closest(".BtnMore").css("display", "none");
        var start_ind = $(this).closest(".BtnMore").index() + 1;
        for (var i = 0; i <= n; i++) {
            $(".further").eq(start_ind + i).fadeIn();
        }
        $(".further").eq(start_ind + 8).fadeIn();
    });

    /* product card sync slider */
    var syncThumbs = new Swiper('.sync-thumbs', {
        spaceBetween: 24,
        slidesPerView: 3,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1200: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 24
            },
            768: {
                spaceBetween: 12,
                slidesPerView: 6
            },
            576: {
                slidesPerView: 4
            }
        }
    });
    var syncTop = new Swiper('.sync-top', {
        spaceBetween: 0,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: syncThumbs,
        },
        breakpoints: {
            576: {
                spaceBetween: 0
            },
            0: {
                spaceBetween: 16
            }
        }
    });
    /* select type */

    $(document).on('click', '.types-list__Btn', function(){
        $(".types-list__Btn").removeClass("active");
        if($(this).find("input:checked")){
            $(this).addClass("active");
        }else{
            $(this).removeClass("active");
        }
    });

    /* similar goods slider */

    var mySwiper = new Swiper('.similarGoods__list', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'row',
        allowTouchMove: true,
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 1500,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                slidesPerColumn: 3,
                slidesPerColumnFill: 'row',
                allowTouchMove: false,
            },
            991: {
                slidesPerView: 4,
                slidesPerColumn: 1,
                spaceBetween: 24,
                slidesPerColumnFill: 'row',
                allowTouchMove: false,
            },
        }
    });

// mini-catalog-slider
    var swiper = new Swiper('.mini-catalog-slider .swiper-container', {
        slidesPerView: 1,
        speed: 300,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1025: {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
            },
            768: {
                spaceBetween: 24,
                slidesPerView: 1,
                slidesPerColumn: 3,
                slidesPerColumnFill: 'row',
            },
            576: {
                spaceBetween: 24,
                slidesPerView: 1,
                slidesPerColumn: 3,
                slidesPerColumnFill: 'row',
            },
            320: {
                slidesPerView: 1,
                slidesPerColumnFill: 'row',
                slidesPerColumn: 1,
                spaceBetween: 16
            }
        }
    });
    /* accordion type-1*/
    $(".accordion").each(function () {
        if ($(this).index() == 0 && $(this).is(".parent") == false) {
            $(this).children($(".accordion__body")).slideDown();
            $(this).children($(".accordion__btn")).addClass("active");
        }else{
            if ($(this).parent().index() == 0 && $(this).is(".parent") == true){
                $(this).children($(".accordion__body")).slideDown();
                $(this).children($(".accordion__btn")).addClass("active");
            }
        }
    });
    $(document).on('click', '.accordion__btn button', function(){
        $(this).parent().toggleClass('active');
        var _this_p = $(this);
        var acc_attr = _this_p.closest(".accordion").attr("data-order");
        
        $(".accordion").each(function(){
            if ($(this).attr("data-order") == acc_attr){
                $(this).find(".accordion__btn").not(_this_p.parent()).removeClass("active");
                $(this).find(".accordion__body").not(_this_p.parent().next()).slideUp();

            }
        });
        $(this).parent().next().slideToggle();
    });

    /* accordion_type-2 */
    $(".accordion_type-2").each(function () {
        $(this).children($(".accordion__body")).slideDown();
        $(this).children($(".accordion__btn")).addClass("active");
        });
    // $(document).on('click', '.accordion_type-2 .accordion__btn button', function () {
    //         $(this).parent().addClass('active');
    //         $(this).parent().next().slideToggle();
    //     });
    /* scroll style*/
    // function removemCustomScrollbar() {
    //     if($(window).width() < 768){
    //         $(".cardTabs .tab-bodies.content").mCustomScrollbar("destroy");
    //     }
    // }
    // removemCustomScrollbar();
    // $(window).resize(function(){
    //     removemCustomScrollbar();
    // });
    $(window).on("load", function () {
        $(".content").mCustomScrollbar({
            scrollbarPosition: "outside",
            theme: "light",
            autoDraggerLength: false,
            snapAmount: 70,
            scrollButtons: { 
                enable: true 
            },
            keyboard: { 
                enable: true 
            },
            scrollType: "stepped",
            scrollInertia: 1000
        });
        /* animate svg arrow in main slider  */
        
        offsetMe();
        galleryThumbs.autoplay.start();
    });
    var circle = $(".circle1"),
        offset = 1500,
        j = 0;

    var offsetMe = function () {
        if (offset < 0) offset = 1500;
        circle.css("stroke-dashoffset", offset);
         j++;
        if (j > 240) {
             offset = offset - 6.3;
         } else {
        offset = offset - 8;
        }
        requestAnimationFrame(offsetMe);
    }
    /* our work slider */
    var ourWorksSlider = new Swiper('.our-works__slider', {
        spaceBetween: 24,
        slidesPerView: 2,
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 3750,
        },
        breakpoints: {
            1025: {
                slidesPerView: 5
            },
            991: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
        }
    });
    // ourWorksSlider.on('sliderMove', function(){
    //     $(".swiper-button-next.styleCircle svg path").removeClass("circle");
    //     ourWorksSlider.start();
    //     setTimeout(function () {
    //         $(".swiper-button-next.styleCircle svg path").addClass("circle");
    //     }, 10);
    // });


    /* при клике на стролочки убираем класс circle из них и потом добавляем, что бы начал занового заливку  */
    $(".swiper-button-next.styleCircle, .swiper-button-prev.styleCircle").click(function () {

        galleryThumbs.autoplay.start();
        if (ourWorksSlider.initialized) {
            ourWorksSlider.autoplay.start();
        }
        offset = 1500;

    });
    /* teg-list */
    $(".showMore").nextAll(".addItem").css("display", "none");
    var teg_len = $(".teg-list .addItem").length;

    $(document).on('click', '.showMore', function(){
        $(this).css("display", "none");
        $(this).nextAll(".addItem").css("display", "inline-block");
    });
    $(document).on('click', '.hide', function(){
        $(this).css("display", "none");
        $(".showMore").css("display", "inline-block");
        $(this).prevAll(".addItem").not(".showMore").css("display", "none");
    });

    
    /* modal sync slider */
    var popup_syncThumbs = new Swiper('.popup-sync-thumbs', {
        init: false,
        spaceBetween: 5,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1300: {
                slidesPerView: 9
            },
            768: {
                slidesPerView: 8
            },
            576: {
                spaceBetween: 10,
                slidesPerView: 6
            }
        }
    });
    var popup_syncThumbs1 = new Swiper('.popup-sync-thumbs1', {
        init: false,
        spaceBetween: 5,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1300: {
                slidesPerView: 9
            },
            768: {
                slidesPerView: 8
            },
            576: {
                spaceBetween: 10,
                slidesPerView: 6
            }
        }
    });
    var popup_syncTop = new Swiper('.popup-sync-top', {
        init: false,
        spaceBetween: 24,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: popup_syncThumbs,
        },
        breakpoints: {
            576: {
                spaceBetween: 24
            },
            0: {
                spaceBetween: 16
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    var popup_syncTop1 = new Swiper('.popup-sync-top1', {
        init: false,
        spaceBetween: 24,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: popup_syncThumbs1,
        },
        breakpoints: {
            576: {
                spaceBetween: 24
            },
            0: {
                spaceBetween: 16
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    
    /* modal open */
    $('.modalOpen').on('click', function () {
            var open_modal =  $(this).attr("data-modal");
            var _this_m;
            $(".modal").each(function (){
                if ($(this).attr("data-modal") == open_modal){
                    _this_m = $(this);
                     _this_m.fadeIn();
                    _this_m.addClass("control");
                     if (_this_m.find($(".popup-sync-thumbs")).length != 0 && _this_m.find($(".popup-sync-top")).length != 0){
                         popup_syncThumbs.init();
                         popup_syncTop.init();
                     }
                     if (_this_m.find($(".popup-sync-thumbs1")).length != 0 && _this_m.find($(".popup-sync-top1")).length != 0){
                         popup_syncThumbs1.init();
                         popup_syncTop1.init();
                     }
                    //  // управления с клавиатуры
                    //  $(document).keyup(function (e) {
                    //      switch (e.keyCode) {
                    //          case 27:
                    //              $('.closeBtn').trigger("click");
                    //              break;
                    //          case 37:
                    //              _this_m.find($('.sync-slider .swiper-button-prev')).trigger("click");
                    //              break;
                    //          case 39:
                    //              _this_m.find($('.sync-slider .swiper-button-next')).trigger("click");
                    //              break;
                    //      }
                    //  });
                     modal_top(_this_m);
                     $(window).resize(function () {
                         modal_top(_this_m);
                     });
                 }
             });
    });
    function modal_top(_this) {
        var win_h = $(window).height();
        var modal_inner = _this.find(".modal__inner");
        var modal_h = modal_inner.outerHeight(true);
        var top = (win_h - modal_h) / 2 + 30;
        if (top < 60){
            top=30;
            _this.css("overflow-y", "scroll");
        }else{
            _this.css("overflow", "hidden");

        }
        modal_inner.css("margin-top", top);
    }
    function createModal() {
        if($("div").is(".filter_catalog")){
            $("div.filter_catalog").addClass("modal");
        }
    }
    if ($(window).width() <= 1024) {
        createModal();
    }else{
        $("div.filter_catalog").removeClass("modal");
    }
    $(window).resize(function(){
        if($(window).width() <= 1024){
            createModal();
        } else {
            $("div.filter_catalog").removeClass("modal").css("display", "block").find(".modal__inner").css("margin-top", "0");
        }
    });
    /* modal close  */
    $(document).on('click', '.closeBtn', function(){
       var close_modal = $(this).attr("data-close");
       var _this_m;
        $(".modal").each(function () {
            if ($(this).attr("data-modal") == close_modal) {
                _this_m = $(this)
                _this_m.fadeOut();
                _this_m.removeClass("control");
                setTimeout(function(){
                    _this_m.find(".modal__inner").css("margin-top", "0");
                }, 500);
            }
        });
    });
    // $(document).on('click', '.modal', function(){
    //     _this_m = $(this)
    //     _this_m.fadeOut();
    //     setTimeout(function () {
    //         _this_m.find(".modal__inner").css("margin-top", "0");
    //     }, 500);
    // });
    // $(".modal__body").click(function(e){
    //         e.stopPropagation();
    // });

    $('.closeThis-modal').on('click', function () {
        $(this).closest(".modal__inner").find(".closeBtn").trigger("click");
    });
    // управления с клавиатуры
    $(document).keyup(function (e) {
        switch(e.keyCode){
            case 27:
                $('.closeBtn').trigger("click");
                break;
            case 37: 
                $('.modal.control .sync-slider .swiper-button-prev').trigger("click");
                break;
            case 39: 
                $('.modal.control .sync-slider .swiper-button-next').trigger("click");
                break;
        }
    });

    /* reting yellow line */
    $(".rating-band-inner").each(function(){
       var _width = $(this).attr("data-width");
    $(this).animate({
        width: _width
    }, 1500);
    });
    /* rateYo */
    $(".rateYo").rateYo({
        numStars: 5,
        normalFill: "#e6e2d8",
        ratedFill: "#e1ac2a",
        spacing: "4px",
        starWidth: "16px",
        readOnly: true,
        "rating": 4,
        "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="16px" height="15px" ><path fill-rule="evenodd" d="M8.000,-0.000 L10.636,4.714 L15.999,5.729 L12.266,9.658 L12.943,14.999 L8.000,12.713 L3.056,14.999 L3.734,9.658 L0.001,5.729 L5.363,4.714 L8.000,-0.000 " /></svg>'

    });
    $(".rateYo-empty").rateYo({
        numStars: 5,
        normalFill: "#ffffff",
        ratedFill: "#e1ac2a",
        spacing: "4px",
        starWidth: "16px",
        "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width="16px" height="15px" ><path fill-rule="evenodd" stroke-width="1px" stroke="rgb(185, 175, 156)" d="M8.000,-0.000 L10.636,4.714 L15.999,5.729 L12.266,9.658 L12.943,14.999 L8.000,12.713 L3.056,14.999 L3.734,9.658 L0.001,5.729 L5.363,4.714 L8.000,-0.000 " /></svg>'
    });

    /* attach file */

    $(".attach-file__input").change(function(e){
        var fileName = '';
        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined){
            var len = e.target.files.length;
            for (var i = 0; i < len;i++){
                if( i == len-1){
                    fileName = fileName + e.target.files[i].name ;
                } else if (i == 2 && i != len - 1) {
                    fileName = fileName + e.target.files[i].name + '...';
                    break;
                }else{
                    fileName = fileName + e.target.files[i].name + ', ';
                }
            }
            $(".attachedFile").html(fileName); 
        }else{
            $(".attachedFile").html("Файл не выбран"); 
        }
    });

    /* mask */
    $(".tel-valid").mask("+7(999)999-99-99");
    
    /* select */
    $(document).on('click', '.select', function(){
        $(this).toggleClass("open");
        $(this).next().fadeToggle(200);
    });
    $(document).on('click', '.select__list li', function(){
        var select = $(this).parent().prev();
        $(this).parent().find("li").not($(this)).removeClass("selected");
        $(this).addClass("selected");
        select.removeClass("open");
        select.find("span").empty().prepend($(this).text());
        select.find("input").val($(this).attr("data-value"));
        $(this).parent().fadeOut(200);
    });

    /* слайдер подбор материала*/
    var materialSlider = new Swiper('.materialSelection__slider', {
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 3570,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });
        /* map */
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [55.907736675021006, 37.43878085581966],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemarkWithContent = new ymaps.Placemark([55.907736675021006, 37.43878085581966], {
                hintContent: '',
                balloonContent: '',
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../assets/images/map-mark.png',
                // Размеры метки.
                iconImageSize: [80, 70],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-40, -35],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [0, 0],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemarkWithContent);
        myMap.balloon.open([55.907736675021006, 37.43878085581966], "<div class='mark-wrap'><div class='section-title'><h6>Офис</h6><hr></div> МО, Химки,<br>ул.Рабочая, 2Ак8</div>", {
            // Опция: не показываем кнопку закрытия.
            closeButton: false
        });
    });
});

//# sourceMappingURL=../maps/scripts/main.js.map
