function Mostrar()
{
	var peso;
	var menosPesado;
	var masPesado;

	var contador = 0;
	
	while (contador < 50)
	{
		peso = prompt("Ingrese el peso en kilos: ","0");
		peso = parseInt(peso);

		contador++;

		while (peso <= 0)
		{
			peso = prompt("Ingrese un peso mayor a cero kilos: ","0");
			peso = parseInt(peso);
		}

		if (contador == 1)
		{
			masPesado = peso;
			menosPesado = peso;
		}
		else
		{
			if (peso > masPesado) 
			{
				masPesado = peso; 
			}
			if (peso < menosPesado) 
			{
				menosPesado = peso;
			}
		}//if (contador == 1)
	}//while (contador < 10)

	document.write("El contenedor mas pesado pesa " + masPesado + " kg.");
	document.write("<br>" + "El contenedor menos pesado pesa " + menosPesado + " kg.");

}//function Mostrar()
