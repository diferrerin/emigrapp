import * as clases from "./clases.js";
//import * as clases from "./clases.js" (export del otro lado) (script htm type="module")

document.addEventListener(`DOMContentLoaded`,function(){
//------------------------------------Inicio Script DOM+Events--------------------------------
//------------------------------------CONSTANTES----------------------------------------------
const DateTime = luxon.DateTime; //Para usar LUXON con fechas

//----------------------------------------------------FUNCIONES-----------------------------
function generaEmigranteDom(){
    let resultadoe = new clases.Emigrante();
    //CHEQUEAR QUE ESTEN CARGADOS LOS DATOS!!! esto con un if avanzado (pendiente)
    resultadoe.nombre = document.getElementById( `nombre` ).value;
    resultadoe.edad = document.getElementById( `edad` ).value;
    //ver el resto de atributos 
    resultadoe.origen = document.getElementById(`origen`).value;
    resultadoe.destino = document.getElementById(`destino`).value;
    //resultadoe.familia = document.getElementById(`estadocivil`).value;//No funciona, tira undefined
    return resultadoe;
}
async function obtenerCotizacionEUR(){
//No se usa, no encuentro la forma que funcione dentro de esta funcion (devuelve objeto Promesa y no un texto)
//Lo que entiendo es que no se puede crear una funcion (asincronica) para usar de forma sincronica en otro lado..
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
         //OBTENEMOS DE API de monedas la cotizacio del Euro vs USD (aca funciona OK)
         const urlUSD='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json';
         const urlARS='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/ars.json';
         //lo trabaje asi y no en la forma vista en clase, por errores con las promesas
         const promesa = await fetch(urlUSD);  
         let objson = await promesa.json();
         let valorUSD = objson.usd.toString(); 
         const promesa2 = await fetch(urlARS);
         let objson2 = await promesa2.json();
         let valorARS = objson2.ars.toString(); 
         let cotizacionText = `- Actualmente el EURO está cotizando a USD: `+ valorUSD +` y a ARS: `+ valorARS;
    //Genera EMIGRANTE segun los datos cargados de HTML
    let emigrante = new clases.Emigrante(); 
    emigrante = generaEmigranteDom();//Genera Emigrante en base al HTML
    emigrante.crearResultado();//Crea el texto resultado para mandarlo al DOM
    let respuestaDom = document.getElementById(`textoResultado`);// genera respuesta DOM:
    // Agrega al DOM:
    respuestaDom.innerText = emigrante.resultado + cotizacionText ; // respuesta de lo ingresado + cotizacion + fecha

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
Consigna:
Presentarás la página web interactiva en JavaScript que vienes trabajando a lo largo del curso.
La misma debe simular distintos procesos. Un “simulador” es un programa que soluciona ciertas tareas,
y proporciona al usuario información de valor, de forma coherente y prolija.
Utilizarás AJAX y JSON para obtener datos y diversas herramientas de JS como librerías, promises y
asincronía para controlar eventos en la interfaz y producir animaciones en respuesta.
   >>Objetivos generales:
1.Presentar una aplicación que utilice Javascript para solucionar un problema real al usuario.
2.Utilizar Javascript para mejorar la interacción y dinamismo de la página, generando una interfaz
 coherente y atractiva.
   >>Objetivos específicos:
1.Contar con una estructura de datos clara, basada en Arrays y Objetos.
2.Utilizar funciones, condicionales e iteradores para manipular los datos de la app.
3.Generar y manipular el DOM. Crear vistas a partir de datos de la app y generar eventos para 
  responder a la interacción del usuario. Utilizar alguna librería relevante para el simulador.
4.Utilizar asincronía y fetch para cargar datos estáticos o consumir una API.

API para Monedas:
https://github.com/fawazahmed0/currency-api#readme
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/ars.json
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json

Entrega no obligatoria:
Aspectos a incluir en el entregable:
    -Operador Ternario / AND / OR. Busca estructuras condicionales simples en tu proyecto y 
        simplifícalas utilizando operador ternario u operadores lógicos AND y OR.
    -Optimización. Con lo visto en clase, optimiza la asignación condicional de variables.
    -Desestructuración. Aplica la desestructuración según corresponda para recuperar propiedades de objetos con claridad y rapidez.
    -Spread. Usa el operador spread para replicar objetos o arrays o, también, para mejorar la lógica de tus funciones.
*/