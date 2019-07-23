
$(function(){
    
var header = document.getElementById('header');
var headroom = new Headroom(header);
headroom.init();

//menu responsive
//calculamos el ancho de la página

var ancho = $(window).width(),
enlaces = $('#enlaces'),
btnMenu = $('#btn-menu');
icono = $('#btn-menu .icono');

if(ancho < 500){
    enlaces.hide();
    icono.addClass('fa-align-right');
}

btnMenu.on('click', function(e){
    icono.toggleClass('fa-align-right');
    icono.toggleClass('fa-times');
    enlaces.slideToggle();
});

$(window).on('resize', function(){
    if($(this).width() > 500){
        enlaces.show();
        icono.addClass('fa-times');
        icono.removeClass('fa-align-right');
    } else {
        enlaces.hide();
        icono.addClass('fa-align-right');
        icono.removeClass('fa-times');
    }
});

});


