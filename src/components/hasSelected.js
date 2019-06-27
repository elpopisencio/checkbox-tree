export const hasSelected = (permisos) => {
	if (typeof permisos === 'boolean') {
		return permisos;
	}
	const keys = Object.keys(permisos);
	return keys.reduce(
		(value, current) => value || hasSelected(permisos[current]),
		false
	);
};
