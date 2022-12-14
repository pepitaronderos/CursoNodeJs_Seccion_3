//Var es la forma antigua de declarar variables
//var nombre = "Profesor X";

//A las constantes no se les puede reasignar valores, pero son mas ligereas que let y hacen que el codigo corra mas rapido
//const nombre = "Profesor X"

//Los valores de Let pueden ser reasignados
let nombre = "Profesor X";
console.log(nombre);

if (true) {
	nombre = "Magneto";
}

console.log(nombre);

//Let y const crean variables de scope y var crea variables globales