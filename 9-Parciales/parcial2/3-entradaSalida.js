//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.


function Mostrar()

{
	
	var ancho;
	var largo;
	var perimetro;
	var resultado;

	ancho = document.getElementById('ancho').value;
	largo = document.getElementById('largo').value;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = 2 * (ancho + largo);
	resultado = 3 * perimetro;

	alert("Se necesitan " + resultado + " m de alambrado");
	


}

