function validar(){
	var error=0;
	var mensajeError='';
	$("#mensaje").empty();
	
	if ($("#pan option:selected").val()==-1){
		error++;
		mensajeError+="Debe elegir el pan.";
	}

	if ($("#hamburguesa option:selected").val()==""){
		error++;
		mensajeError+="\nDebe elegir la hamburguesa.";
	}

	if ($("#hojas option:selected").val()==""){
		error++;
		mensajeError+="\nDebe elegir las hojas.";
	}

	if(error==0){
		return true;
	}else{
		alert(mensajeError);
		$("#erorPan").append(mensajeError);
		return false;
	}
	
}
$(document).ready(function(){
	$("#form").submit(function(){
		return validar();
	});
});