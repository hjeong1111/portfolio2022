$(document).ready(function(){
    var $header = $('#header');

    $('.menu-btn').on('click',function(e){
        e.preventDefault();
        $('body').addClass('action');
        $header.addClass('on');
    });

    $('.close-btn').on('click',function(e){
        e.preventDefault();
        $('body').removeClass('action');
        $header.removeClass('on');
    });

    $(window).on("load resize", function(){
        var wWidth = $(window).width();
        if(wWidth > 1200){
            $('body').removeClass('action');
            $header.removeClass('on');
        }
    });

    $(window).on('orientationchange',function(){
        $('body').removeClass('action');
        $header.removeClass('on');
    });
});