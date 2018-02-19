function Mostrar()

{

	
	var contador=0;
	// declarar variables

	var numUno;
	var numDos;
	var maximo;
	var minimo;	
	
	var respuesta = 'si';

	

	while(respuesta != 'no')
	
	{	
		
	
	
		numUno = prompt("Ingrese un numero","0");

		respuesta = prompt("¿Desea agregar otro numero?","si/no");

		contador++;

		numDos = prompt("Ingrese un numero","0");

		respuesta = prompt("¿Desea agregar otro numero?","si/no");

		contador++;

			while(numUno > numDos)
			{
				numUno = maximo;
				numDos = minimo;
			}
			while(numDos > numUno)
			{
				numDos = maximo;
				numUno = minimo;
			}
	
	}//while(respuesta != 'no')


	
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




























	/*
	var contador=0;
	// declarar variables

	
	var maximo;
	var minimo;	
	
	var respuesta='si';

	


	
	while(respuesta != 'no')
	
	{	
		
	
	
		var numeros;
		numeros = [];
	
		numeros[contador] = prompt("Ingrese un numero","0");
		
		respuesta = prompt("¿Desea agregar otro numero?","si/no");

		contador++;
	}

	console.log(numeros);
	
	function getMaxOfArray(numArray) 
	{
 		return Math.max.apply(null, numArray);
	}

	function getMinOfArray(numArray) 
	{
 		return Math.min.apply(null, numArray);
	}
	
	maximo = getMaxOfArray(numeros);
	minimo = getMinOfArray(numeros);

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
	*/







}//FIN DE LA FUNCIÓN