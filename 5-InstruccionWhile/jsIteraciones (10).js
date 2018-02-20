function Mostrar()

{
	var contador;
	//declarar contadores y variables 
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	
	var negativos;
	var positivos;

	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;	

	var numero;

	var respuesta;

	contador = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	negativos = 0;
	positivos = 0;
	respuesta = "si";

	while(respuesta != "no")
	
	{
		numero = prompt("Ingrese un numero","0");
		numero = parseInt(numero);
			
		if(numero < 0)
		{
			negativos = negativos + numero;
			contadorNegativos++;
		}
		else
		{
			positivos = positivos + numero;
			contadorPositivos++;
		}
		if(numero == 0)
		{
			contadorCeros++;
		}
		if(numero%2 == 0)
		{
			contadorPares++;
		}

		respuesta = prompt("¿Desea ingresar otro numero?: ","si/no");

		contador++;		
	}

	promedioPositivos = positivos / contadorPositivos;
	promedioNegativos = negativos / contadorNegativos;
	diferenciaPositivosNegativos = positivos + negativos;

	document.write("La suma de los negativos es: " + negativos + " ");
	document.write("<br>" + "La suma de los positivos es: " + positivos + " ");
	document.write("<br>" + "La cantidad de positivos es: " + contadorPositivos + " ");
	document.write("<br>" + "La cantidad de negativos es: " + contadorNegativos + " ");
	document.write("<br>" + "La cantidad de ceros es: " + contadorCeros + " ");
	document.write("<br>" + "La cantidad de numeros pares es: " + contadorPares + " ");
	document.write("<br>" + "El promedio de los numeros positivos es: " + promedioPositivos + " ");
	document.write("<br>" + "El promedio de los numeros negativos es: " +promedioNegativos + " ");
	document.write("<br>" + "Y la diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos + " ");	






}//FIN DE LA FUNCIÓN

