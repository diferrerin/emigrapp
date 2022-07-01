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
         - Fecha actual: 
         - ` 
        + DateTime.now().toString()
        + ` - `
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
function obtenerCotizacionEUR(){
    //Comunicacion con Api de monedas: consulta valor del euro con USD y ARS
    let valorUSD = 0;
    let valorARS = 0;
    let textRespuesta = ` Actualmente el EURO está cotizando a `
    const urlUSD='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json';
    const urlARS='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/ars.json';
     //Comunicacion con Api de monedas: consulta valor del euro con USD
     fetch (urlUSD)
     .then ( (respuesta)=> respuesta.json() ).then ( (data)=> {console.log(data.usd)} ); 
     //muestra el valor ok en la consola... el resultado es un objeto con la fecha y el valor de la moneda usd (si aplico.atributo muestra el atributo)
    //----
    fetch (urlUSD).then ( (respuesta)=> respuesta.json() )
    .then ( function(data) { valorUSD = data.usd; // funca pero no puedo sacar el valor de aca adentro...
                             console.log(valorUSD + "  fetch test ok");
                              } );      //return valorUSD;                      
   /* fetch (urlARS)
    .then ( (respuesta)=> respuesta.json() )
    .then ( (data)=> {  valorARS = data.ars} );*/
    console.log(valorUSD + "  valor fuera de fetch test ok");
    return textRespuesta + valorUSD + ` USD `;
}
function functSubmit(){
    let emigrante = new Emigrante(); 
    emigrante = generaEmigranteDom();//Genera Emigrante en base al HTML
    //console.log(emigrante.crearResultado());
    emigrante.crearResultado();
    //alert(emigrante.resultado);
    // genera respuesta DOM:
    let respuestaDom = document.getElementById(`textoResultado`);
    let cotizacion = obtenerCotizacionEUR()
    respuestaDom.innerText = emigrante.resultado + cotizacion ;

    console.log(respuestaDom);
}



//----------------------------------------------------MAIN-----------------------------------
//let input = document.getElementById("formulario"); //toma inputs de todo el formulario
//input.addEventListener('submit', functSubmit);//Agrega Accion de evento Submit 


let botonResultado = document.getElementById("formulario"); //funciona
//console.log(botonResultado);
botonResultado.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    console.log(document.getElementById("formulario")[0].value)//loguea el form con todos los valores 
    functSubmit(); 
    
   

})

//------------------------------------------------------Fin Script---------------------------
},false);//Fin real. Para que cargue primero el HTML.


/*
Pendientes:
1-CHEQUEAR QUE ESTEN CARGADOS LOS DATOS!!! esto con un if avanzado (pendiente).
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