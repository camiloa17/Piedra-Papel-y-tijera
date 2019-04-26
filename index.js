let array=[
    'piedra',
    'papel',
    'tijera'    
]
let opcionelegida;



function iniciarDespuesDelSumitted () {
    verSiGano (opcionJugador (), opcionPc () );

}

function opcionJugador() {
    return("piedra");
    
}


function opcionPc() {
    let opcionPc = Math.floor(Math.random()*3);
    array[opcionPc];
    console.log(array[opcionPc])
}

function verSiGano(opJug, opPC) {
    switch (opPC) {
        case opJug:
            console.log ("empate");
            break;
        case "piedra":
            
        break;
        case "tijera":
            
        break;
    
        default:
            break;
    }
}

function modificarDOM() {
    console.log("modifica dom????!!!!");
    
}