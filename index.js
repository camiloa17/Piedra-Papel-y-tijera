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



function verSiGano(opJug, opPC) {

    if ((opJug == "tijera" && opPC == "papel") || (opJug == "papel" && opPC == "piedra") || (opJug == "piedra" && opPC == "tijera")) {
        console.log("gano")
        resultado("gano")
    } else if (opJug == opPC) {
        console.log("Empate")
    } else {
        console.log("pierde")
        resultado("pierde")
    }
}


function resultado(event) {
    if (event == "gano") {
        document.querySelector("body").classList.add("gano");
        setTimeout(function () {
            document.querySelector("body").classList.toggle("gano")
        }, 200)
    } else if (event == "pierde") {
        document.querySelector("body").classList.add("game-over");
        setTimeout(function () {
            document.querySelector("body").classList.toggle("game-over")
        }, 200)
    }

}
