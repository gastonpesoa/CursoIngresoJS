function Mostrar()

{
 
	var importeBruto;
	var importeFinal;	

	importeBruto = prompt("Ingrese el importe: ","0");
	importeBruto = parseInt(importeBruto);
	importeFinal = importeBruto * 0.75; 

	document.getElementById('importeFinal').value = importeFinal;
}

