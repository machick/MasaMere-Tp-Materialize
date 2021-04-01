//credito
$(document).ready(function(){
	$('#nTitular').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerte1').text($( '#nTitular').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});

$(document).ready(function(){
	$('#codigo').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerte2').text($( '#codigo').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});

$(document).ready(function(){
	$('#vencimiento').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerte3').text($( '#vencimiento').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});

$(document).ready(function(){
	$('#nTarjeta').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerte4').text($( '#nTarjeta').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});

$(document).ready(function(){
	$('#cuotas').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerte5').text($( '#codigo').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});



//debito
$(document).ready(function(){
	$('#nTitularD').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerteD1').text($( '#nTitularD').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});

$(document).ready(function(){
	$('#codigoD').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerteD2').text($( '#codigoD').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});

$(document).ready(function(){
	$('#vencimientoD').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerteD3').text($( '#vencimientoD').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});

$(document).ready(function(){
	$('#nTarjetaD').keyup(function() { //el #numero es el que tiene el input que carga el usuario
        $('.suerteD4').text($( '#nTarjetaD').val()); //#suerte es a donde va a ir (una p adentro de un div)
	});
});

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();  
});

var instance = M.Tabs.init(el, options);



