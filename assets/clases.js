//Definimos las clases para exportar al JS con las funcionalidades

const DateTime = luxon.DateTime; //Para usar LUXON con fechas
//------------------------------------CLASES--------------------------------------------------
export class Tramite {
    constructor (nombre,pais,tipo){
        this.nombre = nombre; //String
        this.pais = pais;//String
        this.tipo = tipo; //int
    }
}

export class Emigrante{
    constructor(nombre, edad, origen , destino , familia, esUE, mascota, conductor, tipoVisa, resultado) {
        this.nombre = nombre; //String
        this.edad   = edad; //int
        this.origen  = origen;// String
        this.destino  = destino;// String
        this.familia  = familia;// boolean
        this.mascota  = mascota;// boolean
        this.conductor  = conductor;// boolean
        this.esUE  = esUE; // boolean (es miembro de la Union Europea)
        this.tipoVisa  = tipoVisa; // String (visa de estudios, trabajo)
        this.resultado = resultado ;
    }
    crearResultado(){
        return this.resultado = 
        `- Nombre: ${this.nombre} 
         - Edad: ${this.edad} 
         - Origen: ${this.origen}
         - Destino: ${this.destino}
         - Fecha actual:  ` 
        + DateTime.now().toString()
        + `
         - `
        ;
    }
}