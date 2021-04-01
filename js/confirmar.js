$(document).ready(function(){

    var pan=localStorage.getItem("pan");
    var hamburguesa=localStorage.getItem("hamburguesa");
    var hojas=localStorage.getItem("hojas");

    var calle=localStorage.getItem("calle");
    var numero=localStorage.getItem("numero");
    var piso=localStorage.getItem("piso");
    var localidad=localStorage.getItem("localidad");
    
    $('#pan').text(pan);
    $('#hamburguesa').text(hamburguesa);
    $('#hojas').text(hojas);

    $('#calle').val(calle);
    $('#numero').val(numero);
    $('#piso').val(piso);
    $('#localidad').val(localidad);

});