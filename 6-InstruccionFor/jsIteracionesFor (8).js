function Mostrar()

{
	var anterior;
	var numero;
	var contadorDivisor = 0;

	numero = prompt("Ingrese un numero","0");

	numero = parseInt(numero);

	document.write("Se ingreso el numero: " + numero);

	for(anterior = 2; anterior < numero; anterior++)
	{
		if (numero % anterior == 0)
		{	
			document.write("<br>" + "El numero es divisible por: " + anterior);
			contadorDivisor++;
		}
		if (anterior > (numero / 2))
		{
			break;
		}
	}//for(anterior = 2; anterior < numero; anterior++)

	if (contadorDivisor == 0)
	{
		document.write("<br>" + "El numero 'es primo' ya que no es divisible");
	}
	else
	{
		document.write("<br>" + "El numero 'no es primo' ya que es divisible por " + contadorDivisor + " numeros");
	}

}//FIN DE LA FUNCIÓN



