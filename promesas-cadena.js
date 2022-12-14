const empleados = [
	{
		id: 1,
		nombre: "Fernando"
	},
	{
		id: 2,
		nombre: "Linda"
	},
	{
		id: 3,
		nombre: "Karen"
	}
];

const salarios = [
	{
		id: 1,
		salario: 1000
	},
	{
		id: 2,
		salario: 1500
	}
];

const getEmpleado = (id) => {
	return new Promise((resolve, reject) => {
		const empleado = empleados.find(e => e.id === id);

		(empleado) ? resolve(empleado.nombre) : reject(`No existe ningún empleado con id ${id}`);
	});
};

const getSalario = (id) => {
	return new Promise((resolve, reject) => {
		const salario = salarios.find(e => e.id === id);

		(salario) ? resolve(salario.salario) : reject(`No existe ningún salario con id ${id}`);
	});
};

const id = 3;
let nombre;

//Promesas en cadena
getEmpleado(id)
	.then(empleado => {
		nombre = empleado;
		return getSalario(id);
	}) //En este caso estamos retornando la segunda promesa por lo tanto no es enecesario ejecutar el then
	.then(salario => console.log("El empleado:", nombre, "tiene un salario de:", salario)) //En este caso puedo encadenar otro then porque arriba estoy devolviendo otra promesa
	.catch(error => console.log(error));