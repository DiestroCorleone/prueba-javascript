var num1, num2, suma, x;
var name, surname, birth;

function calcular(){
	num1 = Number(document.getElementById("num1").value);
	num2 = Number(document.getElementById("num2").value);
	
	suma = num1+num2;
	
	document.getElementById("resultado").innerHTML = suma;
}

function limpiar(){
	document.getElementById("resultado").innerHTML = '';
}

function crearUsuario(){
	name = document.getElementById("name").value;
	surname = document.getElementById("surname").value;
	birth = document.getElementById("birth").value;
	
	alert("Usuario creado exitosamente!");
	document.getElementById("nombreCompleto").innerHTML = name + ' ' + surname;
	document.getElementById("fechaNac").innerHTML = birth;
}

function cuenta(obj){
	var result = document.getElementById("result");
	var pushed = obj.innerHTML;
	
	if(pushed == '='){
		result.innerHTML = eval(result.innerHTML);
	}else if(pushed == 'C'){
		result.innerHTML = '0';
	}else{
		if(result.innerHTML == '0'){
			result.innerHTML = pushed;
		}else{
			result.innerHTML += pushed;
		}
	}
}
