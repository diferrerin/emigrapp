import * as clases from "./clases.js";
//import * as clases from "./clases.js" (export del otro lado) (script htm type="module")

document.addEventListener(`DOMContentLoaded`,function(){
//------------------------------------Inicio Script DOM+Events--------------------------------
//----------------------------------------------------FUNCIONES-----------------------------
//FUNCION PARA GENERAR EL PLAN EN BASE AL EMIGRANTE CARGADO
function crearPlan ( valorUE ){// 1, 2 o 3 
    console.log("Inicia Creacion Plan. "+ valorUE)
    let planFinal = "";
    //Puse ruta igual que en el import (antes estaba en assets el json y no anda, lo movi a pages para que ande..)
    const dirTramite= `./tramites.json `; 
    //lee del JSON tramites 
    let textPlan = " - Plan para Emigrar: ";
    fetch(dirTramite).then( (resp) => resp.json() ).then(
      (data) =>
      {   
          console.log("FETCH . "+ data[0].object) //test para ver que carga..---------------------UNDEFINED
          if (valorUE == 1 || valorUE == "1")
            {//Arma plan para ciudadano Esp.
              textPlan = " - Plan A "
              
            }else
            {
                  if (valorUE == 2|| valorUE == "2")
                  {//Arma plan para ciudadano UE no Esp.
                    textPlan = " - Plan B "
                  }else 
                  { //Arma plan para ciudadano no UE.
                    textPlan = " - Plan C "
                  }
            }
            console.log("FETCH . "+ textPlan) 
            return textPlan;
      }//----------------------------------------------------------------------------------------------------------
    )
}

//FUNCION PARA GENERAR EL EMIGRANTE Y SU PLAN EN BASE A LOS DATOS CARGADOS EN EL DOM
function generaEmigranteDom(){
    let resultadoe = new clases.Emigrante(); //lo que retorna la funcion
    let testNombre = document.getElementById( `nombre` ).value;
    let testEdad = document.getElementById( `edad` ).value;
    let testOrigen = document.getElementById(`origen`).value;
    let testDestino = document.getElementById(`destino`).value;
    let testUE = document.getElementById(`nacioen`).value;
    //CHEQUEA QUE ESTEN CARGADOS LOS DATOS
    if( testNombre != null && testEdad != null &&  testOrigen != "Seleccione su País de Origen"
    &&  testDestino != "Seleccione su País de Destino" && testUE !="Es ciudadano de... "){
      resultadoe.nombre = testNombre;
      resultadoe.edad = testEdad;
      resultadoe.origen = testOrigen;
      resultadoe.destino = testDestino;
      resultadoe.esUE =  testUE;
      return resultadoe;
    }else {
      let resultadox = new clases.Emigrante();
      resultadox.nombre = "No dijiste la palabra mágica";
      console.log("No dijiste la palabra mágica")
      return resultadox;
    }
}
/*async function obtenerCotizacionEUR(){
//No se usa, no encuentro la forma que funcione dentro de esta funcion (devuelve objeto Promesa y no un texto)
//Lo que entiendo es que no se puede crear una funcion (asincronica) para usar de forma sincronica en otro lado..
     const urlUSD='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json';
     const urlARS='https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/ars.json';
     const promesa = await fetch(urlUSD); //se puede simplificar con THEN pero de tanto probar opte por esta opcion
     let objson = await promesa.json();
     let valorUSD = objson.usd.toString(); 
     const promesa2 = await fetch(urlARS);
     let objson2 = await promesa2.json();
     let valorARS = objson2.ars.toString(); 
     let cotizacionText = `- Actualmente el EURO está cotizando a USD: `+ valorUSD +` y a ARS: `+ valorARS;
    return cotizacionText;
}*/

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
    emigrante = generaEmigranteDom();//Genera Emigrante en base al DOM  
    let respuestaDom = document.getElementById(`textoResultado`);// obtiene el sector del DOM:
    //Chequea que este bien cargado el emigrante
    if(emigrante.nombre != "No dijiste la palabra mágica"){
         emigrante.crearResultado();//Crea el texto resultado para mandarlo al DOM
         //CREA EL PLAN PARA AGREGAR AL DOM---------------------------------------------------------------------------
         let plan = crearPlan( emigrante.esUE ); //envia el parametro tipo para armar el plan
         console.log("CrearPlan ejecutado . "+ plan) //ERROR crear plan devuelve UNDEFINED------------------<<<<<
         // Agrega al DOM:--------------------------------------------------------------------------------------------
         respuestaDom.innerText = emigrante.resultado + cotizacionText + plan ; // respuesta + cotizacion + fecha + PLAN
         
    }else{
         respuestaDom.innerText = " No se ingresaron todos los valores. Vuelva a intentarlo";
    }

}

//----------------------------------------------------MAIN-----------------------------------
//se deja el Main en el mismo JS que las funciones por el tema de las promesas....
let botonResultado = document.getElementById("formulario"); //funciona
//console.log(botonResultado);
botonResultado.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    functSubmit(); //FUNCION PRINCIPAL
})
//------------------------------------------------------Fin Script---------------------------
},false);//Fin real. Para que cargue primero el HTML.


/*
Pendientes:

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