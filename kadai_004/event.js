$(function (){
    $(window).on('scroll', () => {
            $('.box').text('scrollイベントが発生しました')
            console.log('scrollイベントが発生しました')
        });
});

$(window).on('load', () => {
    console.log('loadイベントが発生しました')
});