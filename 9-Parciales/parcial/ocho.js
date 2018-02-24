/*
ingreso de alumnos, no sabemos cuantos alumons hay.
Se pide el nombre(del pizarron)
Saber cunatos alumnos ingrese
document.write("Se ingresaron tsantos alumnos(9)")
*/
function Mostrar()
{
	var nombre;
	var nota;
	var promedio;
	var sumaNotas = 0;
	var cantidad = 0;
	var seguir = "";

	while(seguir != "no")
	{
		nombre = prompt("Ingrese el nombre del alumno: ");
		nota = prompt("Ingrese la nota: ","0");
		nota = parseInt(nota);

		while(nota < 0 || nota > 10 )
		{
			alert("Ingrese una nota entre 0 y 10");
			nota = prompt("Ingrese la nota: ","0");
			nota = parseInt(nota);
		}

		sumaNotas = sumaNotas + nota; 
		cantidad++;
		
		seguir = prompt("Ingrese 'no' para salir");
	}

	promedio = sumaNotas / cantidad;

	document.write("Se ingresaron " + cantidad + " de alumnos");
	document.write("<br>" + "El promedio de las notas es: " + promedio);
}
