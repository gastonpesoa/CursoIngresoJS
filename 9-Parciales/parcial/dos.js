
/*
pedir precio y porcentaje de descuento q se va a ahcer
resultado por id

*/
function Mostrar()
{
	var precioBruto;
	var descuento;
	var precioFinal;
	var porcentaje;

	precioBruto = prompt("Ingrese el precio: ","0");
	precioBruto = parseInt(precioBruto);

	porcentaje = prompt("Ingrese el porcentaje de descuento: ","0");

	descuento = precioBruto * (porcentaje/100);

	precioFinal = precioBruto - descuento;

	document.getElementById("importeFinal").value = precioFinal;
}



/*var precioBruto;
	var precioFinal;

	precioBruto = prompt("Ingrese el importe","0");

	precioFinal = precioBruto * 1.21;

	document.getElementById("importeFinal").value = precioFinal;*/

	/*var importe;
	var importeFinal;

	var importe = prompt("Ingrese un valor","0");

	importeFinal = importe * 1.21;

	document.getElementById('importeFinal').value = importeFinal;*/