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

});