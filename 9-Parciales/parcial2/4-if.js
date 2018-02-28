//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
no se valida. no se usa while 
solo if o switch

se ingresan dos numeros
si son iguales se concatenan +
si el primero es mayor que el segundo se multiplican *
si el segundo es mas grande se restan -
si la * da num par ademas de mostrar el resultado se muestra el mje es par

testear con:
4 4 = 44
3 2 = 6 mje es par
5 3 = 15
3 6 = -3
3 5 = -2
10 8 = 80 mje es par
8 10 = -2
3 1 = 3

*/
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese el primer numero: ","");
	numeroDos = prompt("Ingrese el segundo numero: ","0");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos)

	if (numeroUno == numeroDos) 
	{
		resultado = numeroUno + "" + numeroDos;
	}
	else
	{	
		if (numeroUno > numeroDos) 
		{
			resultado = numeroUno * numeroDos;

			if (resultado % 2 == 0 && resultado != 0) 
			{
				resultado = resultado + " Es par";
			}
		}
		else
		{
			resultado = numeroUno - numeroDos;
		}
	}

	alert(resultado);

}//function Mostrar()


/*var numeroUno;
	var numeroDos;
	var resultado;
	
	numeroUno = prompt("Ingrese el primer numero", "0");
	numeroDos = prompt("Ingrese el segundo numero", "0");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
	   resultado = numeroUno * numeroDos;	
	}
	else
	{
	   if(numeroUno > numeroDos)
	   {
		resultado = numeroUno - numeroDos;
	   }
	   else
	   {
		resultado = numeroUno + numeroDos;
	   }
	}

	document.write(resultado);*/
