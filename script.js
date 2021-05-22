const display = document.querySelector(".number");
let numberCounter=0;
const adding = document.querySelector(".add");
const sub = document.querySelector(".sub");

function add(){
    numberCounter++;
    display.innerHTML=numberCounter;
}

function subtract(){
    numberCounter--;
    display.innerHTML=numberCounter;
}

adding.addEventListener("click",()=>{
    add();
})

sub.addEventListener("click",()=>{
    subtract();
})