# Proyecto Frontend_con_IA - POO

## Archivos

### 1. index.html
- Documento HTML principal del proyecto.
- Contiene la estructura básica de la página.
- Enlaza el archivo de estilos `style.css` y el de script `script.js` para estilo, lógica y funcionalidades.

### 2. style.css
- Define el estilo visual para la página.

### 3. item.js
- Modulariza para:
  1- Exportar Clases y métodos:
  - **Item:** Clase que representa un libro con `id` y `titulo`.


### 4. author.js
- Modulariza para:
  1- Exportar Clases y métodos:
  - **Autor:** Clase con propiedades `name`, `birthyear`.

### 5. book.js
- Modulariza para:
  1- Importar Clases y métodos:

  - **Autor:** Clase con propiedades `name`, `birthyear`. Importa desde author.js.
  - **Item:** Clase que representa un libro con `id` y `titulo`.. Importa desde item.js.

  2- Crear y exportar Clase:
  - **Book:** Implementación de herencia, donde `Autor` e `Item` extienden `Book`. Tiene las propiedades de `id`, `titulo`,`author`, `year`, `copies (lo define con = 1 esto es un setter)` .
  Define un getter #available.

  3- Crear métodos:
  - **borrow:** método que pregunta disponiblidad del libro (getter en funcion de #available que solo existen dentro de la clase), si es === 0 entrega un mensaje de no disponibildad, sino entrega un mensaje de cantidad de copias disponibles.
  - **returnCopy:** método que pregunta si la disponiblidad del libro es < al número de copias (copies),en funcion de #available, entonces suma una cantidad.
  - **availableCopies:** método que retorna la disponibilidad del libro (getter).
  - **static compareByYear:** método statico (lo uso sin crear objeto) que compara propiedades de dos libros A y B (no se definen como instancias porque no hace falta para este metodo), saca los datos con metodo llamado sort() de arrays (compilaciones de datos de libros).

---

