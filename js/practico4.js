class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
  
    imprimeDatos() {
      console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: $${this.precio}`);
    }
  }
  
  let productosArray = [
    new Producto(1, 'Producto A', 20.99),
    new Producto(2, 'Producto B', 15.49),
    new Producto(3, 'Producto C', 30.00)
  ];
  
  productosArray.forEach(producto => {
    producto.imprimeDatos();
  });
  