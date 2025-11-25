// main.js - Orquesta la app usando módulos
import { getTasks, saveTasks } from './storage.js';
import { initTasks } from './tasks.js';
import { render, setupUI } from './ui.js';

const listaNotas = document.getElementById('listaNotas');

// Inicializar el gestor de tareas con lo que hay en storage
const tasks = initTasks(getTasks(), saveTasks);

// Refresca la UI según el estado actual
function refresh() {
    render(tasks.getAll(), listaNotas, (index) => {
        tasks.remove(index);
        refresh();
    });
}

// Conectar la UI con los controladores de negocio
setupUI({
    onAdd: (text) => {
        tasks.add(text);
        refresh();
    },
    onClear: () => {
        tasks.clear();
        refresh();
    }
});

// Primera carga
refresh();