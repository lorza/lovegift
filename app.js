$(document).ready(function(){
    $("#scroll-button").click(function(){
        $("html, body").animate({
            scrollTop: $(".main__about").offset().top
        }, 1500);
    })

    $("#events-link").click(function(){
        $("html, body").animate({
            scrollTop: $(".main__divider__events").offset().top
        }, 1500);
    })

    $("#menu-link").click(function(){
        $("html, body").animate({
            scrollTop: $(".main__divider__menu").offset().top
        }, 1500);
    })

    $("#reservation-link").click(function(){
        $("html, body").animate({
            scrollTop: $(".main__divider__reservation").offset().top
        }, 1500);
    })
})