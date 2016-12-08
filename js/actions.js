var $window = $(window);

function maxImage(x) {
  $(".display-box").css('display', 'initial');
  $(".display-box").append("<img src=\"images/photography/portfolio" + x + ".jpg\">");
}

$(document).ready(function() {
  $(".container").shapeshift();

  $('.display-box').click(function(){
    $(".display-box img:last-child").remove()
    $(".display-box").css('display', 'none');
  });
});

$(window).on('load', function(){
    $('html, body').scrollTop();
});

$(window).scroll(function (event) {
    var windowTop = $(this).scrollTop();        

    if (windowTop < $(".main").offset().top || windowTop > $(".photography").offset().top) {
        $(".skills-container").removeClass("fixed");
    } else {
        $(".skills-container").addClass("fixed");
    }

    if (windowTop > $(".main").offset().top && windowTop < $(".technical").offset().top) {
      $('.about-content').addClass('in-view');
      $('.about-content').removeClass('animation-element');
    } else {
      $('.about-content').removeClass('in-view');
      $('.about-content').addClass('animation-element');
    }
});