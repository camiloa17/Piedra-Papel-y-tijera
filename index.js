let array=[
    'piedra',
    'papel',
    'tijera'    
]

document.querySelector("#buttonSubmit").addEventListener("click", iniciarDespuesDelSumitted);

function iniciarDespuesDelSumitted () {
    verSiGano (jugador(), opcionPc () );
}


function opcionPc() {
    let opcionPc = Math.floor(Math.random()*3);
    return array[opcionPc];
    
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
