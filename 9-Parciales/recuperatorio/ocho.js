/*Realizar el algoritmo que permita ingresar números positivos 
(validar que sea positivo) hasta que el usuario quiera e 
informar al terminar el ingreso por document.write: 

a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo.*/
function Mostrar()
{
	//defino variables
	var numero;
	var respuesta = "";
	var promedio;
	var suma;
	var numeroMaximo;
	var numeroMinimo;

	//defino contadores
	var contador = 0;
	var cantidadPares = 0;

	//inicio y valido respuesta
	while (respuesta != "no")
	{
		numero = prompt("Ingrese un numero: ","0");
		numero = parseInt(numero);

		//valido numero positivo 
		while (numero < 0 || isNaN(numero))
		{
			numero = prompt("Ingrese un numero: ","0");
			numero = parseInt(numero);
		}

		//cuento y sumo
		contador++;
		suma = suma + numero;

		//
	}

}
