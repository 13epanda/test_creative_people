var slideNow = 1;
var slideCount = $('.screens').children().length -4;
var translateWidth = 0;
var navBtnId = 0;

$(document).ready(function() {
    $('.right_control').click(function() {nextSlide();});
    $('.left_control').click(function() {prevSlide();});
    $('.nav_control').click(function() {
        navBtnId = $(this).index();
        if (navBtnId + 1 != slideNow) {
            translateWidth = -($('.slide').width()+20) * (navBtnId);
            $('.screens').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            $('.nav_screen').children(slideNow).removeClass('.nav_active');
            slideNow = navBtnId + 1;
            $('.nav_screen').children(slideNow).addClass('.nav_active');
        }
    });
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount ) {
        $('.screens').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -($('.slide').width()+20) * (slideNow);
        $('.screens').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}
function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -($('.slide').width()+20) * (slideCount - 1);
        $('.screens').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.screen').width() * (slideNow - 2);
        $('.screens').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
