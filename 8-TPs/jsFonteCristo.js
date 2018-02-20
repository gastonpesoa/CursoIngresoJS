/*El departamento de NUMEROS ESPECIALES  del instituto matemático  
FonteCristo  nos está pidiendo una aplicación que verifique las distintas 
cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar 
las cualidades pedidas:

a.	Se pedirán un número positivo y se mostrará la cantidad de números pares 
desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares 
desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números 
divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número 
primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números 
Primos desde el número ingresado hasta el cero.
*/

function ComenzarIngreso () 
{
 	
}

function NumerosPares()
{
	var numero;
	var contador = 0;
	var i;

	numero = document.getElementById('numero').value;
	numero = parseInt(numero);

	for(i = numero; i > 0; i--)
	{
		if (i%2 == 0) 
		{
			contador = contador + 1;
		}
	}
	alert("La cantidad de numeros pares desde el numero ingresado hasta el cero es: " + contador);
}

function NumerosImpares()
{
	var numero;
	var contador = 0;
	var i;

	numero = document.getElementById('numero').value;
	numero = parseInt(numero);

	for(i = numero; i > 0; i--)
	{
		if (i%2 !== 0) 
		{
			contador = contador + 1;
		}
	}
	alert("La cantidad de numeros impares desde el numero ingresado hasta el cero es: " + contador);
}

function NumerosDivisibles()
{
	var numero;
	var contador = 0;
	var i;

	numero = document.getElementById('numero').value;
	numero = parseInt(numero);

	for(i = 1; i < 101; i++)
	{
		if (i%numero == 0) 
		{
			contador = contador + 1;
		}
	}
	alert("La cantidad de numeros divisibles, por el numero ingresado, desde el 1 hasta el 100 es: " + contador);
}

function VerificarPrimo()
{
	var i;
	var numero;

	numero = document.getElementById('numero').value;
	numero = parseInt(numero);

	for(i = 1; i < numero; i++)
	{
		if (numero / i == Math.round(numero / i) && i != 1 && i != numero) 
		{
			alert("Numero no primo");
			break;
		}
			else
		{
			alert("Numero primo");
			break;
		}
	
	}

}

function NumerosPrimos()
{

}
