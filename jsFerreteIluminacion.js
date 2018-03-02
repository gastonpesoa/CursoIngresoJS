/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 
pesos final.

A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es 
del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra 
marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 
10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

 function CalcularPrecio () 
{
	var cantidad;
	var marca;
	var precioUni;
	var precioFinal;
	var descuento;
	var iibb;

	cantidad = document.getElementById('Cantidad').value;
	marca = document.getElementById('Marca').value;

	precioUni = cantidad * 35;

	if (cantidad > 5)
	{
		descuento = 0.5;
	}
	else 
	{
		if (cantidad == 5)
		{
			if (marca == "ArgentinaLuz")
			{
				descuento = 0.4;		
			}
			else 
			{
				descuento = 0.3;	
			}//if (marca == "ArgentinaLuz")
		}
		else
		{
			if(cantidad == 4)
			{
				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
				{
					descuento = 0.25;
				}
				else
				{
					descuento = 0.20;
				}//if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
			}//if(cantidad == 4)
			else
			{
				if (cantidad == 3)
				{
					if (marca == "ArgentinaLuz")
					{
					 	descuento = 0.15;
					}
					if (marca == "FelipeLamparas")
					{
						descuento = 0.10;
					}
					else
					{
						descuento = 0.05;
					}//if (marca == "ArgentinaLuz")
				}//if (cantidad == 3)
			}//if(cantidad == 4)
		}//if (cantidad == 5)
	}//if (cantidad > 5)
	
	precioFinal = precioUni - (precioUni * descuento);

	if (precioFinal > 120)
	{	
		iibb =  precioFinal * 0.1;
		precioFinal = precioFinal + iibb;
		alert("Usted pago " + iibb + " de IIBB.");
	}

	document.getElementById('precioDescuento').value = precioFinal;
}






















/*
	//lo que cambia es el porcentaje

	var cantidad;
	var marca;
	var precioFinal;
	var precioUni;
	var precioBruto;
	var porcentajeDesc;
	var iibb;

	cantidad = document.getElementById('Cantidad').value;
	marca = document.getElementById('Marca').value;
	precioUni = 35;
	precioBruto = cantidad * precioUni;
	porcentajeDesc = 0;

	if (cantidad > 5) 
	{
		porcentajeDesc = 0.5;
	}
	else
	{
		if (cantidad == 5) 
		{
			if (marca == "ArgentinaLuz") 
			{
				porcentajeDesc = 0.4;
			}
			else
			{
				porcentajeDesc = 0.3;
			}
		}
		else
		{
			if (cantidad == 4) 
			{
				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
				{
					porcentajeDesc = 0.25;
				}
				else
				{
					porcentajeDesc = 0.2;
				}
				else
				{
					if (marca != "ArgentinaLuz" ) 
					{

					}
				}
			}
		}
	}//if (cantidad > 5) 

	precioFinal = precioBruto - (precioBruto * porcentajeDesc);
	
	if (precioFinal > 120) 
	{
		iibb = precioFinal * 0.1;
		precioFinal = precioFinal + iibb;		
		alert("Usted pago " + iibb " de IIBB.")
	}

	document.getElementById("precioDescuento").value = precioFinal;


//con switch
	switch(cantidad)
	{
		case 1:
		case 2:
			porcentajeDesc = 0;
			break;
		case 3:
			
			switch(marca)
			{
				case "ArgentinaLuz"	:
				porcetnae = x;
				break;
				case "Felipe":
				porcetnae = x;
				break;
			}

			
		//copio pego if cantidad 3
			break;
		case 4:
		
		switch(marca)
		{
			case "Argentin":
			case "Feilp":
				porcenta
				break;
			default:
				porcentajeDes 0.2;
				break;
		}


		
		//copio pego if cantidad 4
		break;
		case 5:

			
			switch(marca)
			if (cantidad == 5) 
			{
			if (marca == "ArgentinaLuz") 
			{
				porcentajeDesc = 0.4;
			}
			else
			{
				porcentajeDesc = 0.3;
			}
		}
		break;
		case 6:

	}


	var precio;
	var precioDescuento; 
	
	cantidad = parseInt(cantidad);
	marca = document.getElementById('Marca').value;
	precio = cantidad * 35;

	switch(cantidad)
	{
		default:

	}


	
	var cantidad;
	var marca;
	var precio;
	var precioDescuento; 
	var impuesto;
	
	cantidad = document.getElementById('Cantidad').value;
	marca = document.getElementById('Marca').value;
	precio = cantidad * 35;
	
	cantidad = parseInt(cantidad);
	
	//A

	if(cantidad > 5)
	{
	   precioDescuento = precio;
	}
	else 
	{
	   precioDescuento = precio * 1.5;
	}
	
	//B

	if(cantidad == 5 && marca == "ArgentinaLuz")
	{
	   precioDescuento = precio - (precio * 0.4);
	}
	if(cantidad == 5 && marca != "ArgentinaLuz")
	{
	   precioDescuento = precio * 1.3;
	}

	//C

	if(cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
	{
	   precioDescuento = precio * 1.25;
	}
	if(cantidad == 4 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas"))
	{
	   precioDescuento = precio * 1.2;
	}
	
	//D

	if(cantidad == 3 && marca == "ArgentinaLuz")	
	{
	   precioDescuento = precio - (precio * 0.15);
	}
	if(cantidad == 3 && marca == "FelipeLamparas")
	{
 	   precioDescuento = precio - (precio * 0.10);
	}
	if(cantidad == 3 && (marca != "ArgentinaLuz" || marca != "FelipeLamparas"))
	{
	   precioDescuento = precio * 1.05;
	}

	//E

	if(precioDescuento > 120)
	{
	   var impuesto = precioDescuento * 1.1;
	   precioDescuento = impuesto;
	   alert(”Usted pago " + impuesto + " de IIBB.”);
	}

	document.getElementById('precioDescuento').value = precioDescuento;
*/




































