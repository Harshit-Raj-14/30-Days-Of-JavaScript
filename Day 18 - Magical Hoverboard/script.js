const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#f2e335', '#ef4a92']

const container = document.getElementById('container');
const SQUARES_NR = 280;
let isMagic=false;

for(let i=0; i<SQUARES_NR; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mousemove', () =>{
        setColor(square)
    });
    
    square.addEventListener('mouseout', () =>{
        removeColor(square)
    });

    container.appendChild(square);   
}

if(isMagic == true) PlayAudio();
    console.log(isMagic);

function setColor(e1){
    const color = getRandomColor();
    e1.style.background = color;
    e1.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
    isMagic=true;
    
}

function removeColor(e1){
    e1.style.background = `#111111`;
    e1.style.boxShadow = `0 0 2px #fff`;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function PlayAudio() {
    var audio = new Audio('Audio/piano.mp3');
    audio.play();
    console.log("playing");
  }

