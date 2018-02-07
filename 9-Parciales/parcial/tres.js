function Mostrar()

{
	var largo;
	var ancho;
	var perimetro;
	var alambre;
	
	largo = document.getElementById('alrgo').value;
	ancho = document.getElementById('ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	
	perimetro = 2 * (largo + ancho);
	alambre = 3 * perimetro;

	alert("Se necesitan " + alambre + " metros de alambre para colocarle 3 hilos de alambrado a su perímetro. " );



}
