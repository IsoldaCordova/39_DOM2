function validateForm(){
	var span = document.createElement("span");
 	span.setAttribute("class","error");
 	var spans = document.getElementsByClassName("error");

	while(spans.length>0){
		spans[0].parentElement.removeChild(spans[0]);
	}
	// Nombre
	 var nombre = document.getElementById("name");
	 var regexTexto = /^[A-Z][a-z]*$/g;

	 if(nombre.value == null || nombre.value == ""){
	 span.innerHTML = "Ingresa Nombre";
	 nombre.parentNode.appendChild(span);
	 return false;
	}else if(!regexTexto.test(nombre.value)){
		span.innerHTML = "Escribe la primera letra en mayúscula";
		nombre.parentNode.appendChild(span);
		return false;
	}
	// Apellido
	var apellido = document.getElementById("lastname");
	if(apellido.value == null || apellido.value == ""){
		span.innerHTML = "Ingresa Apellido";
		apellido.parentNode.appendChild(span);
		return false;
	}else if(!/^[A-Z][a-z]*$/g.test(apellido.value)){
		span.innerHTML = "Escribe la primera letra en mayúscula";
		apellido.parentNode.appendChild(span);
		return false;
	}
	// Email
	var correo = document.getElementById("input-email");
	var regexMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(correo.value == null || correo.value == ""){
		span.innerHTML = "Ingresa Correo";
		correo.parentNode.appendChild(span);
		return false;
	}else if (!regexMail.test(correo.value)){
		span.innerHTML = "Correo equivocado";
		correo.parentNode.appendChild(span);
		return false;
	}
	// Password
	var contrasena = document.getElementById("input-password");
	if(contrasena.value == null || contrasena.value == ""){
		span.innerHTML = "Ingresa Password";
		contrasena.parentNode.appendChild(span);
		return false;
	}else if (contrasena.value.length < 6){
		span.innerHTML = "La contraseña debe tener al menos 6 caracteres";
		contrasena.parentNode.appendChild(span);
		return false;
	}else if ((contrasena.value == 123456 ) || (contrasena.value == 098754) || (contrasena.value == "password")){
		span.innerHTML = "no se puede, cambia password";
		contrasena.parentNode.appendChild(span);
		return false;
	}
	// Bici
	var bici = document.getElementsByTagName("select")[0];
	if( bici.selectedIndex == null || bici.selectedIndex == 0){
		span.innerHTML = "Por Favor Selecciona tipo de bici";
		bici.parentNode.appendChild(span);
		return false;
	}
 }


