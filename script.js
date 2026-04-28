let points=0;
let taps=0;
let i=0;
let r=0;

const text="Welcome Precy & Babi 💜";
const reasons=["Kind","Loving","Funny","Caring","Patient"];
const prizes=["💜 Kiss","💙 Hug","Try again","💜 Love","💙 Lucky"];

function unlock(){
let pass=document.getElementById("passwordInput").value;
if(pass==="Babi"){
document.getElementById("gameArea").classList.remove("hidden");
typeText();
showSection('mainSec');
}else{
document.getElementById("unlockMsg").innerText="Wrong 💔";
}
}

function typeText(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text[i++];
setTimeout(typeText,50);
}
}

function showSection(id){
document.querySelectorAll(".section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}

function showReason(){
document.getElementById("reasonBox").innerText=reasons[r++%reasons.length];
}

function spinWheel(){
let idx=Math.floor(Math.random()*prizes.length);
document.getElementById("wheel").style.transform="rotate("+(1440+idx*60)+"deg)";
setTimeout(()=>{
document.getElementById("wheelResult").innerText=prizes[idx];
},3000);
}

function scratch(){
document.getElementById("scratchResult").innerText="💜 Love unlocked";
}

function chat(){
let msgs=["Hi","I love you","Miss you","Babi 💜"];
document.getElementById("chatBox").innerText=msgs[Math.floor(Math.random()*msgs.length)];
}
countdown();
