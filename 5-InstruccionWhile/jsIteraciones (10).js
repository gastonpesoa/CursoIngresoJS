/*	1-Suma de los negativos. 
	2-Suma de los positivos. 
	3-Cantidad de positivos. 
	4-Cantidad de negativos. 
	5-Cantidad de ceros. 
	6-Cantidad de números pares. 
	7-Promedio de positivos. 
	8-Promedios de negativos. 
	9-Diferencia entre positivos y negativos, (positvos-negativos).	*/

function Mostrar()

{	//declaro variables
	var numero;
	var respuesta = "si";

	//declaro e incio contadores 
	var contador = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	
	//declaro e inicio acumuladores
	var negativos = 0;
	var positivos = 0;

	//declaro variables de operaciones
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;	

	//Validacion
	while (respuesta != "no")
	{
		//Ingreso del numero
		numero = prompt("Ingrese un numero","0");
		numero = parseInt(numero);
		contador++;	
		
		//1-2-3-4-5-Cantidad y suma de negativos, ceros y positivos
		if (numero < 0)
		{
			negativos = negativos + numero;
			contadorNegativos++;
		}
		else
		{
			if (numero == 0)
			{
				contadorCeros++;
			}
			else
			{
				positivos = positivos + numero;
				contadorPositivos++;
			}//if (numero == 0)
		}//if (numero < 0)
		
		//6-Cantidad de números pares. 
		if (numero % 2 == 0)
		{
			contadorPares++;
		}

		respuesta = prompt("¿Desea ingresar otro numero?: ","si/no");
	}//while (respuesta != "no")

	//7-Promedio de positivos. 
	promedioPositivos = positivos / contadorPositivos;

	/*if (promedioPositivos !== isNaN(promedioPositivos)) 
	{
		promedioPositivos = 0;
	}*/

	//8-Promedios de negativos. 
	promedioNegativos = negativos / contadorNegativos;

	/*if (promedioNegativos !== isNaN(promedioNegativos)) 
	{
		promedioNegativos = 0;
	}*/
	
	//9-Diferencia entre positivos y negativos, (positvos-negativos).
	diferenciaPositivosNegativos = positivos + negativos;

	//Muestro los resultados
	document.write("La suma de los negativos es: " + negativos + " ");
	document.write("<br>" + "La suma de los positivos es: " + positivos + " ");
	document.write("<br>" + "La cantidad de positivos es: " + contadorPositivos + " ");
	document.write("<br>" + "La cantidad de negativos es: " + contadorNegativos + " ");
	document.write("<br>" + "La cantidad de ceros es: " + contadorCeros + " ");
	document.write("<br>" + "La cantidad de numeros pares es: " + contadorPares + " ");
	document.write("<br>" + "El promedio de los numeros positivos es: " + promedioPositivos + " ");
	document.write("<br>" + "El promedio de los numeros negativos es: " + promedioNegativos + " ");
	document.write("<br>" + "Y la diferencia entre positivos y negativos es: " + diferenciaPositivosNegativos + " ");	
}//FIN DE LA FUNCIÓN

