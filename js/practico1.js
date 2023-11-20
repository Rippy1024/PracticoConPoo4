
const auto = {
    color: 'Negro',
    marca: 'volvo',
    modelo: 'EX30',
    encendido: false,
  
    encender: function() {
      if (!this.encendido) {
        this.encendido = true;
        console.log('Auto encendido');
      } else {
        console.log('El auto ya está encendido');
      }
    },
  
    apagar: function() {
      if (this.encendido) {
        this.encendido = false;
        console.log('El auto se apagó');
      } else {
        console.log('El auto ya está apagado');
      }
    }
  };
  
  // Prueba de los métodos
  auto.encender();
  auto.apagar();
  