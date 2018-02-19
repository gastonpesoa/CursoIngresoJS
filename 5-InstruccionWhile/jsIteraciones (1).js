function Mostrar()
{
	var contador;
	contador = 0;

	while(contador < 10)
	{
		contador++;
		document.write("<br>" + contador);
	}

}//FIN DE LA FUNCIÓN
/*
si cambio de lugar el contador cuenta antes o despues del write
sin importar lo q halla q hacer  hay q: 
1- iniciar el contador en cero 
2- asignar la condicion siempre con < (cantidad de veces al lado de <)
3- la primer linea es el contador
contador++//contador = contador + 1;
*/

