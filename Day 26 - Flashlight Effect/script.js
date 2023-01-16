let mouseX=0;
let mouseY=0;
let flashlight = document.getElementById("flashlight");

//detect touch device
const isTouchDevice = () => {
    try{
        //a touchevent (it would fail for deskto pand show error)
        document.createEvent("Touch Event");
        return true;
    } catch(e){
        return false;
    }
};

function getMousePosition(e){
    mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

    flashlight.style.setProperty("--Xpos",mouseX + "px");
    flashlight.style.setProperty("--Ypos",mouseY + "px");
}

document.addEventListener("mousemove",getMousePosition);
document.addEventListener("touchmove",getMousePosition);

// This project is built by Harshit Raj.
// This projects belongs to MedusaVerse.
// © Medusaverse