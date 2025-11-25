class Perro {
  constructor(nombre, edad, raza) {
    this.nombre = nombre; //Propiedad
    this.edad = edad; //Propiedad
    this.raza = raza;
  }

  ladrar() {
    console.log("Guau!");
  }
  muestraInfo() {
    console.log(`${this.nombre}:${this.edad},${this.raza}`);
  }
}

//Creamos un objeto
const miPerro = new Perro("Firulais", 3);
const miPerro2 = new Perro("Boby", 10, "Pitbull");

//Usamos un método
miPerro.ladrar();
miPerro.muestraInfo();
miPerro2.ladrar();
miPerro2.muestraInfo();

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrarInfo() {
    console.log(`${this.nombre}: $${this.precio}`);
  }
}

const p1 = new Producto("Mouse", 5000);
const p2 = new Producto("Teclado", 10000);

p1.mostrarInfo();
p2.mostrarInfo();

class Animal {
  comer() {
    console.log("Estoy comiendo...");
  }
}

class Gato extends Animal {
  maullar() {
    console.log("Miau, miau!");
  }
}

const mishu = new Gato();
mishu.comer(); //Heredado de Animal
mishu.maullar(); //Propio de Gato

class Lagarto extends Animal {
  morder(){
    console.log("te voy a comer!")
  }
}
const lagartito = new Lagarto();
lagartito.comer(); //Heredado de Animal
lagartito.morder(); //Propio de Lagarto

class Animal1 {
  constructor(nombre){
    this.nombre = nombre;
    this.edad = this.edad;
  }
  morder(){
    console.log("te voy a comer lalalala!")
  }

}

class Perro1 extends Animal1{
  constructor(nombre, edad, raza){
    super(nombre, edad);
    this.raza = raza;
  }
}

const goldy = new Perro1();
goldy.morder();

class Matematica{
  static sumar(a,b){ //static es palabra reservada
    return a+ b;
  }
}

Matematica.sumar(2,3); //no hace falta crear un objeto poqrue no depende de "datos" propios

class Cuenta {
  #saldo = 0;
  depositar(monto){
    this.#saldo += monto;
  }
  retirar(monto){
    this.#saldo -= monto;
  }
  verSaldo(){
    return this.#saldo;
  }
  

}
const c = new Cuenta();
c.depositar(100);
console.log(c.verSaldo());
c.depositar(100);
console.log(c.verSaldo());
c.retirar(100);
console.log(c.verSaldo());