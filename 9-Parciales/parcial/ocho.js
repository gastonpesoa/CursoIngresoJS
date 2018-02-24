/*
ingreso de alumnos, no sabemos cuantos alumons hay.
Se pide el nombre(del pizarron)
Saber cunatos alumnos ingrese
document.write("Se ingresaron tsantos alumnos(9)")
5-cantidad de varones desaprobados(1)
6-nombre de la mejor nota(maria) sacar maximo nombreMaximo = nombre a traves del valor de la nota
7-promedio de la nota de las mujeres
8-sexo del menor de edad - edad >0 && <100
9-promedio de las edades de los aprobados
10-cantidad de notasa pares
*/
function Mostrar()
{
	//defino variables
	var nombre;
	var nota;
	var sexo;
	var cantidadMujeres = 0;
	var cantidadHombres = 0;
	var cantidadHombresDesaprobados = 0;
	var notaMaxima;
	var nombreMaximo;
	var promedio;
	var sumaNotas = 0;
	var cantidad = 0;
	var seguir = "";


	while(seguir != "no")
	{
		nombre = prompt("Ingrese el nombre del alumno: ");
		nota = prompt("Ingrese la nota: ","0");
		nota = parseInt(nota);

		//valido nota
		while(nota < 0 || nota > 10 )
		{
			alert("Ingrese una nota entre 0 y 10");
			nota = prompt("Ingrese la nota: ","0");
			nota = parseInt(nota);
		}

		//sumo todas las notas y la cantidad q ingreso
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

		//cuento f y m
		if(sexo == "f")
		{
			cantidadMujeres++;
		}
		else
		{
			cantidadHombres++;
		}

		//cuento hombres desaprobados
		while(sexo == "m" && nota < 4)
		{
			cantidadHombresDesaprobados++;
		}	

		//encuentro nota maxima
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



		//ingresar otro alumno
		seguir = prompt("Ingrese 'no' para salir");

	}//while(seguir != "no")

	//promedio notas
	promedio = sumaNotas / cantidad;

	//muestro resultados
	document.write("Se ingresaron " + cantidad + " de alumnos");
	document.write("<br>" + "El promedio de las notas es: " + promedio);
	document.write("<br>" + "La cantidad de mujeres es: " + cantidadMujeres);
	document.write("<br>" + "La cantidad de hombres es: " + cantidadHombres);
	document.write("<br>" + "La cantidad de hombres aprobados es: " + cantidadHombresDesaprobados);
	document.write("<br>" + "El alumno con la mayor nota es: " + nombreMaximo);
}
