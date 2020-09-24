var num1, num2, suma, x;
var name, surname, birth, operando;
var a = 0;
var b = 0;

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

function dis(x){
	if(result.textContent == 0 || result.textContent == '+' || result.textContent == '-'){
		result.textContent = x;
	}else{
		result.textContent = result.textContent + x;
	}
	a = result.textContent;
}

function cuenta(x){
	operando = x;
	b = a;
	a = 0;
	result.textContent = x;
}

function solve(){
	switch(operando){
		case '+':
			c = parseInt(b) + parseInt(a);
		break;
		case '-':
			c = parseInt(b) - parseInt(a);
		break;
	}
	result.textContent = c;
}

function reset(){
	a = 0;
	b = 0;
	c = 0;
	operando = null;
	result.textContent = 0;
}
