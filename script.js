

let puzzle = document.getElementById ('puzzle1');

let caja1 = document.getElementById ('box1');

puzzle.addEventListener ('dragstart',inicioTraslado);

puzzle.addEventListener ('dragend',finalDeTraslado);

function inicioTraslado (evento){
    evento.dataTransfer.setData ('Text',"../assets/Rompe1.png");
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

/*imagen puzzle numero 2*/

let puzzles = document.getElementById ('puzzle2');

let caja2 = document.getElementById ('box2');

puzzles.addEventListener ('dragstart',inicioTraslado2);

puzzles.addEventListener ('dragend',finalDeTraslado2);

function inicioTraslado2 (evento){
    evento.dataTransfer.setData ('Text',"../assets/rompe2.png");

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


let terceraImagen = document.getElementById ('puzzle3');
let caja3 = document.getElementById ('box3');

terceraImagen.addEventListener ('dragstart',inicioTraslado3)

terceraImagen.addEventListener ('dragend',finalDeTraslado3);

function inicioTraslado3 (evento){
    evento.dataTransfer.setData ('Text',"../assets/Rompe3.png");

};

function finalDeTraslado3 (evento){
    terceraImagen.style.visibility="hidden";
};

caja3.addEventListener ('dragover',prevenirDefault3);

caja3.addEventListener ('drop',soltarElemento2);

function soltarElemento2 (evento) {

    let contenidoImg= evento.dataTransfer.getData ('Text');
    caja3.innerHTML= `<img id="puzzle3" src= "${contenidoImg}"/>`
};

function prevenirDefault3 (evento) {
    evento.preventDefault()
};

let boton = document.getElementById ('botonReset');

let juego = document.getElementById ('imagenesPuzzle');

boton.addEventListener ('click',()=>{
    

})