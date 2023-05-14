$(function () {

// ============================рейтинг звезд rateYo=======================================

  $("#rateYo").rateYo({
    normalFill: "#D7D1C7",
    starWidth: "35px",
    ratedFill: "#FFB648",
    rating: "90%",
    readOnly: true,
    spacing: "1px"
  });
  $("#rateYo1").rateYo({
    normalFill: "#D7D1C7",
    starWidth: "35px",
    ratedFill: "#FFB648",
    rating: "90%",
    readOnly: true,
    spacing: "1px"
  });

  
  var mixer = mixitup('.blog__items');
  
  $('.blog__nav-btn--passiv').on('click', function () {
    $('.blog__nav-btn--passiv').removeClass('blog__nav-btn--activ'),
    $(this).addClass('blog__nav-btn--activ')
  })
  
  // ============================слайдер=======================================

  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    waitForAnimate: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
  $('.reviews__slider-prev').on('click', function(e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__slider-next').on('click', function(e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })
  

// ============================аккордеон=======================================

  $('.qestions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('qestions__acc-link--active')) {
      $(this).removeClass('qestions__acc-link--active')
      $(this).children('.qestions__acc-text').slideUp(700)
    } else {
      $('.qestions__acc-link').removeClass('qestions__acc-link--active')
      $('.qestions__acc-text').slideUp(700)
      $(this).addClass('qestions__acc-link--active')
      $(this).children('.qestions__acc-text').slideDown(700)
    }
  })

// ===================плавное прокручивание к якорным ссылкам==============================

  $(".header__nav-link, .header__logo").on("click", function(e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })

// ===================================бургер меню==========================================

setInterval(() => {
  if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
}, 0);
$('.burger, .overlay').on('click', function(e) {
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.burger').toggleClass('open')
  $('.overlay').toggleClass('overlay--show')
})




















































})
