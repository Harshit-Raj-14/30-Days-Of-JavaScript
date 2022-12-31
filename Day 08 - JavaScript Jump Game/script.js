var player = document.getElementById("player");
var block = document.getElementById("block");
var counter=0;

function jump(){
    if(player.classList == "animate"){return}
    player.classList.add("animate");
    setTimeout(function(){
        player.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft<10 && blockLeft>-10 && playerTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1.3s infinite linear";
    }
    else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
