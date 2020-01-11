$(document).ready(function () {
  $('.header-contacts__button').on('click', function() {
      $('.overlay').show()
    });

    $('.popup-close').on('click', function() {
      $('.overlay').hide()
  });
  $('.feedbacks-block').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    dots: false,
    speed: 1000,
    infinite: true,
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: false,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
  });
  $('.main-img').slick({
    asNavFor: '.slick-blocks',
  })
  $('.slick-blocks').slick({
    arrows: false,
    asNavFor: '.main-img',
  })
})