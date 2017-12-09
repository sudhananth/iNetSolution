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
        var obj = $(this);
        var href = obj.attr('href');
        var firstChar = href.charAt(0);
        if (firstChar == '#') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(href).offset().top - 60
            }, 600);
        }
    });

    /*===================================
     Go to Home Function
     ======================================*/
    $(".navbar-brand").on('click', function (e) {
        e.preventDefault();
        var obj = $(this);
        var href = obj.attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top - 60
        }, 800);
    });

    /*===================================
     Course Form Validations
     ======================================*/

    $("#Course-form").on('submit', function (e) {
        e.preventDefault();
        var name = $("#studentname");
        var email = $("#studentemail");
        var course = $("#studentcourse");
        var language = $("#studentlanguage");

        var error = 0;//means no error

        if (name.val() == '') {
            name.parent().find(".error").html('Please enter your name');
            error = 1;
        } else {
            name.parent().find(".error").html('&nbsp;');
        }

        if (email.val() == '') {
            email.parent().find(".error").html('Please enter your email');
            error = 1;
        } else {
            email.parent().find(".error").html('&nbsp;');
        }


        if (course.val() == '') {
            course.parent().find(".error").html('Please enter your course');
            error = 1;
        } else {
            course.parent().find(".error").html('&nbsp;');
        }

        if (language.val() == '') {
            language.parent().find(".error").html('Please enter your language');
            error = 1;
        } else {
            language.parent().find(".error").html('&nbsp;');
        }


        if (error == 0) {
            $.post('http://localhost/educ/process.php',
                {
                    name: name.val(),
                    email: email.val(),
                    course: course.val(),
                    language: language.val()
                }, function (r) {
                    if (r == "success") {
                        var sendBtn = $("#Course-form").find("button");
                        sendBtn.attr('disabled', 'disabled');
                        sendBtn.find("div").html('Course Enroll Successfully');
                    }
                });
        }

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

    $("#contact-form").on('submit', function (e) {
        e.preventDefault();
        var name = $("#name");
        var email = $("#email");
        var mobile = $("#mobile");
        var subject = $("#subject");
        var message = $("#message");

        var error = 0;//means no error

        if (name.val() == '') {
            name.parent().find(".error").html('Please enter your name');
            error = 1;
        } else {
            name.parent().find(".error").html('&nbsp;');
        }

        if (email.val() == '') {
            email.parent().find(".error").html('Please enter your email');
            error = 1;
        } else if (!validateEmail(email)) {
            email.parent().find(".error").html('Please enter valid email');
            error = 1;
        } else {
            email.parent().find(".error").html('&nbsp;');
        }

        if (mobile.val() == '') {
            mobile.parent().find(".error").html('Please enter your mobile');
            error = 1;
        } else {
            if (mobile.val() == isNaN()) {
                mobile.parent().find(".error").html('Please enter valid mobile');
                error = 1;
            } else if (mobile.val().length != 10) {
                mobile.parent().find(".error").html('Please enter valid mobile');
                error = 1;
            } else {
                mobile.parent().find(".error").html('&nbsp;');
            }
        }

        if (subject.val() == '') {
            subject.parent().find(".error").html('Please enter your subject');
            error = 1;
        } else {
            subject.parent().find(".error").html('&nbsp;');
        }

        if (message.val() == '') {
            message.parent().find(".error").html('Please enter your message');
            error = 1;
        } else {
            message.parent().find(".error").html('&nbsp;');
        }


        if (error == 0) {
            $.post('process.php',
                {
                    name: name.val(),
                    email: email.val(),
                    mobile: mobile.val(),
                    subject: subject.val(),
                    message: message.val()
                }, function (r) {
                    if (r == "success") {
                        var sendBtn = $("#contact-form").find("button");
                        sendBtn.attr('disabled', 'disabled');
                        sendBtn.find("div").html('Message Send Successfully');
                    }
                });
        }

    });



});
