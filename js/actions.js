$(document).ready(function() {
  $(".container").shapeshift();
});

$(window).on('load', function(){
    $('html, body').scrollTop();
});

$(window).scroll(function (event) {
    var windowTop = $(this).scrollTop();        
    // if (windowTop <= $(".photography").offset().top) {
    //     $(".skills-container").addClass("fixed");
    // } else {
    //     $(".skills-container").removeClass("fixed");
    // }

    if (windowTop < $(".main").offset().top + 50 || windowTop > $(".photography").offset().top) {
        $(".skills-container").removeClass("fixed");
    } else {
        $(".skills-container").addClass("fixed");
    }
});