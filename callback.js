//Un callback no es mas que una funcion que se pasa como argumento a otra funcion
const getUsuarioByID = (id, callback) => {
	const user = {
		id,
		nombre: "Julieta"
	};

	setTimeout(() => {
		callback(user);
	}, 1000);
};

getUsuarioByID(10, (usuario) => {
	console.log(usuario.id);
	console.log(usuario.nombre.toUpperCase());
});