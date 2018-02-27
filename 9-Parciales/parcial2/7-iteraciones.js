//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.

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

	while (contador < 6)
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

//alert("Funciona 7-iteraciones");
	

}

