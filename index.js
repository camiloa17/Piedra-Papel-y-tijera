let array=[
    'piedra',
    'papel',
    'tijera'    
]
let opcionelegida;

function pc() {
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


