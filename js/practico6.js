class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    
    get ISBN() {
      return this._ISBN;
    }
  
    set ISBN(nuevoISBN) {
      this._ISBN = nuevoISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    set titulo(nuevoTitulo) {
      this._titulo = nuevoTitulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(nuevoAutor) {
      this._autor = nuevoAutor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set numPaginas(nuevoNumPaginas) {
      this._numPaginas = nuevoNumPaginas;
    }
  
    mostrarLibro() {
      console.log(`"El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas."`);
    }
  }
  
  // Crear dos objetos Libro
  const libro1 = new Libro('978-84-376-0494-7', 'Don Quijote', 'Miguel de Cervantes', 863);
  const libro2 = new Libro('978-1-4028-9462-6', 'Cien años de soledad', 'Gabriel García Márquez', 432);
  
  // Mostrar la información de los libros
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
  // Indicar cuál de los dos libros tiene más páginas
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`${libro1.titulo} tiene más páginas.`);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    console.log(`${libro2.titulo} tiene más páginas.`);
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
  }
  