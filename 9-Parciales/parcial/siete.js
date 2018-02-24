function Mostrar()

{
	
	var nota;

	nota = prompt("Ingrese la nota: ","0");
	nota = parseInt(nota);

	while(nota < 0 || nota > 10 || nota == isNaN())
		{
			alert("Ingrese una nota entre 0 y 10");
			nota = prompt("Ingrese la nota: ","0");
			nota = parseInt(nota);
		}


}

/*var i;
	var nota = [];
	var sexo = [];
	var promedio;
	var notaMenor;

	for(i = 0; i < 3; i++)
	{
	    nota[i] = prompt("Ingrese la nota, entre 0 y 10 inclusive");

	    if(!(nota[i] >= 0 && nota[i] < 11))
	    {
		alert("La nota debe ser un valor entre 0 y 10");
		nota[i] = prompt("Vuelva a ingresar la nota");
	    }

	    sexo[i] = prompt("Ingrese el sexo. 'f' para femenino y 'm' para masculino");

	    if(!(sexo[i] == "f" || sexo[i] == "m"))
	    {
		alert("El sexo debe ser 'f' o 'm'");
		sexo[i] = prompt("Vuelva a ingresar el sexo");
	    }

	}

	console.log(nota);
	console.log(sexo);*/