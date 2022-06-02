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
        };
    $(".roll").click(function(){
    $(".hideThing").slideToggle();
    if ( $( ".roll" ).text() == "Развернуть...") {
    $( ".roll" ).text( "Свернуть..." );
    } else {
    $( ".roll" ).text( "Развернуть..." );
    };
    });

    $('.footer-bottom__arrow').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1200);
        return false;
        });
    });