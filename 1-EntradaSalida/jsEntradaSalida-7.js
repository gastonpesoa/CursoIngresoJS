/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()

{	
	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	suma = numeroUno + numeroDos;
	
	alert('la Suma es: ' + suma);



}



function restar()

{
	

	var numeroUno;
	var numeroDos;
	var resta;

	numeroUno = parseInt(document.getElementById('numeroUno').value);	
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	resta = numeroUno - numeroDos;

	alert('la Resta es: ' + resta);



}



function multiplicar()

{ 


	var numeroUno;
	var numeroDos;
	var multiplicar;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	multiplicar = numeroUno * numeroDos;	
	

	alert('el Producto es: ' + multiplicar);


}



function dividir()
{
	

	var numeroUno;
	var numeroDos;
	var dividir;

	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);

	dividir = numeroUno / numeroDos;

	alert('el Cociente es: ' + dividir);


}

