/*
ingreso de alumnos, no sabemos cuantos alumons hay.
Se pide el nombre(del pizarron)
Saber cunatos alumnos ingrese
document.write("Se ingresaron tsantos alumnos(9)")
1-cantidad
2-promedio total
3-cantidad de mujeres(4)
4-cantidad hombres(5)
5-cantidad de varones desaprobados(1)
6-nombre de la mejor nota(maria) sacar maximo nombreMaximo = nombre a traves del valor de la nota
7-promedio de la nota de las mujeres
8-sexo del menor de edad - edad >0 && <100
9-promedio de las edades de los aprobados
10-cantidad de notasa pares
11-cantidad de notasa impares

1-maria ------ nota: 10 -- edad: 20
2-jose ------- nota: 0 --- edad: 30
3-gabriela --- nota: 2 --- edad: 40
4-martin ----- nota: 5 --- edad: 17
5-edi -------- nota: 6 --- edad: 30
6-axel ------- nota: 9 --- edad: 40
7-flor ------- nota: 0 --- edad: 25
8-lucas ------ nota: 4 --- edad: 33
9-lidia ------ nota: 7 --- edad: 37

*/
function Mostrar()
{
	//defino variables
	var nombre;
	var nota;
	var sexo;
	var edad;

	//contadores
	var cantidadMujeres = 0;
	var cantidadHombres = 0;
	var cantidadHombresDesaprobados = 0;
	var cantidadNotaMujeres = 0;
	var sumadorNotasMujeres = 0;
	var contadorEdadesAprobados = 0;
	var cantidadNotasPares = 0;
	var cantidadNotasImpares = 0;

	var notaMaxima;
	var nombreMaximo;

	var edadMinimo;
	var sexoEdadMinimo;

	var promedio;
	var promedioEdadAprobadas;
	var sumaEdadNotasAprobadas = 0;
	var sumaNotas = 0;
	var cantidad = 0;
	var seguir = "";


	while(seguir != "no")
	{
		nombre = prompt("Ingrese el nombre del alumno: ");
		nota = prompt("Ingrese la nota: ","0");
		nota = parseInt(nota);

		//valido nota
		while(nota < 0 || nota > 10)
		{
			alert("Ingrese una nota entre 0 y 10");
			nota = prompt("Ingrese la nota: ","0");
			nota = parseInt(nota);
		}

		//1-sumo todas las notas y la cantidad q ingreso
		sumaNotas = sumaNotas + nota; 
		cantidad++;

		//ingreso sexo
		sexo = prompt("Ingrese el sexo: ","f/m");

		//valido sexo
		while(sexo !== "f" && sexo !== "m")
		{
			alert("Debe ingresar 'f' o 'm'");
			sexo = prompt("Ingrese el sexo: ","f/m");
		}

		//ingreso edades
		edad = prompt("Ingrese la edad: ","0");
		edad = parseInt(edad);

		while(edad < 0 || edad > 100)
		{
			alert("Ingrese una edad entre 0 y 100")
			edad = prompt("Ingrese la edad: ","0");
			edad = parseInt(edad);
		}

		//3-4-cuento f y m
		if(sexo == "f")
		{
			cantidadMujeres++;
		}
		else
		{
			cantidadHombres++;
		}

		//5-cuento hombres desaprobados
		if (sexo == "m" && nota < 4)
		{
			cantidadHombresDesaprobados++;
		}	

		//6-encuentro nombre nota maxima
		if (cantidad == 1) 
		{
			notaMaxima = nota;
			nombreMaximo = nombre;
		}
		else
		{
			if (nota > notaMaxima)
			{
				notaMaxima = nota;
				nombreMaximo = nombre;
			}
		}

		//7-sumo nota mujeres
		if (sexo == "f") 
		{
			cantidadNotaMujeres++;
			sumadorNotasMujeres = sumadorNotasMujeres + nota;
		}

		//8-encuentro sexo minimo de edad
		if (cantidad == 1) 
		{
			edadMinimo = edad;
			sexoEdadMinimo = sexo;
		}
		else
		{
			if (edad < edadMinimo)
			{
				edadMinimo = edad;
				sexoEdadMinimo = sexo;
			}
		}

		//9-promedio edad notas aprobadas
		if (nota > 3) 
		{
			contadorEdadesAprobados++;
			sumaEdadNotasAprobadas = sumaEdadNotasAprobadas + edad;
		}

		//10-11-cantidad notas pares y impares
		if (nota % 2 == 0 && nota != 0) 
		{
			cantidadNotasPares++;
		}
		else
		{
			if (nota != 0)
			{
				cantidadNotasImpares++;
			}
		}

		//ingresar otro alumno
		seguir = prompt("Ingrese 'no' para salir");

	}//while(seguir != "no")

	//promedio notas
	promedio = sumaNotas / cantidad;
	promedioEdadAprobadas = sumaEdadNotasAprobadas / contadorEdadesAprobados;

	//muestro resultados
	//1
	document.write("Se ingresaron " + cantidad + " de alumnos");
	//2
	document.write("<br>" + "El promedio de las notas es: " + promedio);
	//3
	document.write("<br>" + "La cantidad de mujeres es: " + cantidadMujeres);
	//4
	document.write("<br>" + "La cantidad de hombres es: " + cantidadHombres);
	//5
	document.write("<br>" + "La cantidad de hombres aprobados es: " + cantidadHombresDesaprobados);
	//6
	document.write("<br>" + "El alumno con la mayor nota es: " + nombreMaximo);
	//7
	document.write("<br>" + "La suma de la nota de las mujeres es: " + sumadorNotasMujeres);
	//8
	document.write("<br>" + "El sexso del menor de edad es: " + sexoEdadMinimo);
	//9
	document.write("<br>" + "El promedio de las edades de los aprobados es: " + promedioEdadAprobadas);
	//10
	document.write("<br>" + "La cantidad de notas pares es: " + cantidadNotasPares);
	//11
	document.write("<br>" + "La cantidad de notas pares es: " + cantidadNotasImpares);
}
