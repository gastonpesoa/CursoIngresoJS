/*Realizar el algoritmo que permita el ingreso por prompt de 
edades (validar entre 0 y 100) y 
el sexo (validar el sexo “f” o “m”) de 100 personas, informar por alert: 

a) el promedio de edad. 
b) la edad más baja. 
c) la cantidad de varones que su edad sea mayor o igual a 20.*/

function Mostrar()
{
	//Defino variables
	var edad;
	var sexo;
	var promedio;
	var edadMenor;

	//Defino contadores
	var contador = 0;
	var sumaEdades = 0;
	var contadorVaronesEdadMayor = 0;

	//Verifico cantidad
	while (contador < 10)
	{
		//Pido la edad
		edad = prompt("Ingrese la edad: ","0");
		edad = parseInt(edad);

		//Verifico la edad
		while (edad < 0 || edad > 100 || isNaN(edad))
		{
			edad = prompt("Vuelva a ingresar la edad, entre 0 y 100: ","0");
			edad = parseInt(edad);
		}

		//Sumo edades
		contador++;
		sumaEdades = sumaEdades + edad;

		//Pido el sexo
		sexo = prompt("Ingrese el sexo: ","f/m");

		//Verifico el sexo
		while (sexo !== "f" && sexo !== "m" || !isNaN(sexo))
		{
			sexo = prompt("Vuelva a ingresar el sexo, 'f' o 'm': ","f/m");
		}

		//Encuentro la edad menor
		if (contador == 1) 
		{
			edadMenor = edad;
		}
		else 
		{
			if (edad < edadMenor) 
			{
				edadMenor = edad;
			}
		}//if (contador == 1) 

		//Sumo varones mayores o igual a 20
		if (sexo == "m" && edad >= 20) 
		{
			contadorVaronesEdadMayor++;
		}
	}//while (contador < 100)
	
	promedio = sumaEdades / contador;

	//Muestro datos
	//a) el promedio de edad. 
	alert("El promedio de edades es: " + promedio);
	//b) la edad más baja. 
	alert("La edad más baja es: " + edadMenor);
	//c) la cantidad de varones que su edad sea mayor o igual a 20.
	alert("La cantidad de varones con edad mayor o igual a 20 es: " + contadorVaronesEdadMayor);
}
