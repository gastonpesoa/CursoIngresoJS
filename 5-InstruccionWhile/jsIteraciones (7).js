
function Mostrar()

{
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	
	while(respuesta == 'si')
	{
		var numero;

		numero = prompt("Ingrese un numero","0");

		numero = parseInt(numero);

		acumulador = acumulador + numero;

		respuesta = prompt("¿Desea continuar la suma?:","si/no");

		contador++;
	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/contador;
}//FIN DE LA FUNCIÓN
