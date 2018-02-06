/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);

	suma = precioUno + precioDos + precioTres;

	alert(suma);

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);

	promedio = (precioUno + precioDos + precioTres)/3;

	alert(promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var precioFinal;

	precioUno = parseInt(document.getElementById('PrecioUno').value);
	precioDos = parseInt(document.getElementById('PrecioDos').value);
	precioTres = parseInt(document.getElementById('PrecioTres').value);

	suma = precioUno + precioDos + precioTres;
	precioFinal = suma + (suma * 0.21);

	alert(precioFinal);
	
}