$( document ).ready(function() {
  //анимация поднимает logo вверх.
  setTimeout(function() {
      $('.offer__logo').animate({
          top: 10 + 'px'
      }, 1000);
  }, 4000);

  //Появление первого блока
  setTimeout(function() {
    $('.offer__text--one').fadeIn('slow', function(){
        $('.offer__text--one').css('display', 'block')
    });
}, 5000);

  // Скрываем первый блок
setTimeout(function() {
    $('.offer__text--one').animate({
        opacity: 0
    }, 1000)
}, 8000);

// Появление второго блока
setTimeout(function() {
    $('.offer__text--two').fadeIn('slow', function(){
        $('.offer__text--two').animate({
            opacity: 1
        }, 1000)
    });
}, 9500);

 //Появление background
 setTimeout(function() {
  $('.offer').fadeIn('slow', function(){
    $('.offer').css('background-image','url("../img/bg.jpg")')
  });
}, 13000);

//Появление указателя внизу экрана
setTimeout(function() {
  $('.offer__down').css('display', 'block')
}, 11000);

// Появление background первый вариант
/*setTimeout(function() {
  $('.offer__background').fadeIn('slow', function(){
      $('.offer__background').animate({
          opacity: 1
      }, 2000)
  });
}, 11000);*/

});

//эффект hover в мобильной версии
function isTouch() {
  try {
      document.createEvent("TouchEvent");
      return true;
  }
  catch (e) { return false; }
}
if ( isTouch() ) {
       // Тут код, который будет выполняться, если браузер пользователя мобильный
      $(".work__description").bind('touchstart',
          function(){
              $(this).css('background-color','rgba(30, 28, 28, 0.8)');
          }
      );
      $("work__description").bind('touchend',
          function(){
              $(this).css('background-color','rgba(30, 28, 28, 0)');
          }
      );
} /*else{
       // Тут код для остальных браузеров
      $("#touchElement").hover(
          function(){
              $(this).css('background','blue');
          },
          function(){
              $(this).css('background','red');
          }
      );
}*/
