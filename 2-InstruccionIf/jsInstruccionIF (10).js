function Mostrar()

{
	//Genero el número RANDOM entre 1 y 10 
	
	
	var resultado;
		
	resultado = Math.floor(Math.random() * 10) + 1;

	if(resultado > 8)
	{
	   alert("Nota del examen: " + resultado + ". 'EXCELENTE'");
	}
	else
	{
	   if(resultado < 4)
	   {
		alert("Nota del examen: " + resultado + ". 'Vamos, la proxima se puede'");
	   }
	   else
	   {
		alert("Nota del examen: " + resultado + ". 'APROBÓ'");
	   }//if(resultado < 4)
	}//if(resultado > 8)		
/*

	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10) + 1;

	if (numeroRandom > 8) 
	{
		alert("EXCELENTE" + numeroRandom);
	}
	else
	{

	}

*/

}//FIN DE LA FUNCIÓN



