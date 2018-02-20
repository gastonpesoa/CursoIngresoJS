function Mostrar()

{





	var i;
	var numero;

	numero = prompt("Ingrese un numero","0");

	numero = parseInt(numero);

	for(i=1; i<numero; i++)
	{
		if (numero / i == Math.round(numero / i) && i != 1 && i != numero)
		{
			alert("Numero no primo");
			break;
		}
		else
		{
			alert("Numero no primo");
			break;
		}
	
	}
	
	
}//FIN DE LA FUNCIÓN





/*
for(i = 2; i < numero; i++)
	{	
		if (numero % i == 0)
		{
			alert("Numero no primo");
			break;
		}
		else
		{
			alert("Numero primo");
			break;
		}
	}

*/