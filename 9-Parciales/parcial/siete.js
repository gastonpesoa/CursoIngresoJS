/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y 
el sexo (validar el sexo “f” o “m”) de 100 alumnos, informar por alert: 

a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.

2 f
3 m
6 m
8 m
10 m


*/
function Mostrar()
{
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

}//function Mostrar()























































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