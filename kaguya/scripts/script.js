'use strict';

$('a:not([href^="#"]):not([target])').on('click',(e) => {
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
