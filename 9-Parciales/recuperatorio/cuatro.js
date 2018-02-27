function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese el primer numero: ","0");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Ingrese el segundo numero: ","0");
	numeroDos = parseInt(numeroDos);
	
	resultado = numeroUno + numeroDos;

	if (resultado > 0)
	{
		document.write("El resultado de la suma es " + resultado + " y es 'positivo'");
	} 
	else
	{
		if (resultado < 0)
		{
		document.write("El resultado de la suma es " + resultado + " y es 'negativo'");
		}
		else
		{
			document.write("El resultado de la suma es 'cero'");
		}
	}//if (resultado > 0)	
}


	























	





	


	/*var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese el primer numero", "0");
	numeroDos = prompt("Ingrese el segundo numero", "0");


	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;

	if(resultado < 0)
	{
	   document.write("negativo");
	}
	else
	{
	   if(resultado == 0)
	   {
		document.write("cero");
	   }
	   else
	   {
		document.write("positivo");
	   }
	}*/


