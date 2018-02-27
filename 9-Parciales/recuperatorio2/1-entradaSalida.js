//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var resultado;

	base = document.getElementById('lado').value;

	resultado = 3 * base;

	alert("El perimetro del triangulo equilatero es: " + resultado);
} 

