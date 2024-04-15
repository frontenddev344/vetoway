$(document).ready(function(){
    $(".nav-btn").click(function(){
      $("body").addClass("menuToggle");
    });
    $(".nav-list, .cross").click(function(){
      $("body").removeClass("menuToggle");
    });
  });