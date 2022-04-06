


let botonPlay1 = document.getElementById ('botonPlay');

let botonPausa1 = document.getElementById ('botonPausa');

let video = document.querySelector ('video');

botonPlay1.addEventListener ('click',()=>{
    video.play()
});

botonPausa1.addEventListener ('click',()=>{
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



let puzzles = document.getElementById ('puzzle2');

let caja2 = document.getElementById ('box2');

puzzles.addEventListener ('dragstart',inicioTraslado2);

puzzles.addEventListener ('dragend',finalDeTraslado2);

function inicioTraslado2 (evento){
    evento.dataTransfer.setData ('Text',"../rompe2.png");

};

function finalDeTraslado2 (evento){
    puzzles.style.visibility="hidden";
};

caja2.addEventListener ('dragover',prevenirDefault2);

caja2.addEventListener ('drop',soltarElemento1);

function soltarElemento1 (evento) {

    let contentImagen= evento.dataTransfer.getData ('Text');
    caja2.innerHTML= `<img id="puzzle2" src= "${contentImagen}"/>`
};

function prevenirDefault2 (evento) {
    evento.preventDefault()
};




