
let botonPlay = document.getElementById ("botonPlay");

let botonPausa = document.getElementById ("botonPausa");

let video = document.querySelector ('video');

botonPlay.addEventListener ('click',()=>{
    video.play ()
});

botonPausa.addEventListener ('click',()=>{
    video.pause()
});


