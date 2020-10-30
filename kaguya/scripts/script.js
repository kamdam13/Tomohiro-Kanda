'use strict';

$('a:not([href^="#"]):not([target])').on('click', (e) => {
  e.preventDefault();
  $('body')
    .on('transitionend', () => {
      window.location = e.currentTarget.href;
    })
    .css('opacity', 0.1);
});

$('#header-nav-button').on('click', () => {
  $('.header-nav').slideToggle();
  $('.nav-button-line').toggleClass('active');
});

$('.main-news-list li').hover(function () {
  if ($(window).width() > 375) {
    $(this).find('.main-news-background').slideToggle();
    $(this).find('figcaption').toggleClass('active');
  }
});

$('.main-contact-form').submit((e) => {
  e.preventDefault();
  $('input[type="submit"]').val('TRANSMISSION COMPLETED').addClass('sent');
});
