$("article").hide(); 

$(document).ready(function(){
    $("#hide").click(function(){
      $("article").hide();
    });
    $("#show").click(function(){
      $("article").show();
    });
  });