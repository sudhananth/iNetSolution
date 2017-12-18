/*===================================
 Page  Loading Function
 ======================================*/
$(window).on('load', function () {
    'use strict';
    // Animate loader off screen
    $(".pageLoader").fadeOut("slow");
});

/*===================================
 paralax paraxify code goes here
 ======================================*/
myParaxify = paraxify('.paraxify');
/*===================================
 Go to Top Button function Here
 ======================================*/
function goTopFunction() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
}
/*===================================
     on Page Ready Functions
 ======================================*/
$(document).ready(function () {
    'use strict';
    /*=============================================
     Add Active class to menu on showing of section
     ==============================================*/
    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        //'use strict';
        //var cur_pos = $(this).scrollTop();

        //sections.each(function () {
        //    var top = $(this).offset().top - nav_height - 90,
        //        bottom = top + $(this).outerHeight();

        //    if (cur_pos >= top && cur_pos <= bottom) {
        //        nav.find('li').removeClass('active');
        //        sections.removeClass('active');

        //        $(this).addClass('active');
        //        nav.find('a[data-val="#' + $(this).attr('id') + '"]').parent().addClass('active');
        //    }
        //});
    });


    /*===================================
        Nice Scroller Function
     ======================================*/
    $("html").niceScroll();
    /*===================================
     Login and Register Forum Popup Flips
     ======================================*/

    $(".registerbtn").on('click', function (e) {
        e.preventDefault();
        $("#Register").css('display', 'block');
        $("#card").toggleClass('flipped');
        $("#Login").css('display', 'none');
    });

    $(".backtologin").on('click', function (e) {
        e.preventDefault();
        $("#Login").css('display', 'block');
        $("#card").toggleClass('flipped');
        $("#Register").css('display', 'none');
    });

    /*===================================
         Testimonial Owl Carousel
     ======================================*/

    $(".testimonialCarousel").owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplaySpeed: 2000,
        autoplayHoverPause: false
    });

    /*===================================
        Partners Owl Carousel
     ======================================*/

    $(".PartnersCarousel").owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 2000,
        autoplayHoverPause: false
    });
    /*===================================
     Index Page Carousel
     ======================================*/
    $(".MainBanner").owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 20000,
        autoplayHoverPause: false
    });

    /*===================================
        On Menu item click go to section function
     ======================================*/

    $("#navigation li a").on('click', function (e) {
        //var obj = $(this);
        //var href = obj.attr('href');
        //var firstChar = href.charAt(0);
        //if (firstChar == '#') {
        //    e.preventDefault();
        //    $('html, body').animate({
        //        scrollTop: $(href).offset().top - 60
        //    }, 600);
        //}
    });

    /*===================================
     Go to Home Function
     ======================================*/
    $(".navbar-brand").on('click', function (e) {
        //e.preventDefault();
        //var obj = $(this);
        //var href = obj.attr('href');
        //$('html, body').animate({
        //    scrollTop: $(href).offset().top - 60
        //}, 800);
    });

    /*===================================
         FAQ Section Accordin Functions
     ======================================*/

    $(".panel-title").on('click', function () {
        var obj = $(this);
        var mainParent = obj.parent().parent();
        var arrow = obj.find(".collpapseArrow");
        if (mainParent.hasClass('active')) {
            mainParent.removeClass('active');
        } else {
            $(".panel").each(function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            });
            mainParent.addClass('active');
        }
    });



    /*===================================
     Contact Us Form Validation
     ======================================*/

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});