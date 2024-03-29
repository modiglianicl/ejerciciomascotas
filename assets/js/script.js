// Definiendo clases

class Propietario {
    constructor(nombre,direccion,telefono) {
        this._nombre = nombre,
        this._direccion = direccion,
        this._telefono = telefono
    }
    datosPropietario() {
        return `El propietario se llama ${this._nombre} , vive en ${this._direccion} , y su número de telefono ${this._telefono}`
        
    }
}

class Animal extends Propietario{
    constructor(nombre,direccion,telefono,tipoAnimal) {
        super(nombre,direccion,telefono,tipoAnimal);
        this._tipo = tipoAnimal;
    }
    get tipo() {
        console.log(`El tipo de animal es un: ${this._tipo}`)
        return this._tipo;
    }
}

class Mascota extends Animal{
    constructor(nombre,direccion,telefono,tipoAnimal,nombreMascota,enfermedad) {
        super(nombre,direccion,telefono,tipoAnimal);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nuevoNombreMascota) {
        if(typeof nuevoNombreMascota === 'number') { // Si escribe solo numeros lo dejamos como texto
            this._nombreMascota = nuevoNombreMascota.toString()
        } else {
            this._nombreMascota = nuevoNombreMascota;
        }
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(nuevaEnfermedad){
        if(typeof nuevoNombreMascota === 'number') { // Si escribe solo numeros lo dejamos como texto
            this._enfermedad = nuevaEnfermedad.toString()
        } else {
            this._enfermedad = nuevaEnfermedad;
        }
    }
}


// Inicializamos la consulta como la clase Mascota

let infoConsulta = new Mascota();

// Elemento(s) que tendra evento(s)

let botonAgregar = document.getElementById("obtenerDatos")

// Funcion que obtiene los datos

const obtenerDatos = (event) => {
    event.preventDefault();
    // Reseteamos si ya habian datos puestos
    document.querySelector("#resultadoProceso").innerHTML = "";
    document.querySelector("#resultado").innerHTML = ``;
    // Flags
    let nombreDuenoOk = 0;
    let numeroTelefonoOk = 0;
    let lugarResidenciaOk = 0;
    let nombreMascotaOk = 0;
    let tipoMascotaOk = 0;
    let motivoConsultaOk = 0;
    // Obteniendo datos y controlando
    /// Nombre Dueño
    let nombreDueno = document.getElementById("propietario").value.toString();
    if (nombreDueno === "") {
        document.querySelector("#textoAyuda").innerHTML = "El nombre debe contener al menos un cáracter.";
        document.getElementById("textoAyuda").style.color = 'red';
    } else {
        infoConsulta._nombre = nombreDueno;
        nombreDuenoOk = 1;
    }
    /// Número telefonico
    let numeroTelefono = document.getElementById("telefono").value.toString();
    if (numeroTelefono === "") {
        document.querySelector("#textoAyudaTelefono").innerHTML = "Debe de ingresar un número telefonico, es necesario para contactarlo.";
    } else {
        infoConsulta._telefono = numeroTelefono;
        numeroTelefonoOk = 1;
    }
    // Lugar de Residencia
    let lugarResidencia = document.getElementById("direccion").value.toString();
    if (lugarResidencia === "") {
        document.querySelector("#textoAyudaDireccion").innerHTML = "Debe de ingresar una residencia."
    } else {
        infoConsulta._direccion = lugarResidencia;
        lugarResidenciaOk = 1;
    }

    // Nombre de la mascota
    let nombreMascota = document.getElementById("nombreMascota").value.toString();
    if (nombreMascota === "") {
        document.querySelector("#textoayudaNombreMascota").innerHTML = "La mascota debe tener al menos un cáracter."
    } else {
        infoConsulta.nombreMascota = nombreMascota;
        nombreMascotaOk = 1;
    }

    // Tipo de la mascota
    let tipoMascota = document.querySelector("#tipo").value;
    if (tipoMascota === "perro" || tipoMascota === "conejo" || tipoMascota === "gato") {
        infoConsulta._tipo = tipoMascota;
        tipoMascotaOk = 1;
    } else {
        console.log("Error, no se pudo crear.")
    }

    // Motivo de la consulta
    let motivoConsulta = document.getElementById("enfermedad").value.toString();
    if (motivoConsulta === "") {
        document.querySelector("#textoayudaMotivoConsulta").innerHTML = "Su motivo debe tener tener al menos un caracter."
    } else {
        infoConsulta.enfermedad = motivoConsulta;
        motivoConsultaOk = 1;
    }
    
    // Check final
    if(nombreDuenoOk === 1 && numeroTelefonoOk === 1 && lugarResidenciaOk === 1 && nombreMascotaOk === 1 && tipoMascotaOk === 1 && motivoConsultaOk === 1 ) {
        document.querySelector("#resultadoProceso").innerHTML = "Datos Agregados";
        document.querySelector("#resultado").innerHTML += `<li>${infoConsulta.datosPropietario()} </li>`;
        document.querySelector("#resultado").innerHTML += `<li>El tipo de animal es un: ${infoConsulta.tipo}, mientras que el nombre de la mascota es: ${infoConsulta.nombreMascota}
        y la enfermedad es ${infoConsulta.enfermedad} </li>`;
    }
}

// Eventos

botonAgregar.addEventListener('click',obtenerDatos);