function Mostrar()

{
	var i;
	var numero;
	var contador = 0;

	
	numero = prompt("Ingrese un numero","0");

	numero = parseInt(numero);
	
	document.write("Se ingreso el numero: " + numero + "<br>");	

	for(i = 1; i != (numero + 1); i++)
	{
		if(numero % i == 0)
		{
				
			document.write("El numero es divisible por: " + i + "<br>");
			contador = contador + 1;
		}
	}

	document.write("Cantidad de numeros divisores: " + contador);






}//FIN DE LA FUNCIÓN