
/*triangulo equilatero, perimetro y superficie*/
function Mostrar()
{
	//defino variables
	var base;
	var altura;
	var perimetro;
	var superficie;

	//tomo datos
	altura = prompt("Ingrese la altura: ","0");
	altura = parseInt(altura);

	base = document.getElementById('laBase').value;
	base = parseInt(base);

	//realizo calculo
	perimetro = 3 * base;
	superficie = (base * altura) / 2;

	//muestro datos
	document.write("El perimetro del triangulo equilatero es: " + perimetro);
	document.write("<br>" + "La superficie del triangulo equilatero es: " + superficie);
}



/*var base;
	var resultado;

	base = document.getElementById('laBase').value;
	resultado = 4*base;

	alert("El perimetro del cuadrado es: " + resultado);*/