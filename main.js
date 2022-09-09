var yel_lam_01 = document.getElementById("yel_lam_01");
var gr_lam = document.getElementById("gr_lam");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")



// yel_lam_01 move
yel_lam_01.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    yel_lam_01.style.left = random + "px";
    counter++
})

//gr_lam move
window.addEventListener("keydown", function(e){
    if(e.keyCode == "39"){ var gr_lamLeft = parseInt(window.getComputedStyle(gr_lam).getPropertyValue("left"))
     if(gr_lamLeft < 260){gr_lam.style.left = (gr_lamLeft + 130) + "px"}
     jumpsound.play()
 };
 
     if(e.keyCode == "37"){
         var gr_lamLeft = parseInt(window.getComputedStyle(gr_lam).getPropertyValue("left"))
         if(gr_lamLeft > 0){gr_lam.style.left = (gr_lamLeft - 130) + "px"
         jumpsound.play()
     }
 
     }
 })


//Game over
setInterval(function Gameover (){
    var yel_lam_01Top = parseInt(window.getComputedStyle(yel_lam_01).getPropertyValue("top"))
    var yel_lam_01Left = parseInt(window.getComputedStyle(yel_lam_01).getPropertyValue("left"));
    var gr_lamLeft = parseInt(window.getComputedStyle(gr_lam).getPropertyValue("left"));
        if((yel_lam_01Left === gr_lamLeft) && (yel_lam_01Top > 250) && (yel_lam_01Top < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)
