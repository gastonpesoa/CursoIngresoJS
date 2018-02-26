/*solo if
ingresar tres numero y pedir el mayor
*/
function Mostrar()
{
	//Definos variables
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;
	var menor;

	//Tomo datos
	numeroUno = prompt("Ingrese el primer numero: ", "");
	numeroDos = prompt("Ingrese el segundo numero: ", "");
	numeroTres = prompt("Ingrese el tercer numero: ", "");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);

	//Encuentro el mayor
	if (numeroUno >= numeroDos && numeroUno >= numeroTres) 
	{
		mayor = numeroUno;
	}
	else
	{
		if (numeroDos >= numeroUno && numeroDos >= numeroTres) 
		{
			mayor = numeroDos;
		}
		if (numeroTres >= numeroUno && numeroTres >= numeroDos) 
		{
			mayor = numeroTres;
		}
	}

	//Encuentro el menor
	if (numeroUno <= numeroDos && numeroUno <= numeroTres) 
	{
		menor = numeroUno;
	}
	else
	{
		if (numeroDos <= numeroUno && numeroDos <= numeroTres) 
		{
			menor = numeroDos;
		}
		if (numeroTres <= numeroUno && numeroTres <= numeroDos) 
		{
			menor = numeroTres;
		}
	}

	//Muestro los resultados
	alert("El mayor es: " + mayor);
	alert("El menor es: " + menor);
}		
	
/*var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese el primer numero: ", "");
	numeroDos = prompt("Ingrese el segundo numero: ", "");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	
	
	document.write(resultado);*/

	/*if(numeroUno > numeroDos && numeroUno > numeroTres)
	{
	   	alert("El mayor es el numero uno");
	}		
	else
	{
	   if(numeroDos > numeroUno && numeroDos > numeroTres)
	   {
			alert("El mayor es el numero dos");
	   }
	   if (numeroTres > numeroUno && numeroTres > numeroDos)
	   {
			alert("El mayor es el numero tres");
	   }*/
