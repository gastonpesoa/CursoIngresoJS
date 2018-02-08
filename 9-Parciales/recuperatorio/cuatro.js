function Mostrar()

{

	var numeroUno;
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
	}


}
