const deadpool = {
	nombre: "Wade",
	apellido: "Winston",
	poder: "Regeneración",
	getnombre: function () {
		return `${this.nombre} ${this.apellido} ${this.poder}`;
	}
};

console.log(deadpool.getnombre());

//Desestructurar Objetos
const { nombre, apellido, poder, edad = 50 } = deadpool;
console.log(nombre, apellido, poder, edad);

//Puedo desestructurar el objeto los argumentos de la funcion
function imprimirHeroe({ nombre, apellido, poder, edad = 50 }) {
	console.log(nombre, apellido, poder, edad);
}

imprimirHeroe(deadpool);

//Desestrcuturar Arrays
const heroes = ["Iron Man", "Thor", "Capitan America"];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);
