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

const getEmpleado = (id, callback) => {
	const empleado = empleados.find(e => e.id === id);

	if (empleado) {
		callback(null, empleado.nombre);
	} else {
		callback(`Empleado con id ${id} no existe`);
	}
};

const getSalario = (id, callback) => {
	const salario = salarios.find(e => e.id === id);

	if (salario) {
		callback(null, salario.salario);
	} else {
		callback(`Salario con id ${id} no existe`);
	}
};

const id = 3;

//El callback hell hace que el codigo sea muy dificil de leer
getEmpleado(id, (error, empleado) => {
	if (error) {
		console.log("ERROR");
		return console.log(error);
	}

	getSalario(id, (error, salario) => {
		if (error) {
			console.log("ERROR");
			return console.log(error);
		}

		console.log("El empleado:", empleado, "tiene un salario de:", salario);
	});
});