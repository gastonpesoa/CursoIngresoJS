/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//Esto es un comentario en linea
	//alert("anda");
	//Toda linea de instruccion termina con punto y coma (;)
	/*Esto es un comentario en bloque
	var nombre;
	alert("nombre");
	alert(nombre);
	nombre = "gaston pesoa";
	alert(nombre);
	var person = prompt("Please enter your name", "Harry Potter");
	*/
	var nombre = prompt("Ingrse su nombre:", "Juan Perez");
	//siempre separamos los terminos por coma
	alert("Su nombre es: " + nombre);
}

