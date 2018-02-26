function Mostrar()

{
	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 'si';

	while(respuesta == "si")
	{
		var numero;
		numero = prompt("Ingrese un numero: ","0");
		numero = parseInt(numero);

		while(numero == 0)
		{
			numero = prompt("Ingrese un valor mayor o menor a cero!: ","0");
			numero = parseInt(numero);
		}
		
		if (numero > 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;				
		} 

		contador++; 
		respuesta = prompt("¿Desea continuar la cuenta?","si/no");
		
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;
	
	/*
	var contador = 0;
	
	var positivo = 0;
	
	var negativo = 1;
	
	
	var respuesta = 'si';

	while(respuesta == "si")
	{
		var numero;

		numero = prompt("Ingrese un numero: ","0");

		numero = parseInt(numero);
		
		if(numero > 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
		} 

		respuesta = prompt("¿Desea continuar la cuenta?","si/no");

		contador++; 
	}




	document.getElementById('suma').value = positivo;
	
document.getElementById('producto').value = negativo;
	*/


}//FIN DE LA FUNCIÓN