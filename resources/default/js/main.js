$(document).ready(function(){
    setTimeout(function(){
        $('#section1').addClass('action');
    },500);

    $('#fullpage').fullpage({
        autoScrolling:true,
        ScrollHorizontally:true,
        navigation:true,
		navigationPosition: 'left',
        anchors:['first','second','third'],
        navigationTooltips:['처음','접니다','작품'],
        showActiveTooltip:true,
        slidesNavigation: true,
		slidesNavPosition: 'left',
        sectionSelector:'.section',
        scrollOverflow:true,
    });


    $('#fp-nav ul li').each(function (index) {
        var num = index + 1;
        $(this).find('span').text('0'+num);
    });


    var swiper = new Swiper('#visual-list',{
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        effect: "fade",
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });

    var wWidth = $(window).width();

    $('.portfolio-box .tabs .tab-list > li .tab-link').on('click',function(e){
        e.preventDefault();
        var tab_id = $(this).attr('data-tab');

        
        $('.portfolio-box .tabs .tab-list > li').removeClass('current');
        $('.portfolio-box .tab-con').removeClass('current');

        $(this).parent('li').addClass('current');
        $('#'+tab_id).addClass('current');

        if($('.portfolio-box .tabs').hasClass('on')){
            $('.portfolio-box .tabs').removeClass('on');
        }else{
            $('.portfolio-box .tabs').addClass('on');
        }
    });


});