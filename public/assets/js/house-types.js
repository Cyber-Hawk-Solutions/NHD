$(document).ready(function(){

    $('[href="#house1"]').click(function(){
      $($('#house2')[0]).collapse('hide');
      $($('#house3')[0]).collapse('hide');
    });
    $('[href="#house2"]').click(function(){
      $($('#house1')[0]).collapse('hide');
      $($('#house3')[0]).collapse('hide');
    });
    $('[href="#house3"]').click(function(){
      $($('#house1')[0]).collapse('hide');
      $($('#house2')[0]).collapse('hide');
    });
});