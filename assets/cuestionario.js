//--------------VARIABLES GLOBALES DEL SCRIPT----------------------
let paisesOkUE = ["Francia","Italia","España","Portugal"] //Paises para emigrar configurados en script.
let paisesOkAM = ["Mexico","Brasil","Chile","Estados Unidos", "Canada"]

//--------------CLASES----------------------
class Ubicacion{
    constructor(continente, pais) {
        this.continente = continente;//String
        this.pais = pais;//String
    }
}
class Persona{ //VERSION NUEVA falta reemplazar en clase Emigrante (ver herencia)
    constructor(nombre,edad,tituloSec,tituloUni,familia){
        this.nombre = nombre; //String
        this.edad   = edad; //int
        this.tituloSec = tituloSec; //string o boolean? o ambos....
        this.tituloUni = tituloUni; //string o boolean? o ambos....
    }
}
class Emigrante{
    constructor(nombre, edad, origen = Ubicacion, destino = Ubicacion, familia, esUE, mascota, conductor, tipoVisa, resultado = []) {
        this.nombre = nombre; //String
        this.edad   = edad; //int
        this.origen  = origen;// Ubicacion
        this.destino  = destino;// Ubicacion
        this.familia  = familia;// boolean
        this.mascota  = mascota;// boolean
        this.conductor  = conductor;// boolean
        this.esUE  = esUE; // boolean (es miembro de la Union Europea)
        this.tipoVisa  = tipoVisa; // String (visa de estudios, trabajo)
        this.resultado = resultado ;
    }
    crearResultado(){
        let textoa = this.nombre + " emigra desde " + this.origen.pais  + " hacia "+ this.destino.pais +"." ;
        let textob ="";
        let textoc =""; 
        if (this.familia==true){
            textob = " Viaja con su familia. ";
        }else{
            textob = " Viaja solo. ";
        }
        if(this.mascota==true){
            textoc = " Viaja con mascota. ";
        }else{
            textoc = " Viaja sin mascota. ";
        }
        this.resultado = [textoa,textob];
        this.resultado.push(textoc);
        //falta agregar carnet de conducir y tipo de visa titulo universitario/secundario
        return this.resultado;
    }
}
//--------------FUNCIONES----------------------
function esCiudadanoUE (){
    let aux = prompt("Es ciudadano de un país miembro de la UE?  (Si/No) ");
    let estadoUE = false; //asume que no es, salvo que se ingrese Si.
    if (aux == "Si"){
        estadoUE = true;
    }
    return estadoUE;
}

function viajaSolo (){
    let aux = prompt("¿Vas a viajar solo o en familia? (solo/familia) ");
    let familia = true; //asume que viaja en familia.
    if (aux == "solo"){
        familia = false;
    }
    return familia;
}

function viajaConMascota (){
    let aux = prompt("¿Vas a viajar con mascotas? (con/sin) ");
    let mascota = false; //asume que viaja sin.
    if (aux == "con"){
        mascota = true;
    }
    return mascota;
}

function espania(emigrante = Emigrante){//devuelve emigrante
    let validaSiUE = esCiudadanoUE();
    emigrante.destino.pais = "España ";
    if (validaSiUE==true){
        emigrante.esUE=true;   
    }
    if (validaSiUE==false){
        emigrante.esUE=false;
        // 	Tenes forma de obtener la ciudadania de la UE? (Si/No)
        // 	Buscas visa de estudiante o de trabajo? (estudiante/trabajo)    
    }
    let validaSolo = viajaSolo();
    if(validaSolo==true){
        emigrante.familia = true;
        alert("Seleccionó: Viaja en Familia.");
    }
    if(validaSolo==false){
        emigrante.familia = false;
        alert("Seleccionó: Viaja Solo.");  
    }
    if (viajaConMascota()==true){
        emigrante.mascota = true;
    }else{
        emigrante.mascota = false;
    }
    // -Contas con registro de conducir? (si/no)
    return emigrante;
}

function europa(emigrante = Emigrante){ //version 1 de la funcion para entregas iniciales
    let pais = prompt("Escriba el pais al que desea emigrar. (opciones: ESPAÑA, ITALIA, PORTUGAL, FRANCIA) ");
    switch (pais) {
        case "ESPAÑA":
            emigrante.destino.pais = "España";
            alert("Seleccionó: emigrar a España.");
            espania(emigrante);
            break;
        case "ITALIA":
            alert("Seleccionó: emigrar a Italia. Esta seccion esta en construccion");
            //Investigar requisitos del pais
            //italia();
            break;
        case "PORTUGAL":
            alert("Seleccionó: emigrar a Portugal. Esta seccion esta en construccion");
            //Investigar requisitos del pais
            //portugal();
            break;
        case "FRANCIA":
            alert("Seleccionó: emigrar a Francia. Esta seccion esta en construccion");
            //Investigar requisitos del pais
            //francia();
            break;
        default:
            alert("No eligió una opción posible. Vuelva a intentarlo.");
            break;
    }
}

function america(){
    // Under Construction
}

function cuestionario (){
    console.log(" Inicia Emigrapp. ");
    alert("---  Bienvenido al sistema Emigrapp.    ---  \n --- Por favor responda las siguientes consultas para armar su itinerario.   \n ");
    let emigrante = new Emigrante();
    let nombre = prompt("Ingrese su nombre: ");
    let edad = prompt("Ingrese su edad: ");
    let origen = new Ubicacion();
    origen.continente = prompt("Ingrese continente de origen: ");
    origen.pais = prompt("Ingrese su pais de origen: ");
    emigrante.nombre = nombre;
    emigrante.edad = edad;
    emigrante.origen = origen;
    let entrada = prompt("Escriba el continente al que desea emigrar. (opciones: EUROPA, AMERICA, ESC para salir) ");
    while(entrada != "ESC" ){
        switch (entrada) {
            case "EUROPA":
                    emigrante.destino.continente = "europa";
                    alert("Seleccionó: emigrar a Europa.");
                    europa(emigrante); //Definida mas arriba
                    entrada = "ESC";
                    break;
            case "AMERICA":
                    alert("Seleccionó: emigrar a America. Esta seccion está en construccion");
                    america(); //Definida mas arriba
                    entrada = "ESC";
                    break;
            default:
                    alert("No eligió una opción posible. Vuelva a intentarlo.");
                    entrada = prompt(" Escribe una de las opciones ( EUROPA, AMERICA o ESC para salir) ");
                    break;
        }
    };
    alert("---  Fin del Cuestionario, estos son sus resultados:    ---");
    console.table(emigrante);
    console.log(emigrante.crearResultado());
    alert(emigrante.resultado[0]+emigrante.resultado[1]+emigrante.resultado[2]);
    console.log(" Fin del primer Desafio entregable. Se ejecutó correctamente ");
}

//----FUNCION para aprobar entrega

function muestraPaises (arrayPaises = []){
    arrayPaises.forEach( (pais)=> {
        console.log(pais)
    } )
}

//--------------CODIGO EJECUTADO----------------------
//------(LLamada a la funcion principal)

muestraPaises(paisesOkUE);//
cuestionario();

// GUION base: Bienvenido al sistema Emigrapp. Por favor responda las siguientes consultas para armar su itinerario.
// -A donde desea emigrar? UE(Union Europea) America etc
// --- Si elige America
//   --Seleccione el Pais (Canada/Mexico/EEUU/Chile/Brasil)
// --- Si elige UE
//   -- Seleccione el Pais (España/Portugal/Francia/Italia)
//   -- Es ciudadano de un país miembro de la UE?  Si/No
//   -- Si elige No: 
// 	Tenes forma de obtener la ciudadania de la UE? (Si/No)
// 	Buscas visa de estudiante o de trabajo? (estudiante/trabajo)
// -vas a viajar solo o en familia? (solo/familia)
// -Con o sin mascota? (con/sin)
// -Contas con registro de conducir? (si/no)


