//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese el primer numero", "0");
	numeroDos = prompt("Ingrese el segundo numero", "0");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
	   resultado = numeroUno * numeroDos;
	   document.write("Se multiplicaron los numeros y el resultado es: " + resultado);
	}
	else
	{
	   if(numeroUno > numeroDos)
	   {
		resultado = numeroUno - numeroDos;  
		document.write("Se restaron los numeros y el resultado es: " + resultado); 	
 	   }
	   else
	   {
		resultado = numeroUno + numeroDos; 
		document.write("Se sumaron los numeros y el resultado es: " + resultado);  
	   }
	}//if(numeroUno == numeroDos)
	
}//function Mostrar()

