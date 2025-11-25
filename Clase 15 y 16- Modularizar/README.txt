Gestor de Tareas - Modularizado
---------------------------------
Arquitectura:
- storage.js -> persistencia en localStorage
- tasks.js   -> lógica de negocio (crear, eliminar, toggle)
Identificar funciones y agregarlas a tasks con export
- ui.js      -> render y conexión con el DOM
importar funciones
- main.js    -> orquesta inicialización y eventos

Cómo debe usarse para funcionar:
1. Abrir la app desde un servidor local (por ejemplo `python -m http.server`) y abrir `http://localhost:8000/` en el navegador. Los módulos ES requieren servir los archivos; abrir por doble clic (`file://`) puede fallar en algunos navegadores.
2. Usar la caja de texto y el botón 'Guardar Nota' para crear tareas.
3. Las tareas se guardan automáticamente en `localStorage` bajo la clave `notas`.
4. Se puede borrar cada nota de manera individual usando el botón '❌ Eliminar' junto a cada nota.
5. Se puede borrar toda la lista con el botón 'Borrar Todo'.

Conceptos aplicados:
- ES Modules (import / export)
- Separación de responsabilidades
- localStorage
- DOM manipulation


