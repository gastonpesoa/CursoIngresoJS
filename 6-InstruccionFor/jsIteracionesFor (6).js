function Mostrar()

{
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






}//FIN DE LA FUNCIÓN