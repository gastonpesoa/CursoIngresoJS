//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
pedir 
1-nombre de un animal
2-peso del animal - validar > 0
3-temperatura del habitat en donde vive entre > -40 y < 40

informar
1-cantidad de temp pares ingresadas
2-cantidad de temp impares
3-nombre del animal mas pesado
4-nombre del animal menos pesado
5-cantidad de aniomales cuyo habitat tenga menos de 0 grados
6-promedio de peso de todos los animales
7- temp maxima y minima
*/
function Mostrar()
{
	//variables
	var nombre;
	var peso;
	var temperatura;

	var respuesta = "";

	var masPesado;
	var menosPesado;
	var nombreMasPesado;
	var nombreMenosPesado;

	var temperaturaMaxima;
	var temperaturaMinima;

	var promedio;
	var suma = 0;

	//contadores
	var contador = 0;
	var cantidadTemperaturasPares = 0;
	var cantidadTemperaturasImpares = 0;
	var cantidadAnimalesHabitatsMenoresACero = 0;

	//inicio y respuesta
	while (respuesta != "no")
	{
		//ingreso nombre
		nombre = prompt("Ingrese el nombre del animal","");
		contador++;

		//ingreso peso
		peso = prompt("Ingrese el peso del animal: ","Mayor a cero.");
		peso = parseInt(peso);

		//valido peso
		while (peso < 0 || isNaN(peso))
		{
			peso = prompt("Vuelva a ingresar el peso del animal: ","Mayor a cero.");
			peso = parseInt(peso);
		}

		//ingreso temperatura
		temperatura = prompt("Ingrese la temperatura del habitat del animal: ","Entre -40 y 40 grados.")
		temperatura = parseInt(temperatura);

		//valido temperatura
		while (temperatura < -40 || temperatura > 40 || isNaN(temperatura))
		{
			temperatura = prompt("Vuelva a ingresar la temperatura del habitat del animal: ","Entre -40 y 40 grados.")
			temperatura = parseInt(temperatura);
		}

		//cantidad de temperaturas pares
		if (temperatura % 2 == 0 && temperatura != 0) 
		{
			cantidadTemperaturasPares++;
		}

		//cantidad de temperaturas impares
		if (temperatura % 2 != 0 && temperatura != 0) 
		{
			cantidadTemperaturasImpares++;
		}

		//animal mas pesado y menos pesado
		if (contador == 1) 
		{
			masPesado = peso;
			nombreMasPesado = nombre;
			menosPesado = peso;
			nombreMenosPesado = nombre;
		}
		else
		{
			if (peso > masPesado) 
			{
				masPesado = peso;
				nombreMasPesado = nombre;
			}
			if (peso < menosPesado) 
			{
				menosPesado = peso;
				nombreMenosPesado = nombre;
			}
		}//if (contador == 1) 

		//cantidad de temperaturas menor a cero
		if (temperatura < 0) 
		{
			cantidadAnimalesHabitatsMenoresACero++;
		}

		//suma de pesos
		suma = suma + peso;

		//temperatura maxima y minima
		if (contador == 1) 
		{
			temperaturaMaxima = temperatura;
			temperaturaMinima = temperatura;
		}
		else 
		{
			if (temperatura > temperaturaMaxima) 
			{
				temperaturaMaxima = temperatura
			}
			if (temperatura < temperaturaMinima) 
			{
				temperaturaMinima = temperatura;
			}
		}//if (contador == 1) 

		respuesta = prompt("¿Desea continuar?","Enter para si/'no' para parar");
	}

	//promedio
	promedio = suma / contador;

	//muestro datos
	document.write("La cantidad de temperaturas pares ingresadas es: " + cantidadTemperaturasPares);
	document.write("<br>" + "La cantidad de temperaturas impares ingresadas es: " + cantidadTemperaturasImpares);
	document.write("<br>" + "El nombre del animal mas pesado es: " + nombreMasPesado);
	document.write("<br>" + "El nombre del animal menos pesado es: " + nombreMenosPesado);
	document.write("<br>" + "La cantidad de animales con habitats menores a cero grados es: " + cantidadAnimalesHabitatsMenoresACero);
	document.write("<br>" + "El promedio de los pesos de los animales es: " + promedio);
	document.write("<br>" + "La temperatura maxima es: " + temperaturaMaxima);
	document.write("<br>" + "La temperatura minima es: " + temperaturaMinima);
}	


/*//Defino variables.
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

//alert("Funciona 8-iteraciones");*/