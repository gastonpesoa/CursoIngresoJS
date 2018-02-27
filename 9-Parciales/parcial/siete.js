/*
se ingresan dos datos una 1ro letra y 2do un numero
los numeros entre -50 y +50, validar

inform
1-promedio de num positivos
2-cantidad de num impares
3-suma de  todos los numer cuya letra halla sido una vocal
4-num max y la letra con la que se ingreso

*/
function Mostrar()
{
	//defino variables
	var letra;
	var numero;
	var promedio;
	var numeroMaximo;
	var letraMaxima;
	var respuesta = "";

	//defino e inicio contadores
	var sumaPositivos = 0;
	var contador = 0;
	var cantidadPositivos = 0;
	var cantidadImpares = 0;
	var sumaNumerosLetraVocal = 0;

	//valido respuesta
	while (respuesta !== "no")
	{
		//tomo la letra
		letra = prompt("Ingrese una letra: ");

		//valido letra
		while (!isNaN(letra))
		{
			letra = prompt("Vuelva a ingrese una letra: ");
		}

		//tomo el numero
		numero = prompt("Ingrese un numero entre -50 y 50","0");
		numero = parseInt(numero);

		//valido el numero
		while (numero < -50 || numero > 50 || isNaN(numero))
		{
			numero = prompt("Vuelva a ingresar un valor entre -50 y 50: ","0");
		}

		//cuento y sumo los numeros
		contador++;

		//cantidad y promedio de pares
		if (numero > 0) 
		{
			cantidadPositivos++;
			sumaPositivos = sumaPositivos + numero;
		}

		//cantidad de impares
		if (numero % 2 !== 0) 
		{
			cantidadImpares++;
		}
		
		//suma de numeros con letra vocal
		if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") 
		{
			sumaNumerosLetraVocal = sumaNumerosLetraVocal + numero;
		}

		//encuentro numero maximo y su letra
		if (contador == 1) 
		{
			numeroMaximo = numero;
			letraMaxima = letra;
		}
		else 
		{
			if (numero > numeroMaximo) 
			{
				numeroMaximo = numero;
				letraMaxima = letra;
			}
		}//if (contador == 1) 

		//continuo?
		respuesta = prompt("¿Desea continuar?");
	}//while (respuesta !== "no")
	
	//calcula promedio
	promedio = sumaPositivos / cantidadPositivos;

	//Muestro datos
	//1-promedio de num positivos
	document.write("El promedio de numeros positivos es: " + promedio);
	//2-cantidad de num impares
	document.write("<br>" + "La cantidad de numeros impares es: " + cantidadImpares);
	//3-suma de  todos los numer cuya letra halla sido una vocal
	document.write("<br>" + "La suma de  todos los numer cuya letra es sido una vocal es: " + sumaNumerosLetraVocal);
	//4-num max y la letra con la que se ingreso
	document.write("<br>" + "El numero maximo es: " + numeroMaximo + " y la letra con la que se ingreso es: " + letraMaxima);

}//function Mostrar()


/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y 
el sexo (validar el sexo “f” o “m”) de 100 alumnos, informar por alert: 

a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.

2 f
3 m
6 m
8 m
10 m

//Defino variables
	var nota;
	var sexo;
	var promedio;
	var notaMenor;

	//Defino e inicio contadores
	var contador = 0;
	var sumaNotas = 0;
	var cantidadNotaVarones = 0;

	while (contador < 100)
	{	
		//Ingreso la nota
		nota = prompt("Ingrese la nota: ","0");
		nota = parseInt(nota);

		sumaNotas = sumaNotas + nota;
		contador++;

		//Validacion de nota
		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			alert("Ingrese una nota entre 0 y 10");
			nota = prompt("Ingrese la nota: ","0");
			nota = parseInt(nota);
		}

		//Ingreso el sexo
		sexo = prompt("Ingrese el sexo: ","f/m");

		//Validacion de sexo
		while (sexo !== "f" && sexo !== "m" || !isNaN(sexo))
		{
			alert("Ingrese f o m");
			sexo = prompt("Ingrese el sexo: ","f/m");
		}

		//Nota mas baja
		if (contador == 1) 
		{
			notaMenor = nota;
		}
		else 
		{
			if (nota < notaMenor) 
			{
				notaMenor = nota;
			}
		}//if (contador == 1) 

		//Cantidad de varones con nota mayor o igual a 6.
		if (nota > 5 && sexo == "m") 
		{
			cantidadNotaVarones++;
		}

	}//while (contador < 10)

	promedio = sumaNotas / contador;

	//Muestro los datos
	document.write("El promedio de las notas totales es: " + promedio);
	document.write("<br>" + "La nota más baja es: " + notaMenor);
	document.write("<br>" + "La cantidad de varones con nota mayor o igual a 6 es: " + cantidadNotaVarones);
*/




















































/*var nota;

	nota = prompt("Ingrese la nota: ","0");
	nota = parseInt(nota);

	while(nota < 0 || nota > 10 || nota == isNaN())
		{
			alert("Ingrese una nota entre 0 y 10");
			nota = prompt("Ingrese la nota: ","0");
			nota = parseInt(nota);
		}*/

/*var i;
	var nota = [];
	var sexo = [];
	var promedio;
	var notaMenor;

	for(i = 0; i < 3; i++)
	{
	    nota[i] = prompt("Ingrese la nota, entre 0 y 10 inclusive");

	    if(!(nota[i] >= 0 && nota[i] < 11))
	    {
		alert("La nota debe ser un valor entre 0 y 10");
		nota[i] = prompt("Vuelva a ingresar la nota");
	    }

	    sexo[i] = prompt("Ingrese el sexo. 'f' para femenino y 'm' para masculino");

	    if(!(sexo[i] == "f" || sexo[i] == "m"))
	    {
		alert("El sexo debe ser 'f' o 'm'");
		sexo[i] = prompt("Vuelva a ingresar el sexo");
	    }

	}

	console.log(nota);
	console.log(sexo);*/