function Mostrar()
{
	var i;
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

	console.log(array);


}
