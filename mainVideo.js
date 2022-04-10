
let botonPlay1 = document.getElementById ('botonPlay');

let botonPausa1 = document.getElementById ('botonPausa');

let video = document.querySelector ('video');

botonPlay1.addEventListener ('click',()=>{
    video.play()
});

botonPausa1.addEventListener ('click',()=>{
    video.pause()
}); 


  