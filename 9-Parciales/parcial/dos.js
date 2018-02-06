function Mostrar()
{
	var importe;
	var importeFinal;

	var importe = prompt("Ingrese un valor","0");

	importeFinal = importe * 1.21;

	document.getElementById('importeFinal').value = importeFinal;
}
