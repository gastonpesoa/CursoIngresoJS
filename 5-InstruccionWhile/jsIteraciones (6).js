﻿function Mostrar()

{
	var contador = 0;
	var acumulador = 0;

	var numero;	
	var promedio;

	while(contador < 5)
	{
		numero = prompt("Ingrese un numero: ","0");
		numero = parseInt(numero);
		
		contador++;

		acumulador = acumulador + numero;
	}

	promedio = acumulador / 5;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;
}//FIN DE LA FUNCIÓN