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
