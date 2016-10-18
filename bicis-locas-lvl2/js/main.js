function validateForm(){
	var error = true;

	var regexNombre= !/^[A-Z][a-z]*$/g;
	var nombre = document.getElementById("name").value;

	var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var correo = document.getElementById("input-email").value;
    
    var mensaje = " ";
    if(!regexEmail.test(correo)){
    	mensajex += "Email Incorrecto\n";
    	error = false;
    }
    if(!regexNombre.test(nombre)){
    	mensaje = "Nombre Incorrecto";
        errores = false;
    }
     if (!error){
    	alert(mensaje);
    }
    return error;
}