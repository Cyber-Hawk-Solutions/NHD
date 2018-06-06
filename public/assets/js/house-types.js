$(document).ready(function(){

    $('[href="#house1"]').click(function(){
      $($('#house2')[0]).collapse('hide');
      $($('#house3')[0]).collapse('hide');
      $($('#house1')[0]).collapse('show');
      changeSelection(this);
    });
    $('[href="#house2"]').click(function(){
      $($('#house1')[0]).collapse('hide');
      $($('#house3')[0]).collapse('hide');
      $($('#house2')[0]).collapse('show');
      changeSelection(this);
    });
    $('[href="#house3"]').click(function(){
      $($('#house1')[0]).collapse('hide');
      $($('#house2')[0]).collapse('hide');
      $($('#house3')[0]).collapse('show');
      changeSelection(this);
    });

    function changeSelection(_this){
      $('[href="#house1"]').removeClass('selected-light');
      $('[href="#house2"]').removeClass('selected-light');
      $('[href="#house3"]').removeClass('selected-light');
      $(_this).toggleClass('selected-light');
    }
});