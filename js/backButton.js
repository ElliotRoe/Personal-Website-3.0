$(document).ready(function(){
  $("#backButton").css("left", $(window).width()-$("#backButton").width()-20);
  $("#backButton").css("top", $(window).height()-$("#backButton").height()-20);

   $(window).scroll(function() {
     if($(window).scrollTop()>=500) {
       $("#backButton").toggleClass("enabled", true);
     } else {
       $("#backButton").toggleClass("enabled", false);
     }
   });

   $("#backButton").click(function() {
     $.scrollTo($("body"), 1000);
     console.log("clicked");
   });
});
