function Mostrar()

{
	var anterior;
	var numero;
	var contadorDivisor = 0;

	numero = prompt("Ingrese un numero","0");

	numero = parseInt(numero);
	
	document.write("Se ingreso el numero: " + numero + "<br>");	

	for (anterior = 2; anterior < numero; anterior++)
	{
		if (numero % anterior == 0)
		{
				
			document.write("El numero es divisible por: " + anterior + "<br>");
			contadorDivisor++;
		}
		if (anterior > (numero / 2))
		{
			break;
		}
	}
	if (contadorDivisor == 0)
	{
		document.write("El numero " + numero + " es primo");
	}
	else
	{
		document.write("Cantidad de numeros divisores: " + contadorDivisor);
	}

}//FIN DE LA FUNCIÓN

/*	var numero;
	var contadorDivisores = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(anterior = 2; anterior < numero; anterior++)
	{
		if(numero % anterior == 0)
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
	}	*/