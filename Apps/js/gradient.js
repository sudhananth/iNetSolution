/*===================================
 On  Scroll Fix Header
 ======================================*/

$(document).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll>2)
    {
        $(".navbar").addClass('navbar-fixed-top');
        $("#TopBtn").fadeIn();
    }else
    {
        $(".navbar").removeClass('navbar-fixed-top');
        $("#TopBtn").fadeOut();
    }
});
