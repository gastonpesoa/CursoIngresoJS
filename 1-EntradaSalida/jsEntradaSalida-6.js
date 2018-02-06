/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/

function sumar()

{
 
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert('la suma es: ' + suma);
	
}

/*

separar las operaciones
parseInt convierte a numero entero, no redondea

var numeroUno = "2";
var numeroDos = 3;
var resultado = numeroUno * numeroDos;
alert(resultado);
la suma concatena
*/


