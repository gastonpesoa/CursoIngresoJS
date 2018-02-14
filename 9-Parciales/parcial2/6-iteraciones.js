//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var i;
	var dia = [];

	for(i = 0; i < 7; i++)
	{
		dia[i] = prompt("Ingrese el importe: ");

		if(dia[i] == 0)
		{
			alert("El valor no debe ser igual a 0");
			dia[i] = prompt("Vuelva a ingresarlo");
		}
		
	}

	dia.sort(function(a, b){return a - b});

	alert("El mayor importe fue :" + dia[dia.length - 1] + 
	" y el menor: " + dia[0]);

	console.log(dia);
	
}

