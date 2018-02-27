//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.

function Mostrar()

{

	//Defino variables.
	var numero;
	var respuesta = "";
	var promedio;
	var suma = 0;
	var numeroMaximo;
	var numeroMinimo;

	//Defino e inicio contadores.
	var contador = 0;
	var cantidadPares = 0;

	while (respuesta !== "no") 
	{
		//Ingreso el numero.
		numero = prompt("Ingrese un numero positivo: ","0");
		numero = parseInt(numero);

		while (numero < 0) 
		{
			alert("¡Ingrese un valor positivo!");
			numero = prompt("Ingrese un numero positivo: ","0");
			numero = parseInt(numero);
		}

		//c) Suma de todos los números. 
		suma = suma + numero;
		contador++;

		//a) Cuento los números pares. 
		if (numero % 2 == 0) 
		{
			cantidadPares++;			
		}

		//d) Número máximo y mínimo.
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
		}

		respuesta = prompt("¿Desea continuar?: ","si/no");
	}//while (respuesta !== "no") 

	//b) Promedio de todos los números ingresados. 
	promedio = suma / contador;

	//Muestro los datos.
	document.write("La cantidad de números pares es: " + cantidadPares);
	document.write("<br>" + "El promedio de todos los números ingresados es: " + promedio);
	document.write("<br>" + "La suma de todos los números es: " + suma);
	document.write("<br>" + "El número máximo es: " + numeroMaximo);
	document.write("<br>" + "El número minimo es: " + numeroMinimo);

//alert("Funciona 8-iteraciones");
	

}

