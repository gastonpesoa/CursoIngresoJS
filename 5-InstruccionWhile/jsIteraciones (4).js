function Mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while(numero < 0 || numero > 9)
	{
		alert("Vuelva a ingresar un numero valido");
		numero = prompt("ingrese un número entre 0 y 10.");
	}
	document.getElementById('Numero').value = numero;

}//FIN DE LA FUNCIÓN

/* 	0 || 0 = 0
	0 || 1 = 1
	1 || 0 = 1
	1 || 1 = 1 

	0 && 0 = 0
	0 && 1 = 0
	1 && 0 = 0
	1 && 1 = 1	*/