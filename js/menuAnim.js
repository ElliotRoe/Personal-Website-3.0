$(document).ready(function(){

  $(".menuText").hover(function() {
    $( this ).parent().parent().toggleClass("hovered");
  }, function() {
    $( this ).parent().parent().toggleClass("hovered");
  });

  $(".menuText").click(function() {
    $.scrollTo($($(this).parent().attr("href")), 1000);
  });

});
