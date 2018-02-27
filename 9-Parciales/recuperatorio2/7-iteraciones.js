//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{//alert("Funciona 7-iteraciones");
	var nota;
	var sexo;
	var promedio;
	var notaMenor;

	//Defino contadores
	var contador = 0;
	var sumoNotas = 0;
	var contadorVaronesNotaMayor = 0;

	//Verifico cantidad
	while (contador < 6)
	{
		//Pido la nota
		nota = prompt("Ingrese la nota: ","0");
		nota = parseInt(nota);

		//Verifico la nota
		while (nota < 0 || nota > 10 || isNaN(nota))
		{
			nota = prompt("Vuelva a ingresar la nota, entre 0 y 10: ","0");
			nota = parseInt(nota);
		}

		//Sumo notas
		contador++;
		sumoNotas = sumoNotas + nota;

		//Pido el sexo
		sexo = prompt("Ingrese el sexo: ","f/m");

		//Verifico el sexo
		while (sexo !== "f" && sexo !== "m" || !isNaN(sexo))
		{
			sexo = prompt("Vuelva a ingresar el sexo, 'f' o 'm': ","f/m");
		}

		//Encuentro la nota menor
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

		//Sumo varones mayores o igual a 6
		if (sexo == "m" && nota >= 6) 
		{
			contadorVaronesNotaMayor++;
		}
	}//while (contador < 6)
	
	promedio = sumoNotas / contador;

	//Muestro datos
	//a) el promedio de nota. 
	alert("El promedio de las notas es: " + promedio);
	//b) la nota más baja. 
	alert("La nota más baja es: " + notaMenor);
	//c) la cantidad de varones que su nota sea mayor o igual a 6.
	alert("La cantidad de varones con nota mayor o igual a 6 es: " + contadorVaronesNotaMayor);

} 

