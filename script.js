
let botonPlay = document.getElementById ("botonPlay");

let botonPausa = document.getElementById ("botonPausa");

let video = document.querySelector ('video');

botonPlay.addEventListener ('click',()=>{
    video.play ()
});

botonPausa.addEventListener ('click',()=>{
    video.pause()
});

let puzzle = document.getElementById ('puzzle1');

let caja1 = document.getElementById ('box1');

puzzle.addEventListener ('dragstart',inicioTraslado);

puzzle.addEventListener ('dragend',finalDeTraslado);

function inicioTraslado (evento){
    evento.dataTransfer.setData ('Text',"../Rompe1.png");
};

function finalDeTraslado (evento) {
    puzzle.style.visibility="hidden";
}



caja1.addEventListener ('dragover',prevenirDefault);

caja1.addEventListener ('drop',soltarElemento);

function soltarElemento (evento) {

    let dataImagen= evento.dataTransfer.getData ('Text');
    caja1.innerHTML= `<img id="puzzle1" src= "${dataImagen}"/>`
};

function prevenirDefault (evento) {
    evento.preventDefault()
}


