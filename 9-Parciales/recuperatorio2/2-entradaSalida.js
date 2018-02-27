//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeFinal;

	importe = prompt("Ingrese un importe", "0");
	importeFinal = importe * 1.21;

	document.getElementById('importe').value = importeFinal;
	
	//alert("Funciona 2-EntradaSalida");
}

