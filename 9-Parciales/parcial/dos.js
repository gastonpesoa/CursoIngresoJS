function Mostrar()
{
	var precioBruto;
	var precioFinal;

	precioBruto = prompt("Ingrese el importe","0");

	precioFinal = precioBruto * 1.21;

	document.getElementById("importeFinal").value = precioFinal;

	/*var importe;
	var importeFinal;

	var importe = prompt("Ingrese un valor","0");

	importeFinal = importe * 1.21;

	document.getElementById('importeFinal').value = importeFinal;*/
}
