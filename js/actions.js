$(document).ready(function() {
  $(".container").shapeshift();

  $('.display-box').click(function(){
    $(".display-box").css('display', 'none');
  });
});

$(window).on('load', function(){
    $('html, body').scrollTop();
});

$(window).scroll(function (event) {
    var windowTop = $(this).scrollTop();        

    if (windowTop < $(".main").offset().top + 50 || windowTop > $(".photography").offset().top) {
        $(".skills-container").removeClass("fixed");
    } else {
        $(".skills-container").addClass("fixed");
    }
});

function maxImage(x) {
  $(".display-box").css('display', 'initial');
  $(".display-box").append("<img src=\"images/photography/portfolio" + x + ".jpg\">");
}