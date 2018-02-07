function Mostrar()

{
 
	var importe;
	var importeFinal;

	importe = prompt("Ingrese el importe del producto", "0");
	
	importeFinal = importe * 0.75;

	document.getElementById('importeFinal').value = importeFinal;


}
