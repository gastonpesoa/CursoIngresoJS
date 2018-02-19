function Mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .");

while(sexo !== "f" && sexo !== "m")
{
	alert("Ingrese un valor valido");
	sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN