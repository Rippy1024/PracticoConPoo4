class Rectangulo {
    constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  
    modificarAlto(nuevoAlto) {
      if (nuevoAlto > 0) {
        this.alto = nuevoAlto;
        console.log('Altura modificada correctamente.');
      } else {
        console.log('La altura debe ser mayor que cero.');
      }
    }
  
    modificarAncho(nuevoAncho) {
      if (nuevoAncho > 0) {
        this.ancho = nuevoAncho;
        console.log('Ancho modificado correctamente.');
      } else {
        console.log('El ancho debe ser mayor que cero.');
      }
    }
  
    mostrarPropiedades() {
      console.log('Rectángulo - Alto: ' + this.alto + ', Ancho: ' + this.ancho);
    }
  
    calcularPerimetro() {
      return 2 * (this.alto + this.ancho);
    }
  
    calcularArea() {
      return this.alto * this.ancho;
    }
  }
  
  const rectangulo1 = new Rectangulo(5, 10);
  const rectangulo2 = new Rectangulo(8, 15);
  
  rectangulo1.mostrarPropiedades();
  rectangulo2.mostrarPropiedades();
  
  rectangulo1.modificarAlto(7);
  rectangulo1.modificarAncho(12);
  
  rectangulo1.mostrarPropiedades();
  
  // Calcular y mostrar el perímetro y el área de un rectángulo
  console.log('Perímetro del rectángulo 2: ' + rectangulo2.calcularPerimetro());
  console.log('Área del rectángulo 2: ' + rectangulo2.calcularArea());
  