const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

 function barMove(e){
    //console.log(e);
    const y = e.pageY - this.offsetTop;
    //console.log(y); //we will turn this vlaue into percentage
    const percent = y/this.offsetHeight;
    //console.log(percent);
    //Now we need a min and max
    const min = 0.4;        //at o the video iwll stop so we can't have that
    const max= 8;
    const height = Math.round(percent*100) + '%';
    const playbackRate = percent * (max-min) + min;
    //console.log(height);  //this will give us heigh tof speedbar
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2)+'x';

    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', barMove);


// This project is built by Harshit Raj.
// This projects belongs to MedusaVerse.
// © Medusaverse