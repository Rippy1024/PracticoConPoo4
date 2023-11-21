class Persona {
    constructor(nombre, edad, profesion) {
      this.nombre = nombre;
      this.edad = edad;
      this.profesion = profesion;
    }
  
    // Método para saludar
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
  
    // Método para despedirse
    despedirse() {
      console.log(`Adiós, ¡hasta luego!`);
    }
  }
  
  // Crear dos objetos de la clase Persona
  const persona1 = new Persona('Juan', 30, 'Ingeniero');
  const persona2 = new Persona('María', 25, 'Doctora');
  
  // Llamar a los métodos saludar y despedirse de cada persona
  persona1.saludar();
  persona1.despedirse();
  
  persona2.saludar();
  persona2.despedirse();
  