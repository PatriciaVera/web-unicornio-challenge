
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



$(document).ready(function(){
	$("#btn-menu").hover(function(){
        icono.toggleClass('fa-align-right');
        icono.toggleClass('fa-hamburger');
		}, function(){
            icono.toggleClass('fa-hamburger');
            icono.toggleClass('fa-align-right');
		});
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

//Efectos de sonido  

var beepOne = $("#pop")[0];
$("#enlaces a")
	.mouseenter(function() {
		beepOne.play();
    });
    
var beepOne = $("#pop")[0];
$("#icons-redes a")
    .mouseenter(function() {
        beepOne.play();
    });

var beepOne = $("#pop")[0];
$("#icons-redes-escritorio a")
    .mouseenter(function() {
        beepOne.play();
    });

    var presion = $("#clicmenu")[0];
    document.querySelector('#btn-menu').addEventListener('click', function(){
        presion.play();
    })
