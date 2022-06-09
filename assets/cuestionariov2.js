document.addEventListener(`DOMContentLoaded`,function(){
//------------------------------------Inicio Script DOM+Events--------------------------------
//------------------------------------CLASES--------------------------------------------------
class Emigrante{
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
        `Resultado: Nombre: ${this.nombre} 
                    Edad: ${this.edad} 
                    Origen: ${this.origen}
                    Destino: ${this.destino}
                    ` ;//Estado Civil: ${this.familia}
    }
}
//----------------------------------------------------FUNCIONES-----------------------------
function generaEmigranteDom(){
    let resultadoe = new Emigrante();
    //CHEQUEAR QUE ESTEN CARGADOS LOS DATOS
    resultadoe.nombre = document.getElementById( `nombre` ).value;
    resultadoe.edad = document.getElementById( `edad` ).value;
    //ver el resto de atributos 
    resultadoe.origen = document.getElementById(`origen`).value;
    resultadoe.destino = document.getElementById(`destino`).value;
    //resultadoe.familia = document.getElementById(`estadocivil`).value;//No funciona, tira undefined

    return resultadoe;
}

function functSubmit(){
    let emigrante = new Emigrante(); 
    emigrante = generaEmigranteDom();//Genera Emigrante en base al HTML
    console.log(emigrante.crearResultado());//ver rapido test
    alert(emigrante.resultado);
    // genera respuesta DOM:
    let respuestaDom = document.getElementById(`textoResultado`);
    respuestaDom.innerText = emigrante.resultado;
    console.log(respuestaDom);
    //No logro evitar que refresque, para ver el resultado en el html.....

}

//----------------------------------------------------MAIN-----------------------------------
let input = document.getElementById("formulario"); //toma inputs de todo el formulario
input.addEventListener('submit', functSubmit);//Agrega Accion de evento Submit 

//------------------------------------------------------Fin Script---------------------------
},false);//Fin real. Para que cargue primero el HTML.


/*-------------------ENUNCIADOS--------------------------------------------------------------
DOM:
1- Crear elementos manipulando el DOM a partir de la informaciòn de tus objetos.
2- Modificar etiquetas existentes en función del resultado de operaciones.
Eventos:
1- Definición de un algoritmo en JavaScript que opere sobre el DOM manejando eventos.

----Guion para entrega
--El usuario completa el formulario y acciona el boton Enviar (Evento)
--Se revisa que todos los campos solicitados estan completos/correctos (DOM)
--Genera el Objeto emigrante (JS)
--El Emigrante ejecuta su metodo generar Texto resultado (JS)
--Se envia al DOM el texto resultado (DOM)

*/