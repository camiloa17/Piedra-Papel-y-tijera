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


function jugador(){
    let jugadorSelect = document.querySelectorAll("input")
    for(let select of jugadorSelect){
        if(select.checked == true){
            return select.value;
        }
    }
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
