const display = document.querySelector(".number");
const adding = document.querySelector(".add");
const sub = document.querySelector(".sub");
const parent = document.querySelector(".num-display");
const child = parent.children;
adding.addEventListener("click",addingNum);

function addingNum(e){
    display.innerText = child.length;
}