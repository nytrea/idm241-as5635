$(document).ready(function() {
    $("#btn").click(function() {
      $(this).addClass("pulse");
      setTimeout(function() {
        $('#btn').removeClass("pulse");      
      }, 800);
    });
  });