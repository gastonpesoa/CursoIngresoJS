//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
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

	
	
		while(importe <= 0)
	
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


}







