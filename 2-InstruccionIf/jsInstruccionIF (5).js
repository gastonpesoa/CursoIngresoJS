function Mostrar()

{
//tomo la edad  
	var edad;
	
	edad = document.getElementById('edad').value;
/*
	if(!(edad > 12 && edad < 18))
	{
	   alert("No es adolecente");
	}


*/
	if(edad < 13 || edad > 17)
	{
	   alert("No es adolecente");
	}


}//FIN DE LA FUNCIÓN