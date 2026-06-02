const hearts = document.getElementById("hearts");

if(hearts){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML=Math.random()>0.5 ? "💙" : "☁️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(6+Math.random()*10)+"s";

heart.style.fontSize=
(15+Math.random()*25)+"px";

heart.style.animationDelay=
Math.random()*10+"s";

hearts.appendChild(heart);

}

}

function playMusic(){
document.getElementById("song").play();
}
