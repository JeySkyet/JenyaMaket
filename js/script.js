$(document).ready(function(){
    $('.new-wallpaper__slider').owlCarousel({
    items: 4,
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='arrow-left'><img src='image/arrow-left.png' /></i>","<i class='arrow-right'><img src='image/arrow-right.png' /></i>"],
    responsive:{ //Адаптация в зависимости от разрешения экрана
        0:{
        items:1,
        margin:-53,
        nav:false,
        },
        900:{
        items:4
        },
        },
    });
    
    $('.header__sliders').owlCarousel({
    items: 1,
    loop:true,
    nav:true,
    responsive:{ //Адаптация в зависимости от разрешения экрана
      0:{
      nav:false,
      },
      },
    });

    $('.colors-slider').owlCarousel({
    items: 6,
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='arrow-left'><img src='image/arrow-left.png' /></i>","<i class='arrow-right'><img src='image/arrow-right.png' /></i>"]
    });

    $(".button_play").on("click", function(){
    $('#video')[0].play();
    $('.button_play').hide();
    });
    $("#video").on("click", function(){
    $('#video')[0].pause();
    $('.button_play').show();
    });

    $('.header__slider').owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:true,
    navText : ["<i class='arrow-left'><img src='image/arrow-left-white.png' /></i>","<i class='arrow-right'><img src='image/arrow-right-white.png' /></i>"]
    });

    if ( $( window ).width() <= 420){
        $(".hideThing").slideUp(1);
        $(".paints-button__list-passive").slideUp(1);
    };
    

    $('.footer-bottom__arrow').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1200);
        return false;
        });
    });


    var isMenuShow = false;
    $(".paints-button__list").click(function(){
    $(".paints-button__list-passive").slideToggle();
    if (isMenuShow == false){
    isMenuShow = true;
    $(".triangle").css({'transition' : 'transform'+' '+ 1 +'s','transform' : 'rotate('+ -90 +'deg)'});
    } else{
    isMenuShow = false;
    $(".triangle").css({'transition' : 'transform'+' '+ 1 +'s','transform' : 'rotate('+ 0 +'deg)'});
    }
    });

    $('.owl-threeforMobile').owlCarousel({
        items: 1,
        loop:true,
        margin: -53,
        nav:false,
        });
        $(".roll").click(function(){
          if ( $( ".roll" ).text() == "Развернуть...") {
              $( ".roll" ).text("Свернуть...");
              console.log("asdasd");
              } else {
              $( ".roll" ).text("Развернуть...");
              };
          $(".hideThing").slideToggle();
      });

        $(".roll1").click(function(){
          if ( $( ".roll1" ).text() == "Развернуть...") {
              $( ".roll1" ).text("Свернуть...");
              console.log("asdasd");
              } else {
              $( ".roll1" ).text("Развернуть...");
              };
          $(".hideThing").slideToggle();
      });

    $(".roll2").click(function(){
        if ( $( ".roll2" ).text() == "Развернуть...") {
            $( ".roll2" ).text("Свернуть...");
            console.log("asdasd");
            } else {
            $( ".roll2" ).text("Развернуть...");
            };
        $(".hideThing").slideToggle();
    });

    $(".roll3").click(function(){
        if ( $( ".roll3" ).text() == "Развернуть...") {
            $( ".roll3" ).text("Свернуть...");
            console.log("asdasd");
          } else {
            $( ".roll3" ).text("Развернуть...");
          };
        $(".hideThing").slideToggle();
        
    });


    $(".roll4").click(function(){
        if ( $( ".roll4" ).text() == "Развернуть...") {
            $( ".roll4" ).text("Свернуть...");
            console.log("asdasd");
          } else {
            $( ".roll4" ).text("Развернуть...");
          };
        $(".hideThing").slideToggle();
        
    });

    $(".roll5").click(function(){
        if ( $( ".roll5" ).text() == "Развернуть...") {
            $( ".roll5" ).text("Свернуть...");
            console.log("asdasd");
          } else {
            $( ".roll5" ).text("Развернуть...");
          };
        $(".hideThing").slideToggle();
        
    });

    $(".roll6").click(function(){
        if ( $( ".roll6" ).text() == "Развернуть...") {
            $( ".roll6" ).text("Свернуть...");
            console.log("asdasd");
          } else {
            $( ".roll6" ).text("Развернуть...");
          };
        $(".hideThing").slideToggle();
        
    });

    $(".roll7").click(function(){
        if ( $( ".roll7" ).text() == "Развернуть...") {
            $( ".roll7" ).text("Свернуть...");
            console.log("asdasd");
          } else {
            $( ".roll7" ).text("Развернуть...");
          };
        $(".hideThing").slideToggle();
        
    });

    $(".roll8").click(function(){
        if ( $( ".roll8" ).text() == "Развернуть...") {
            $( ".roll8" ).text("Свернуть...");
            console.log("asdasd");
          } else {
            $( ".roll8" ).text("Развернуть...");
          };
        $(".hideThing").slideToggle();
        
    });


    if ( $( window ).width() <= 620){
        $(".hideaboutUsButton1, .hideaboutUsButton2, .hideaboutUsButton3, .hideaboutUsButton4, .hideaboutUsButton5, .hideaboutUsButton6, .hideaboutUsButton7, .hideaboutUsButton8, .hideaboutUsButton9").slideUp(1);
    };


var isMenuShow1 = false;
$(".aboutUsbutton1").click(function(){
  $(".hideaboutUsButton1").slideToggle();
  if (isMenuShow1 == false){
      isMenuShow1 = true;
      $(".aboutUsbutton1 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow1 = false;
      $(".aboutUsbutton1 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow2 = false;
$(".aboutUsbutton2").click(function(){
  $(".hideaboutUsButton2").slideToggle();
  if (isMenuShow2 == false){
      isMenuShow2 = true;
      $(".aboutUsbutton2 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow2 = false;
      $(".aboutUsbutton2 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow3 = false;
$(".aboutUsbutton3").click(function(){
  $(".hideaboutUsButton3").slideToggle();
  if (isMenuShow3 == false){
      isMenuShow3 = true;
      $(".aboutUsbutton3 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow3 = false;
      $(".aboutUsbutton3 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow4 = false;
$(".aboutUsbutton4").click(function(){
  $(".hideaboutUsButton4").slideToggle();
  if (isMenuShow4 == false){
      isMenuShow4 = true;
      $(".aboutUsbutton4 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow4 = false;
      $(".aboutUsbutton4 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});

var isMenuShow5 = false;
$(".aboutUsbutton5").click(function(){
  $(".hideaboutUsButton5").slideToggle();
  if (isMenuShow5 == false){0.5
      isMenuShow5 = true;
      $(".aboutUsbutton5 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow5 = false;
      $(".aboutUsbutton5 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});0.5
var isMenuShow6 = false;
$(".aboutUsbutton6").click(function(){
  $(".hideaboutUsButton6").slideToggle();
  if (isMenuShow6 == false){
      isMenuShow6 = true;
      $(".aboutUsbutton6 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow6 = false;
      $(".aboutUsbutton6 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});
var isMenuShow7 = false;
$(".aboutUsbutton7").click(function(){
  $(".hideaboutUsButton7").slideToggle();
  if (isMenuShow7 == false){
      isMenuShow7 = true;
      $(".aboutUsbutton7 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow7 = false;
      $(".aboutUsbutton7 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});
var isMenuShow8 = false;
$(".aboutUsbutton8").click(function(){
  $(".hideaboutUsButton8").slideToggle();
  if (isMenuShow8 == false){
      isMenuShow8 = true;
      $(".aboutUsbutton8 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow8 = false;
      $(".aboutUsbutton8 img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});


var isMenuShow9 = false;
$(".aboutUsbutton9").click(function(){
  $(".hideaboutUsButton9").slideToggle();
  if (isMenuShow9 == false){
      isMenuShow9 = true;
      $(".aboutUsbutton img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ -180 +'deg)'});
  } else{
      isMenuShow9 = false;
      $(".aboutUsbutton img:nth-child(2)").css({'transition' : 'transform'+' '+ 0.5 +'s','transform' : 'rotate('+ 0 +'deg)'});
  }
});
