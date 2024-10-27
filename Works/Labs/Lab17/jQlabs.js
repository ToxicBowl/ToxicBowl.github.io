$(document).ready(function(){
  $(".header").click(function(){
    $(".topnav").hide(5000, function(){
      alert("the nav bar is gone.");
    });
  });
  $("#demo").click(function(){
    $(".topnav").show(5000,function(){
      alert("The navbar is back.");
    });
  });
});
