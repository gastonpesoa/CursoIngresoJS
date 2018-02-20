function Mostrar()

{
	var numeroRandom;
	var contador0 = 0;
	var contador1 = 0;
	var contador2 = 0;
	var contador3 = 0;
	var contador4 = 0;
	var contador5 = 0;
	var contador6 = 0;
	var contador7 = 0;
	var contador8 = 0;
	var contador9 = 0;

	for(i = 0; i < 100; i++)
	{
		numeroRandom = Math.floor(Math.random() * 10);
		//document.write(numeroRandom);
		switch(numeroRandom)
		{
			case 0:
				contador0++;
				break;
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				contador6++;
				break;
			case 7:
				contador7++;
				break;	
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;				
		}
	}//for(i = 0; i < 100; i++)

	document.write("0: " + contador0 + "<br>");
	document.write("1: " + contador1 + "<br>");
	document.write("2: " + contador2 + "<br>");
	document.write("3: " + contador3 + "<br>");
	document.write("4: " + contador4 + "<br>");
	document.write("5: " + contador5 + "<br>");
	document.write("6: " + contador6 + "<br>");
	document.write("7: " + contador7 + "<br>");
	document.write("8: " + contador8 + "<br>");
	document.write("9: " + contador9 + "<br>");
}

		/*for(i = 1; i < 11; i++)
		{
			if (i == 1) 
			{
				contador++;
			}	
		}*/
		
	



/*
	var i;
	
	for(i = 1; i < 11; i++)
	{
		document.write("break " + i + "<br>");
	}

i es index, indice. viende de los arrays
for(contador = 0; contador < 10; contador++)
{
	
}

var i = 0;

	for(; ;)
	{
		i++;
		document.write("El numero es " + i + "<br>");

		if (i == 10) 
		{
			break;
			document.write("break " + i + "<br>");
		}	
		if (i == 5) 
		{
			continue;
		}
		document.write("break" + i + "<br>");
	}

*/