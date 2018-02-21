function Mostrar()

{
	var numeroRandom;
	var contador;
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
	var porcen0;
	var porcen1;
	var porcen2;
	var porcen3;
	var porcen4;
	var porcen5;
	var porcen6;
	var porcen7;
	var porcen8;
	var porcen9;
	var iteraciones = 1000;

	for(contador = 0; contador < iteraciones; contador++)
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
				porcen6 = (contador6 / (iteraciones)) * 100;
				//console.log(porcen6);
				if (porcen6 > 7) 
				{
					contador--;
					continue;
				}
				else
				{
					contador6++;
				}
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

	porcen0 = (contador0/(contador + 1))*100;
	porcen0 = Math.round(porcen0);
	document.write("Cantidad de 0: " + contador0 + " --- " + porcen0 + " %" + "<br>");

	porcen1 = (contador1/(contador + 1))*100;
	porcen1 = Math.round(porcen1);
	document.write("Cantidad de 1: " + contador1 + " --- " + porcen1 + " %" + "<br>");

	porcen2 = (contador2/(contador + 1))*100;
	porcen2 = Math.round(porcen2);
	document.write("Cantidad de 2: " + contador2 + " --- " + porcen2 + " %" + "<br>");

	porcen3 = (contador3/(contador + 1))*100;
	porcen3 = Math.round(porcen3);
	document.write("Cantidad de 3: " + contador3 + " --- " + porcen3 + " %" + "<br>");

	porcen4 = (contador4/(contador + 1))*100;
	porcen4 = Math.round(porcen4);
	document.write("Cantidad de 4: " + contador4 + " --- " + porcen4 + " %" + "<br>");

	porcen5 = (contador5/(contador + 1))*100;
	porcen5 = Math.round(porcen5);
	document.write("Cantidad de 5: " + contador5 + " --- " + porcen5 + " %" + "<br>");

	porcen6 = (contador6/(contador + 1))*100;
	porcen6 = Math.round(porcen6);
	document.write("Cantidad de 6: " + contador6 + " --- " + porcen6 + " %" + "<br>");

	porcen7 = (contador7/(contador + 1))*100;
	porcen7 = Math.round(porcen7);
	document.write("Cantidad de 7: " + contador7 + " --- " + porcen7 + " %" + "<br>");

	porcen8 = (contador8/(contador + 1))*100;
	porcen8 = Math.round(porcen8);
	document.write("Cantidad de 8: " + contador8 + " --- " + porcen8 + " %" + "<br>");

	porcen9 = (contador9/(contador + 1))*100;
	porcen9 = Math.round(porcen9);
	document.write("Cantidad de 9: " + contador9 + " --- " + porcen9 + " %" + "<br>");


}

		/*for(i = 1; i < 11; i++)
		{
			if (i == 1) 
			{
				contador++;
			}	
		}*/
		
	



/*	var i;
	
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
	}*/

