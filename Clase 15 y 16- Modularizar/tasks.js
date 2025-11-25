// task.js -> lógica de negocio (crear, eliminar, limpiar)
// Inicializa y maneja el array de notas en memoria y persiste usando la función provista.

export function initTasks(initialArray, persistFn) {
	let notas = Array.isArray(initialArray) ? initialArray.slice() : [];

	const persist = () => typeof persistFn === 'function' && persistFn(notas);

	return {
		getAll() {
			return notas.slice();
		},
		add(texto) {
			const fecha = new Date().toLocaleString('es-ES');
			notas.push({ texto, fecha });
			persist();
		},
		remove(index) {
			if (index >= 0 && index < notas.length) {
				notas.splice(index, 1);
				persist();
			}
		},
		clear() {
			notas.length = 0;
			persist();
		}
	};
}