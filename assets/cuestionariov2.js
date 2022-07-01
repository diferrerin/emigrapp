document.addEventListener(`DOMContentLoaded`,function(){
    //import * as clases from "./claseUsuario.js" (export del otro lado) (script htm type="module")
//------------------------------------Inicio Script DOM+Events--------------------------------
//------------------------------------CONSTANTES----------------------------------------------
const DateTime = luxon.DateTime; //Para usar LUXOR
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
//----------------------------------------------------FUNCIONES-----------------------------
function generaEmigranteDom(){
    let resultadoe = new Emigrante();
    //CHEQUEAR QUE ESTEN CARGADOS LOS DATOS!!! esto con un if avanzado (pendiente)
    resultadoe.nombre = document.getElementById( `nombre` ).value;
    resultadoe.edad = document.getElementById( `edad` ).value;
    //ver el resto de atributos 
    resultadoe.origen = document.getElementById(`origen`).value;
    resultadoe.destino = document.getElementById(`destino`).value;
    //resultadoe.familia = document.getElementById(`estadocivil`).value;//No funciona, tira undefined
    return resultadoe;
}
async function obtenerCotizacionEUR(){//No se usa, no encuentro la forma que funcione por fuera de esta funcion
     //OBTENEMOS DE API de monedas la cotizacio del Euro vs USD
     const urlUSD='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json';
     const urlARS='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/ars.json';
     const promesa = await fetch(urlUSD);
     let objson = await promesa.json();
     let valorUSD = objson.usd.toString(); 
     const promesa2 = await fetch(urlARS);
     let objson2 = await promesa2.json();
     let valorARS = objson2.ars.toString(); 
     let cotizacionText = `- Actualmente el EURO está cotizando a USD: `+ valorUSD +` y a ARS: `+ valorARS;
    return cotizacionText;
}

async function functSubmit(){
    //let cotizacionText = obtenerCotizacionEUR(); no funciona, devuelve una promesa.
         //OBTENEMOS DE API de monedas la cotizacio del Euro vs USD
         const urlUSD='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json';
         const urlARS='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/ars.json';
         const promesa = await fetch(urlUSD);
         let objson = await promesa.json();
         let valorUSD = objson.usd.toString(); 
         const promesa2 = await fetch(urlARS);
         let objson2 = await promesa2.json();
         let valorARS = objson2.ars.toString(); 
         let cotizacionText = `- Actualmente el EURO está cotizando a USD: `+ valorUSD +` y a ARS: `+ valorARS;
    //Genera EMIGRANTE segun los datos cargados de HTML
    let emigrante = new Emigrante(); 
    emigrante = generaEmigranteDom();//Genera Emigrante en base al HTML
    emigrante.crearResultado();//Crea el texto resultado para mandarlo al DOM
    let respuestaDom = document.getElementById(`textoResultado`);// genera respuesta DOM:
    // Agrega al DOM:
    respuestaDom.innerText = emigrante.resultado + cotizacionText ;
    //logueo de chequeo
    console.log(respuestaDom);
}



//----------------------------------------------------MAIN-----------------------------------

let botonResultado = document.getElementById("formulario"); //funciona
//console.log(botonResultado);
botonResultado.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    console.log(document.getElementById("formulario")[0].value)//loguea el form con todos los valores ..undefined...
    functSubmit(); 

})

//------------------------------------------------------Fin Script---------------------------
},false);//Fin real. Para que cargue primero el HTML.


/*
Pendientes:
1-CHEQUEAR QUE ESTEN CARGADOS LOS DATOS!!! esto con un if avanzado (pendiente). 
  -CHEQUEAR 
2-chequear checkbox segun devolucion de Juan.
3-realizar el proceso de generacion de plan de emigracion.
4-agregar manejor de respuesta mas avanzado con las fechas (relacionado con pto 3)
*/

/*-------------------ENUNCIADOS--------------------------------------------------------------
Entrega Obligatoria:
 Utiliza fetch() para cargar datos en tu aplicación de forma asincrónica.
Puedes consumir una API que ofrezca recursos relevantes para tu app
O bien,
Crea un archivo .JSON y carga los datos de tu app usando fetch y una ruta relativa.


API para Monedas:
https://github.com/fawazahmed0/currency-api#readme
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/ars.json
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json

probar:
fetch (´https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json´)
    .then ( (respuesta)=> respuesta.json() ).then ( (data)=> {console.log(data)} )


Entrega no obligatoria:
Aspectos a incluir en el entregable:
    -Operador Ternario / AND / OR. Busca estructuras condicionales simples en tu proyecto y 
        simplifícalas utilizando operador ternario u operadores lógicos AND y OR.
    -Optimización. Con lo visto en clase, optimiza la asignación condicional de variables.
    -Desestructuración. Aplica la desestructuración según corresponda para recuperar propiedades de objetos con claridad y rapidez.
    -Spread. Usa el operador spread para replicar objetos o arrays o, también, para mejorar la lógica de tus funciones.


*/