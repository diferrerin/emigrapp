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
    constructor(nombre, edad, origen , destino , esUE, resultado) { //familia, , mascota, conductor, tipoVisa
        this.nombre = nombre; //String
        this.edad   = edad; //int
        this.origen  = origen;// String
        this.destino  = destino;// String
        //this.familia  = familia;// boolean -- No se usa
        //this.mascota  = mascota;// boolean -- No se usa
        //this.conductor  = conductor;// boolean -- No se usa
        this.esUE  = esUE; // codigo (1-es miembro de la Union Europea, mismo pais al que emigra, 2-Es UE otro pais, 3-No es UE)
        //this.tipoVisa  = tipoVisa; // String (visa de estudios, trabajo) -- No se usa
        this.resultado = resultado ;
    }
    crearResultado(){
        return this.resultado = 
        `- Nombre: ${this.nombre} 
         - Edad: ${this.edad} 
         - Origen: ${this.origen}
         - Destino: ${this.destino}
         - Tipo Ciudadano: ${this.esUE}
         - Fecha actual:  ` 
        + DateTime.now().toString()
        + `
         - `
        ;
    }
}