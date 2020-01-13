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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  });
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    dots: false,
    speed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: false,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  });
  $('.main-img').slick({
    asNavFor: '.slick-blocks',
  })
  $('.slick-blocks').slick({
    arrows: false,
    asNavFor: '.main-img',
  })
})