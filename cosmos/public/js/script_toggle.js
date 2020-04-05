let button = true;

$(document).ready(function(){
if(button == true){
    $('.toggle').click(function darkMode(){
    $('header').toggleClass('night')
    $('footer').toggleClass('night')
    $('.logo').toggleClass('night')
    $('.title-section').toggleClass('night')
    $('body').toggleClass('night')
})
}
else {
    $('.toggle').click(function lightMode(){
        $('footer').toggleClass('footer')
        $('header').toggleClass('header')
        $('body').toggleClass('night')
        $('.title-section').toggleClass('.title-section')
        $('.logo').toggleClass('.logo')
    });
}})