(function(){
  'use strict';
}());
  var $myBtn = $('h1');

  // Le añado un listener (o disparador), cuando se haga click
  $myBtn.click(function(){
    var classList = '';

    if($myBtn.hasClass('active')){
      // Si myBtn contiene la clase active la elimino
      $(this).removeClass('active');

      // Recuperamos el atributo clase y los partimos
      classList = $('#header').attr('class').split(' ');
      console.log('classList === ', classList);
    }else{
      // En caso contrario la añado
      $(this).addClass('active');

      // Recuperamos el atributo clase y los partimos
      classList = $('#header').attr('class').split(' ');
      console.log('classList === ', classList);
    }
  });
