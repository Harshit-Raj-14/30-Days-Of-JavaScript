const {body} = document;
let ZoomActive = false;

window.addEventListener('click', () => {
    ZoomActive = !ZoomActive;
});

window.addEventListener('mousemove', (e) => {
    const{clientX: x, clientY: y} =e;

    if(ZoomActive){
        body.style.transform = `scale(2)`
        body.style.transformOrigin = `${x}px ${y}px`
    } else{
        body.style.transform = `none`
    }
})


// This project is built by Harshit Raj.
// This projects belongs to MedusaVerse.
// © Medusaverse