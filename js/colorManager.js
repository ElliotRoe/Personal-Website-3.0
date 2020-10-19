$(document).ready(function() {
  $.ajax({
    url: "http://www.colourlovers.com/api/palettes/top",
    type: "GET",
    success: function (result) {
      console.log(result);
    },
    error: function (error) {
      console.log(error);
    }
  });
  //$(":root").css("--main-background-color","");
});
