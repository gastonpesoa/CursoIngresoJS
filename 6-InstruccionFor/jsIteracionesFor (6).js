function Mostrar()

{
	var contadorDePositivos = 0;
	var contadorDeNegativos = 0;
	var contadorDeCeros = 0;
	var contadorDePar = 0;
	var contadorDeImpar = 0;
	var contador50 = 0;

	for (contador = -100; contador < 100; contador++)
	{
		if (contador > 0)
		{
			contadorDePositivos++;
		}
		else
		{
			if (contador < 0) 
			{
				contadorDeNegativos++;
			}
			else
			{
				contadorDeCeros++;
			}
		}

		if (contador%2 == 0 && contador != 0) 
		{
			contadorDePar++
		}
		else
		{
			if (contador != 0) 
			{
				contadorDeImpar++;
			}
		}

		switch (contador)
		{
			case 50:
				contador50++;
				break;
		}
	}

	document.write("positivos " + contadorDePositivos + "<br>");
	document.write("negativos " + contadorDeNegativos + "<br>");
	document.write("ceros " + contadorDeCeros + "<br>");
	document.write("pares " + contadorDePar + "<br>");
	document.write("impares " + contadorDeImpar + "<br>");
	document.write("50 " + contador50 + "<br>");

}//FIN DE LA FUNCIÓN

/*
var i;
	var numero;
	var contador = 0;

	numero = prompt("Ingrese un numero","0");

	numero = parseInt(numero);

	document.write("Se ingreso el numero: " + numero + "<br>");
		
	for(i = 1; i != numero + 1; i++)
	{
		if(i % 2 == 0)
		{
			document.write("Numero par: "+ i + "<br>");
			contador = contador + 1;
		}
	}

	document.write("Cantidad de numeros pares encontrados: " + contador);
*/