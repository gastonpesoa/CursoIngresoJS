/*2.	Para el departamento de Construcción:


A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.


B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.


C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/



function Rectangulo () 
{


	var largo;
	var ancho;
	var perimetro;
	var cantidadAlambre;

	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);

	perimetro = 2 * (largo + ancho);
	cantidadAlambre = perimetro * 3;

	alert('La cantidad de alambre a comprar es: ' + cantidadAlambre);


}

function Circulo () 

{
	
	var radio;
	var pi;
	var perimetro;
	var cantidadAlambre;

	radio = parseInt(document.getElementById('Radio').value);
	pi = 3.14;
	perimetro = pi * (2 * radio);
	cantidadAlambre = 3 * perimetro;

	alert('La cantidad de alambre a comprar es: ' + cantidadAlambre);
	
	


}


function Materiales () 

{
	
	var largo;
	var ancho;
	var area;
	var cantidadBolsasCemento;
	var cantidadBolsasCal;

	largo = parseInt(document.getElementById('Largo').value);
	ancho = parseInt(document.getElementById('Ancho').value);

	area = largo * ancho;

	cantidadBolsasCemento = area * 2;
	cantidadBolsasCal = area * 3;

	alert('Para las medidas ingresadas, se necesitan ' + cantidadBolsasCemento + ' bolsas de cemento y ' + 	cantidadBolsasCal + ' bolsas de cal.');


}