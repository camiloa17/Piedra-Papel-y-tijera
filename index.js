let array=[
    'piedra',
    'papel',
    'tijera'    
]
let opcionelegida;

function opcionJugador() {
    return("piedra");
    
}


function pc() {
    let opcionPc = Math.floor(Math.random()*3);
    array[opcionPc];
    console.log(array[opcionPc])
}

function verSiGano() {
    return("GANASTE");
}

function modificarDOM() {
    console.log("modifica dom????!!!!");
    
}