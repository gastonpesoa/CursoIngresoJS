//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var respuesta = "";
	var promedio;
	var numeroMaximo;
	var numeroMinimo;

	//defino contadores
	var contador = 0;
	var suma = 0;
	var cantidadPares = 0;

	//inicio y valido respuesta
	while (respuesta != "no")
	{
		numero = prompt("Ingrese un numero: ","0");
		numero = parseInt(numero);

		//valido numero positivo 
		while (numero < 0 || isNaN(numero))
		{
			numero = prompt("Ingrese un numero: ","0");
			numero = parseInt(numero);
		}

		//cuento y sumo
		contador++;
		suma = suma + numero;

		//cantidad de numeros pares
		if (numero % 2 == 0) 
		{
			cantidadPares++;
		}

		//encuentro maximo y minimo
		if (contador == 1) 
		{
			numeroMaximo = numero;
			numeroMinimo = numero;
		}
		else 
		{
			if (numero > numeroMaximo) 
			{
				numeroMaximo = numero;
			}	
			if (numero < numeroMinimo) 
			{
				numeroMinimo = numero;
			}
		}//if (contador == 1) 

		//continuar?
		respuesta = prompt("¿Desea continuar?","enter/no");

	}//while (respuesta != "no")

	//calculo promedio
	promedio = suma / contador;

	//a) la cantidad de números pares. 
	document.write("La cantidad de numeros pares es: " + cantidadPares);
	//b) el promedio de todos los números ingresados. 
	document.write("<br>" + "El promedio de todos los números ingresados es: " + promedio);
	//c) la suma de todos los números. 
	document.write("<br>" + "La suma de todos los números ingresados es: " + suma);
	//d) El número máximo y el mínimo.
	document.write("<br>" + "El numero maximo es: " + numeroMaximo);
	document.write("<br>" + "El numero minimo es: " + numeroMinimo);

	
}

