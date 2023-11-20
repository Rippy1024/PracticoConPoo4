
const cuenta = {
    titular: "Alex",
    saldo: 0,
  
    ingresar: function(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log("Se ingresaron $" + cantidad + ". Nuevo saldo: $" + this.saldo);
      } else {
        console.log("Ingresa una cantidad válida para depositar.");
      }
    },
  
    extraer: function(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log("Se retiraron $" + cantidad + ". Nuevo saldo: $" + this.saldo);
      } else {
        console.log("Cantidad no válida o insuficiente saldo para retirar.");
      }
    },
  
    informar: function() {
      console.log("Titular: " + this.titular + ", Saldo: $" + this.saldo);
    }
  };
  
  // Mostrar información inicial
  cuenta.informar();
  
  // Realizar operaciones en la cuenta
  cuenta.ingresar(1000);
  cuenta.extraer(500);
  
  // Mostrar información actualizada
  cuenta.informar();
  