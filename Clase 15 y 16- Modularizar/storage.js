// storage.js -> persistencia en localStorage
// Provee funciones simples para leer y escribir el array de notas.

export function getTasks() {
	return JSON.parse(localStorage.getItem('notas')) || [];
}

export function saveTasks(tasks) {
	localStorage.setItem('notas', JSON.stringify(tasks));
}