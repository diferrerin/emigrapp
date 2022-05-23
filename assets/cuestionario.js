/*
Enunciado Desafio Entregable 1 - Simulador Interactivo
   A partir de los ejemplos mostrados la primera clase, deberás:
 --Pensar el alcance de tu proyecto: "Simulador para emigrar"
 --Armar la estructura HTML del proyecto.
 --Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
 --Utilizar funciones para realizar esas operaciones.
*/

// GUION: Bienvenido al sistema Emigrapp. Por favor responda las siguientes consultas para armar su itinerario.
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
    let solo = true; //asume que si viaja solo.
    if (aux == "familia"){
        solo = false;
    }
    return solo;
}

function viajaConMascota (){
    let aux = prompt("¿Vas a viajar con mascotas? (con/sin) ");
    let mascota = false; //asume que viaja sin.
    if (aux == "con"){
        mascota = true;
    }
    return mascota;
}

function espania(){
    let validaSiUE = esCiudadanoUE();
    if (validaSiUE==true){
        let validaSolo = viajaSolo();
        if(validaSolo==true){
            alert("Seleccionó: Viaja solo. Es ciudadano UE, quiere emigrar a España");
        }
        if(validaSolo==false){
            alert("Seleccionó: Viaja en Familia. Es ciudadano UE, quiere emigrar a España");
            
        }
        // -Con o sin mascota? (con/sin)
        // -Contas con registro de conducir? (si/no)
    }
    if (validaSiUE==false){
        let validaSolo = viajaSolo();
        if(validaSolo==true){
            alert("Seleccionó: Viaja solo. No es ciudadano UE, quiere emigrar a España");
        }
        if(validaSolo==false){
            alert("Seleccionó: Viaja en Familia. No es ciudadano UE, quiere emigrar a España");
            
        }
        // 	Tenes forma de obtener la ciudadania de la UE? (Si/No)
        // 	Buscas visa de estudiante o de trabajo? (estudiante/trabajo)
    }
}

function europa(){
    let pais = prompt("Escriba el pais al que desea emigrar. (opciones: ESPAÑA, ITALIA, PORTUGAL, FRANCIA) ");
    switch (pais) {
        case "ESPAÑA":
            alert("Seleccionó: emigrar a España.");
            espania();
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
    let entrada = prompt("Escriba el continente al que desea emigrar. (opciones: EUROPA, AMERICA, ESC para salir) ");
    while(entrada != "ESC" ){
        switch (entrada) {
            case "EUROPA":
                    alert("Seleccionó: emigrar a Europa.");
                    europa(); //Definida mas arriba
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
    alert("---  FIN Funcion Cuestionario    ---");
    console.log(" Fin del primer Desafio entregable. Se ejecutó correctamente ");
}

//LLamada a la funcion principal
cuestionario();




