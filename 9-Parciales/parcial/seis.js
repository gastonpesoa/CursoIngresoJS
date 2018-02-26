function Mostrar()
{
	var importe;
	var importeMayor;
	var importeMenor;
	var dia = 0;

	while(dia < 24)
	{
		importe = prompt("Ingrese el importe","0");
		importe = parseInt(importe);
		dia++;

		while(importe < 1)
		{
			importe = prompt("Ingrese un valor mayor a 'cero': ","0");
			importe = parseInt(importe);
		}

		if (dia == 1) 
		{
			importeMayor = importe;
			importeMenor = importe;
		}
		else
		{
			if (importe > importeMayor) 
			{
				importeMayor = importe;
			}
			if (importe < importeMenor) 
			{
				importeMenor = importe;
			}
		}//if (dia == 1) 
		
	}//while(dia < 24)

	document.write("El importe mayor es: " + importeMayor);
	document.write("<br>" + "El importe menor es: " + importeMenor);
	


























































	/*var importe;
	var contadorDias = 0;

	while(contadorDias > 24)
	{
		importe = prompt("Ingrese el importe: ","0");
		importe = parseInt(importe);

		while(importe < 0)
		{
			alert("Ingrese un importe mayor a cero")
			importe = prompt("Ingrese el importe: ","0");
			importe = parseInt(importe);
		}

		if (importe == 1) 
		{
			maximo = importe;
			minimo = importe; 
		}
		else
		{
			if (importe > maximo)
			{
				maximo = importe;
			}
			if (importe < minimo) 
			{
				minimo = importe;
			}
		}
	}*/
	
}
/*var i;
	var array = [];

	for (i = 0; i < 24; i++)
	{
		array[i] = prompt("Ingrese el importe de las ventas del dia " + i);
	
		if(array[i] == 0)
		{
			alert("El importe debe ser mayor a 0");
			array[i] = prompt("Vuelva a ingresar el importe");
		}
	}

	console.log(array);

	array.sort(function(a, b){return a - b});

	document.getElementById("importeFinal").value = "El importe mayor es: " + 
	array[array.length - 1] + " y el menor es: " + array[0];

	console.log(array);*/

	/*var dia = 0;
	var importe;
	var maximo;
	var minimo;

	while(dia < 24)
	{
		importe = prompt("Ingrese el importe","0");
		importe = parseInt(importe);
		dia++;

		while(importe < 0)
		{
			alert("Por favor ingrese un numero mayor a ")
		}
			if (importe == 1) 
			{
				maximo = importe;
				minimo = importe; 
			}
			else
			{
				if (importe > maximo)
				{
					maximo = importe;
				}
				if (importe < minimo) 
				{
					minimo = importe;
				}
			}
			
	}

	document.write("El importe mayor es: " + maximo);
	document.write("<br>" + "El importe menor es: " + minimo);*/
