class Contacto {
    constructor(nombre, telefono) {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    esIgual(otroContacto) {
      return this.nombre === otroContacto.nombre;
    }
  }
  
  class Agenda {
    constructor(tamano = 10) {
      this.tamanoMaximo = tamano;
      this.contactos = [];
    }
  
    aniadirContacto(contacto) {
      if (!this.agendaLlena() && !this.existeContacto(contacto)) {
        this.contactos.push(contacto);
        console.log(`Contacto "${contacto.nombre}" añadido a la agenda.`);
      } else if (this.agendaLlena()) {
        console.log('La agenda está llena. No se pueden añadir más contactos.');
      } else {
        console.log(`El contacto "${contacto.nombre}" ya existe en la agenda.`);
      }
    }
  
    existeContacto(contacto) {
      return this.contactos.some(c => c.esIgual(contacto));
    }
  
    listarContactos() {
      console.log('Lista de contactos:');
      this.contactos.forEach(contacto => console.log(`${contacto.nombre}: ${contacto.telefono}`));
    }
  
    buscarContacto(nombre) {
      const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
  
      if (contactoEncontrado) {
        console.log(`Teléfono de ${contactoEncontrado.nombre}: ${contactoEncontrado.telefono}`);
      } else {
        console.log(`No se encontró un contacto con el nombre ${nombre}.`);
      }
    }
  
    eliminarContacto(contacto) {
      const indice = this.contactos.findIndex(c => c.esIgual(contacto));
  
      if (indice !== -1) {
        this.contactos.splice(indice, 1);
        console.log(`Contacto "${contacto.nombre}" eliminado de la agenda.`);
      } else {
        console.log(`El contacto "${contacto.nombre}" no existe en la agenda.`);
      }
    }
  
    agendaLlena() {
      return this.contactos.length >= this.tamanoMaximo;
    }
  
    huecosLibres() {
      const huecos = this.tamanoMaximo - this.contactos.length;
      console.log(`Huecos libres en la agenda: ${huecos}`);
    }
  }
  
  function menuAgenda(agenda) {
    let opcion;
  
    do {
      opcion = prompt(`Seleccione una opción:
        1. Añadir contacto
        2. Buscar contacto
        3. Eliminar contacto
        4. Listar contactos
        5. Huecos libres
        0. Salir`);
  
      switch (opcion) {
        case '1':
          const nombreNuevo = prompt('Ingrese el nombre del nuevo contacto:');
          const telefonoNuevo = prompt('Ingrese el teléfono del nuevo contacto:');
          const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
          agenda.aniadirContacto(nuevoContacto);
          break;
        case '2':
          const nombreBuscar = prompt('Ingrese el nombre del contacto a buscar:');
          agenda.buscarContacto(nombreBuscar);
          break;
        case '3':
          const nombreEliminar = prompt('Ingrese el nombre del contacto a eliminar:');
          const contactoEliminar = new Contacto(nombreEliminar, ''); // El teléfono no importa en este caso
          agenda.eliminarContacto(contactoEliminar);
          break;
        case '4':
          agenda.listarContactos();
          break;
        case '5':
          agenda.huecosLibres();
          break;
        case '0':
          console.log('Saliendo del programa.');
          break;
        default:
          console.log('Opción no válida. Por favor, seleccione una opción válida.');
      }
    } while (opcion !== '0');
  }
  
  const agendaTelefonica = new Agenda(5);
  
  menuAgenda(agendaTelefonica);
  