function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno = document.getElementById('precioUno').value;
	precioUno = parseInt(precioUno);
	precioDos = document.getElementById('precioDos').value;	
	precioDos = parseInt(precioDos);
	precioTres = document.getElementById('precioTres').value;	
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;
	promedio = suma / 3;
	promedio = promedio;

	alert("La suma de los precios ingresados es: " + suma + " y el promedio es " + promedio);
}
