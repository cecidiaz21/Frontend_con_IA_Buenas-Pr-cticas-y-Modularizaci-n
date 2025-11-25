// ui.js -> render y conexión con el DOM
// Funciones para dibujar las notas y conectar botones del formulario.

export function render(tasksArray, listaNotasElement, onRemove) {
	listaNotasElement.innerHTML = '';

	tasksArray.forEach((nota, i) => {
		const li = document.createElement('li');

		const textoDiv = document.createElement('div');
		textoDiv.className = 'nota-texto';
		textoDiv.textContent = nota.texto;

		const fechaDiv = document.createElement('div');
		fechaDiv.className = 'nota-fecha';
		fechaDiv.textContent = `📅 ${nota.fecha}`;

		const eliminarDiv = document.createElement('div');
		eliminarDiv.className = 'nota-eliminar';
		const btnEliminar = document.createElement('button');
		btnEliminar.textContent = '❌ Eliminar';
		btnEliminar.addEventListener('click', () => onRemove(i));
		eliminarDiv.appendChild(btnEliminar);

		li.appendChild(textoDiv);
		li.appendChild(fechaDiv);
		li.appendChild(eliminarDiv);

		listaNotasElement.appendChild(li);
	});
}

export function setupUI({ onAdd, onClear }) {
	const guardarBtn = document.getElementById('guardar');
	const borrarBtn = document.getElementById('borrar');

	if (guardarBtn) {
		guardarBtn.addEventListener('click', () => {
			const notaInput = document.getElementById('nota');
			if (!notaInput) return;
			const nota = notaInput.value.trim();
			if (nota && typeof onAdd === 'function') {
				onAdd(nota);
				notaInput.value = '';
			}
		});
	}

	if (borrarBtn) {
		borrarBtn.addEventListener('click', () => {
			if (typeof onClear === 'function') onClear();
		});
	}
}