/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/


var ColorSecreto;

var tiempoInicio;

function comenzar()

{

	
	var tiempo = 0;

	ColorSecreto = Math.floor((Math.random() * 6) + 1);
	
	switch (ColorSecreto) 
	{
		case 1 :
			ColorSecreto = "Azul";
			break;
		case 2 :
			ColorSecreto = "Amarillo";
			break;
		case 3 :
			ColorSecreto = "Marron";
			break;
		case 4 :
			ColorSecreto = "Verde";
			break;
		case 5 :
			ColorSecreto = "Celeste";
			break;
		case 6 :
			ColorSecreto = "Rojo";
			break;
	}



	
	document.getElementById("ColorElejido").value = ColorSecreto ;

	tiempoInicio = setInterval(function() { tiempo++; }, 1);
	
}//FIN DE LA FUNCIÓN


function Responder(colorParametro)

{
	
	if(colorParametro == ColorSecreto)
	{
		 clearInterval(tiempoInicio);
		alert(tiempoInicio);
	}
	else
	{
		alert("Vuelve a intentar");
	}
	




}//FIN DE LA FUNCIÓN
