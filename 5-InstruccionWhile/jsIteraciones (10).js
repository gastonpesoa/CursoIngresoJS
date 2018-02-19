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
	respuesta = "si";

	while(respuesta != "no")
	
	{

		numero = prompt("Ingrese un numero","0");

		numero = parseInt(numero);
			
	
	
		while(numero < 0)
		{
			negativos = negativos + numero;
			contadorNegativos++;
			break;
		}
		while(numero > 0)
		{
			positivos = positivos + numero;
			contadorPositivos++;
			break;
		}
		while(numero == 0)
		{
			contadorCeros++;
			break;
		}
		while(numero%2 == 0)
		{
			contadorPares++;
			break;
		}

		respuesta = prompt("¿Desea ingresar otro numero?: ","si/no");

		contador++;		
	}

	promedioPositivos = positivos / contadorPositivos;
	promedioNegativos = negativos / contadorNegativos;
	diferenciaPositivosNegativos = positivos + negativos;

	document.write("La suma de los negativos es: " + negativos + " ");
	document.write("La suma de los positivos es: " + positivos + " ");
	document.write("La cantidad de positivos es: " + contadorPositivos + " ");
	document.write("La cantidad de negativos es: " + contadorNegativos + " ");
	document.write("La cantidad de ceros es: " + contadorCeros + " ");
	document.write("La cantidad de numeros pares es: " + contadorPares + " ");
	document.write("El promedio de los numeros positivos es: " + promedioPositivos + " ");
	document.write("El promedio de los numeros negativos es: " +promedioNegativos + " ");
	document.write("Y la diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos + " ");	






}//FIN DE LA FUNCIÓN

