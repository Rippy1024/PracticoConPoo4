class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`${pasajero} ha abordado el avión ${this.nombre}.`);
      } else {
        console.log(`¡El avión ${this.nombre} está lleno! No hay capacidad para más pasajeros.`);
      }
    }
  }
  
  class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
      console.log(`Avión ${avion.nombre} agregado al aeropuerto.`);
    }
  
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
  
      if (avionEncontrado) {
        console.log(`Información del avión ${nombreAvion}:`);
        console.log(`Destino: ${avionEncontrado.destino}`);
        console.log(`Capacidad: ${avionEncontrado.capacidad}`);
        console.log(`Pasajeros a bordo: ${avionEncontrado.listaPasajeros.join(', ') || 'Ninguno'}`);
      } else {
        console.log(`No se encontró un avión con el nombre ${nombreAvion} en el aeropuerto.`);
      }
    }
  }
 
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
 
  const avion1 = new Avion("Vuelo 001", 150, "Buenos Aires");
  const avion2 = new Avion("Vuelo 002", 200, "Cordoba");
  const avion3 = new Avion("Vuelo 003", 100, "Tucuman");
 
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
 
  aeropuertoInternacional.buscarAvion("Vuelo002");
  avion2.abordar("Pasajero1");
  avion2.abordar("Pasajero2");
  avion2.abordar("Pasajero3");
  