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
  $("#try").click(function(){
    /*$(".anim").animate({
      left: '+=5px',
      opacity: '-=0.05',
      height: '+=10px',
      width: '+=50px'
    }); */
    var a=$(".anim");
    a.animate({height:'+=10px', opacity:'-=0.5'}, "slow");
    a.animate({height:'-=5px', opacity:'+=0.3'}, "slow");
    a.animate({height:'+=110px', opacity:'-=0.1'}, "slow");
    a.animate({border:'10%'}, 'fast');
  });
$("#pop").css("color", "red")
  .slideUp(2000).slidedown(2000);
});
