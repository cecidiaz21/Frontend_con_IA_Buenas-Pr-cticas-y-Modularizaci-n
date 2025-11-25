// class Autor {
//   constructor(nombre) {
//     this.nombre = nombre; //Propiedad
//     this.cantidadDeLibros = 0;
//   }
// }
// class Libro {
//   constructor(titulo, autor) {
//     this.titulo = titulo; //Propiedad
//     this.autor = autor; //Propiedad
//     autor.cantidadDeLibros++;
//   }

//   mostrar(){
//     console.log(`${this.titulo}, ${this.autor.nombre}`);
//   }
// }

  
// const autor1 = new Autor("Borges");
// const libro1 = new Libro("Ficciones", autor1);

// libro1.mostrar();
// console.log(autor1.cantidadDeLibros);


import { Item } from './item.js';
import { Author } from './author.js';

export class Book extends Item {
  #available;

  constructor(id, title, author, year, copies=1) {
    super(id, title);
    this.author = author;
    this.year = year;
    this.copies = copies;
    this.#available = copies;
  }

  borrow() {
    if (this.#available <= 0) throw new Error('No hay copias disponibles');
    this.#available--;
  }

  returnCopy() {
    if(this.#available < this.copies) this.#available++;
  }

  availableCopies() {
    return this.#available;
  }

  static compareByYear(A, B) {
    return A.year - B.year;
  } 
}

const autor = new Author("Gabriela Mistral", 1889);
const book = new Book(1, "Poemas", autor, 1928, 3);

console.log(book.availableCopies()); // 3
book.borrow();
console.log(book.availableCopies()); // 2
