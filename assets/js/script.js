const formulario = document.getElementById('formulario');
const dueno = document.getElementById('propietario');
const telefono = document.getElementById('telefono');
const direccion = document.getElementById('direccion');
const mascota = document.getElementById('nombreMascota');
const tipoMascota = document.getElementById('tipo');
const motivoConsulta = document.getElementById('enfermedad');
const resultado = document.getElementById('resultado');

class Propietario {
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getNombre(){
        return this.nombre;
    }

    set setDireccion(direccion){
        this.direccion = direccion;
    }
    get getDireccion(){
        return this.direccion;
    }

    set setTelefono(telefono){
        this.telefono = telefono;
    }
    get getTelefono(){
        return this.telefono;
    }
    
    datosPropietario(){
        return `El nombre de dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número de contacto es: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this.tipo = tipo;
    }

    set setTipo(tipo){
        this.tipo = tipo;
    }

    get getTipo(){
        return this.tipo;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo);
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
    }

    set setNombreMascota(nombreMascota){
        this.nombreMascota = nombreMascota;
    }
    get getNombreMascota(){
        return this.nombreMascota;
    }

    set setEnfermedad(enfermedad){
        this.enfermedad = enfermedad;
    }
    get getEnfermedad(){
        return this.enfermedad
    }
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    /*
    //Prueba 1:
    const consulta = new Mascota();
    consulta.setNombre = dueno.value;
    consulta.setTelefono = parseInt(telefono.value);
    consulta.setDireccion = direccion.value;
    consulta.setNombreMascota = mascota.value;
    consulta.setTipo = tipoMascota.value;
    consulta.setEnfermedad = motivoConsulta.value
    */

    //Referencia orden constructor = (nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
    const consulta = new Mascota(dueno.value.toUpperCase(), direccion.value.toUpperCase(), parseInt(telefono.value), tipoMascota.value.toUpperCase(), mascota.value.toUpperCase(), motivoConsulta.value.toUpperCase());


    resultado.innerHTML = `
        <li>${consulta.datosPropietario()}</li>
        <li>El tipo de animal es un: ${consulta.getTipo}, mientras que el nombre de la mascota es: ${consulta.getNombreMascota} y el motivo de la consulta es: ${consulta.getEnfermedad}</li>
    `;
    
    //validación en consola
    console.log(consulta);

});

