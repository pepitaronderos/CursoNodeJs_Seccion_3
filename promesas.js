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

getEmpleado(id)
	.then(empleado => console.log(empleado)) //Then es para manejar los mensajes de exito
	.catch(error => console.log(error)); //catch es para menjar los casos de error

getSalario(id)
	.then(salario => console.log(salario))
	.catch(error => console.log(error));