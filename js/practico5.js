class Persona {
    constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
      this.DNI = this.generaDNI();
    }
  
    mostrarGeneracion() {
      let generacion = '';
      let rasgoCaracteristico = '';
  
      if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
        generacion = 'Generación Z';
        rasgoCaracteristico = 'Irreverencia';
      } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
        generacion = 'Generación Millennials Y';
        rasgoCaracteristico = 'Frustración';
      } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
        generacion = 'Generación X';
        rasgoCaracteristico = 'Obsesión por el éxito';
      } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
        generacion = 'Baby Boom';
        rasgoCaracteristico = 'Ambición';
      } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
        generacion = 'Silent Generation (Niños de la posguerra)';
        rasgoCaracteristico = 'Austeridad';
      }
  
      console.log(`Pertenece a la ${generacion}. Rasgo característico: ${rasgoCaracteristico}`);
    }
  
    esMayorDeEdad() {
      return this.edad >= 18;
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad} años`);
      console.log(`Sexo: ${this.sexo}`);
      console.log(`Peso: ${this.peso} kg`);
      console.log(`Altura: ${this.altura} cm`);
      console.log(`Año de Nacimiento: ${this.añoNacimiento}`);
      console.log(`DNI: ${this.DNI}`);
    }
  
    generaDNI() {
      return Math.floor(Math.random() * 100000000);
    }
  }
  
  // Ejemplo para el uso:
  const personaEjemplo = new Persona('Juan', 25, 'H', 70, 175, 1995);
  
  // Mostrar generación y rasgo característico
  personaEjemplo.mostrarGeneracion();
  
  // Verificar si es mayor de edad
  console.log(personaEjemplo.esMayorDeEdad() ? 'Es mayor de edad.' : 'No es mayor de edad.');
  
  // Mostrar todos los datos de la persona
  personaEjemplo.mostrarDatos();
  