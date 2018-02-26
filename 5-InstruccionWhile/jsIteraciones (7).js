
function Mostrar()

{
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';

	var numero;
	var promedio;
	
	while(respuesta == 'si')
	{
		numero = prompt("Ingrese un numero","0");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("¿Desea continuar la suma?:","si/no");
	}

	promedio = acumulador/contador;
	
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;
}//FIN DE LA FUNCIÓN
