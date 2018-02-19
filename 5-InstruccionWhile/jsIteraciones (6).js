function Mostrar()
{

	var contador=0;
	var acumulador=0;

	while(contador < 5)
	{
		acumulador = prompt("Ingrese un numero: ","0");
		acumulador = parseInt(acumulador);
		acumulador = acumulador;
		contador++;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN