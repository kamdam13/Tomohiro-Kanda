'use strict';

$('a:not([href^="#"]):not([target])').click((e) => {
  e.preventDefault();
  $('body')
    .on('transitionend', () => {
      window.location = e.target.href;
    })
    .css('opacity', 0.1);
});
