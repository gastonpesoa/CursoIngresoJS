function Mostrar()

{
	var mes;
	
	mes = prompt("Ingrese un mes: ");

	switch (mes)
	{
		case "enero" :
			alert("comienza el año");
			break;
		case "febrero" :
		case "marzo" :
		case "abril" :
		case "mayo" :
		case "junio" :
		case "julio" :
		case "agosto" :
		case "septiembre" :
		case "octubre" :
		case "noviembre" :
			alert("no es enero, ni diciembre");
			break;
		case "diciembre" :
			alert("Se vienen las fiestas");
			break;
	}//switch (mes)

}
