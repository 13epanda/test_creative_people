$('.register').on('click', function() {
    $('html,body').animate({scrollTop:$('.form').offset().top+"px"},{duration:1E3});
});

var win = $(this);
$(function(){
    media();
    window.onresize = media;
});
function media(){
    if (win.width() <= 720) {
        document.getElementById('sticker_p').innerHTML ='Обслуживание 0₽';
        document.getElementById('calculate_h2').innerHTML ='Дополнительный кредит на любые цели';
        document.getElementById('calculate_h3').innerHTML ='Получите решение за 2 минуты';
    }
}
