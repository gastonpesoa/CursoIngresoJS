function Mostrar()
{
	var importe;
	var contadorDias = 0;

	while(contadorDias > 24)
	{
		importe = prompt("Ingrese el importe: ","0");
	}
	
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
