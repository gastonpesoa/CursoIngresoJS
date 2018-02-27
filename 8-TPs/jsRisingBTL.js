/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:

A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//defino variables
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;

 	//ingreso la edad
 	edad = prompt("Ingrse la edad: ","Entre 18 y 90 años");
 	edad = parseInt(edad);

 	//valido la edad
 	while (edad < 18 || edad > 90 || isNaN(edad))
 	{	
 		edad = prompt("Vuelva a ingresar la edad: ","Entre 18 y 90 años");
 		edad = parseInt(edad);
 	}

 	//ingreso el sexo
 	sexo = prompt("Ingrese el sexo: ","F/M");

 	//valido sexo
 	while (sexo != "F" && sexo != "M" || !isNaN(sexo))
 	{
 		sexo = prompt("Vuelva a ingresar el sexo: ","F/M");	
 	}

 	//ingreso numero de estado civil
 	estadoCivil = prompt("Ingrese el estado civil","1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	estadoCivil = parseInt(estadoCivil);

 	//valido estado civil
 	while (estadoCivil < 1 || estadoCivil > 4 || isNaN(estadoCivil))
 	{
 		estadoCivil = prompt("Vuelva a ingresar el estado civil","1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 		estadoCivil = parseInt(estadoCivil);
 	}

 	//ingreso el sueldo bruto
 	sueldoBruto = prompt("Ingrse el sueldo bruto: ","Mayor a $8000");
 	sueldoBruto = parseInt(sueldoBruto);

 	//valido el sueldo bruto
 	while (sueldoBruto < 8000 || isNaN(sueldoBruto))
 	{	
 		sueldoBruto = prompt("Vuelva a ingresar el sueldo bruto: ","Mayor a $8000");
 		sueldoBruto = parseInt(sueldoBruto);
 	}

 	//ingreso numero de legajo
 	legajo = prompt("Ingrese el numero de legajo: ","4 cifras sin ceros a la izquierda");
 	legajo = parseInt(legajo);

 	//valido legajo
 	while (legajo < 1000 || legajo > 9999 || isNaN(legajo)) 
 	{
 		legajo = prompt("Vuelva a ingresar el numero de legajo: ","4 cifras sin ceros a la izquierda");
 		legajo = parseInt(legajo);
 	}

 	//ingreso la nacionalidad
 	nacionalidad = prompt("Ingrese la nacionalidad: ","'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados");

 	//valido nacionalidad
 	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N" || !isNaN(nacionalidad))
 	{
 		nacionalidad = prompt("Vuelva a ingresar la nacionalidad: ","'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados");
 	}

 	//asigno estado civil al numero ingresado
 	switch (estadoCivil) 
 	{
 		case 1 :
 			estadoCivil = "Soltero";
 			break;
 		case 2 :
 			estadoCivil = "Casado";
 			break;
 		case 3 :
 			estadoCivil = "Divorciado";
 			break;
 		case 4 :
 			estadoCivil = "Viudo";
 			break;
 	}//switch (estadoCivil) 

 	//muestro resultados
 	document.getElementById('Edad').value = edad;
 	document.getElementById('Sexo').value = sexo;
 	document.getElementById('EstadoCivil').value = estadoCivil;
 	document.getElementById('Sueldo').value = sueldoBruto;
 	document.getElementById('Legajo').value = legajo;
 	document.getElementById('Nacionalidad').value = nacionalidad;

}//function ComenzarIngreso () 
