//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{//alert("Funciona 6-iteraciones");
	var importe;
	var menorImporte;
	var mayorImporte;

	var contador = 0;
	
	while (contador < 7)
	{
		importe = prompt("Ingrese el importe: ","0");
		importe = parseInt(importe);

		contador++;

		while (importe <= 0 || isNaN(importe))
		{
			importe = prompt("Ingrese un importe mayor a cero: ","0");
			importe = parseInt(importe);
		}

		if (contador == 1)
		{
			mayorImporte = importe;
			menorImporte = importe;
		}
		else
		{
			if (importe > mayorImporte) 
			{
				mayorImporte = importe; 
			}
			if (importe < menorImporte) 
			{
				menorImporte = importe;
			}
		}//if (contador == 1)
	}//while (contador < 10)

	document.write("El importe mayor fue: " + mayorImporte);
	document.write("<br>" + "El importe menor fue: " + menorImporte);
} 

