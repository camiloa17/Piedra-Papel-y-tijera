let array = [
    'piedra',
    'papel',
    'tijera'
]

let escogeUsuario;
let escogePc;
document.querySelector("#buttonSubmit").addEventListener("click", iniciar);




function iniciar() {
    opcionPc();
    verSiGano(escogeUsuario, escogePc);
}

// Selecciona la opcion de la computadora y cambiar imagen y text del DOM de acuerdo a lo que escoge
function opcionPc() {
    let opcionPc = Math.floor(Math.random() * 3);
    //Modifica texto del dom de acuerdo a la jugada
    document.querySelector("#jugadaPC").innerHTML = array[opcionPc];
    //modifica la imagen del dom de acuerto a la jugada
    document.querySelector(".computador img").src = "imagenes/" + array[opcionPc] + ".png";
    escogePc = array[opcionPc];


}

// Selecciona la opcion del jugador y cambiar imagen y text del DOM de acuerdo a lo que escoge
function jugador() {
    let allInputs = document.querySelectorAll("input")
    for (let input of allInputs) {
        input.addEventListener("click", function (event) {
            //Obtiene el valor del input clickeado y se guarda para utilizar
            let value = event.target.value;
            //Modifica texto del dom de acuerdo a la jugada
            document.querySelector("#jugadaJugador").innerHTML = value;

            //modifica la imagen del dom de acuerto a la jugada
            document.querySelector(".jugador img").src = "imagenes/" + value + ".png";
            escogeUsuario = value;
        })
    }
}

// Se ejecuta la funcion de jugador
jugador()


//Mira si la persona gana o pirede
function verSiGano(opJug, opPC) {

    if ((opJug == "tijera" && opPC == "papel") || (opJug == "papel" && opPC == "piedra") || (opJug == "piedra" && opPC == "tijera")) {
        console.log("gano")
        resultado("gano")
    } else if (opJug == opPC) {
        console.log("Empate")
        resultado("empato")
    } else {
        console.log("pierde")
        resultado("pierde")
    }
}

//Chequea si la persona gana o pierde y cambia el fondo de pantalla
function resultado(event) {
    if (event == "gano") {
        agregarEventoAlBody(event);
        regresarANuevo(event);
        document.querySelector("h1").innerHTML = "Ganaste!🎉👍";

    } else if (event == "pierde") {
        agregarEventoAlBody(event);
        regresarANuevo(event);
        document.querySelector("h1").innerHTML = "Perdiste! 😢";
        
    } else if (event == "empato") {
        agregarEventoAlBody(event);
        regresarANuevo(event);
        document.querySelector("h1").innerHTML = "Empataste! 🙃";
    }
}


function agregarEventoAlBody(event){
    document.querySelector("body").classList.add(event);
}

function regresarANuevo(event){
    setTimeout(function () {
        document.querySelector("body").classList.toggle(event);
        document.querySelector("h1").innerHTML = "Juega Piedra Papel y Tijera";
    }, 1200);
}
