function Mostrar()

{
	var contador = 0;
	var acumulador = 0;

	var numero;	

	while(contador < 5)
	{
		numero = prompt("Ingrese un numero: ","0");
		
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		
		contador++;
	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/5;
}//FIN DE LA FUNCIÓN