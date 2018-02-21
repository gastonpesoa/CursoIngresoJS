function Mostrar()

{
	var numero;
	var contadorDivisores = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(anterior = 2; anterior<numero; anterior++)
	{
		if(numero%anterior == 0)
		{
			document.write(anterior+"<br>");
			contadorDivisores++;
		}
		if (anterior > (numero/2) ) 
		{
			break;
		}
	}
	if (contadorDivisores == 0) 
	{
		document.write("Es primo");
	}

}//FIN DE LA FUNCIÓN

/*	var i;
	var numero;
	var contador = 0;

	numero = prompt("Ingrese un numero","0");

	numero = parseInt(numero);
	
	document.write("Se ingreso el numero: " + numero + "<br>");	

	for(i = 1; i != (numero + 1); i++)
	{
		if(numero % i == 0)
		{
				
			document.write("El numero es divisible por: " + i + "<br>");
			contador = contador + 1;
		}
	}

	document.write("Cantidad de numeros divisores: " + contador);*/