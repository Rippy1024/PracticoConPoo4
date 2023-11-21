class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log("Sonido genérico de un animal.");
    }
  }
  
  class Perro extends Animal {
  
    emitirSonido() {
      console.log("¡Guau! Soy un perro y ladro.");
    }
  }
  
  class Gato extends Animal {
  
    emitirSonido() {
      console.log("¡Miau! Soy un gato y maúllo.");
    }
  }
  
  const perro1 = new Perro("Buddy", 3);
  const gato1 = new Gato("Whiskers", 2);
  
  perro1.emitirSonido(); // imprime "¡Guau! Soy un perro y ladro."
  gato1.emitirSonido();  // imprime "¡Miau! Soy un gato y maúllo."
  