$(document).ready(function(){

    var pan=localStorage.getItem("pan");
    var hamburguesa=localStorage.getItem("hamburguesa");
    var hojas=localStorage.getItem("hojas");
    
    var calle=localStorage.getItem("calle")?"-1":localStorage.getItem("calle");
    var numero=localStorage.getItem("numero")?"-1":localStorage.getItem("numero");
    var piso=localStorage.getItem("piso")?"-1":localStorage.getItem("piso");
    var localidad=localStorage.getItem("localidad")?"-1":localStorage.getItem("localidad");

    $( "#calle").change(function() {
        calle=$(this).val();
        localStorage.setItem("calle",calle);
        console.log(localStorage.getItem("calle")); 
        validar();
    });

    $( "#piso").change(function() {
        piso=$(this).val();
        localStorage.setItem("piso",piso);
        console.log(localStorage.getItem("piso")); 
        validar();
    });

    $( "#numero").change(function() {
        numero=$(this).val();
        localStorage.setItem("numero",numero);
        console.log(localStorage.getItem("numero")); 
        validar();
    });

    $( "#localidad").change(function() {
        localidad=$(this).val();
        localStorage.setItem("localidad",localidad);
        console.log(localStorage.getItem("localidad")); 
        validar();
    });

    function validar(){
        if(calle != '-1' && calle!='' && piso != '-1' && piso!='' &&
         numero != '-1' && numero!='' && localidad != '-1' && localidad!=''){
            $('#btn-disabled').prop('disabled',false);
                console.log(pan+" "+hamburguesa+" "+hojas + " "+calle+" "+piso+" "+numero+" "+localidad);

        }
    }
});



