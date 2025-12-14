const body=document.querySelector("body");
const red=document.getElementById("R");
const yellow=document.getElementById("Y");
const green=document.getElementById("G");
const pink=document.getElementById("P");
const brown=document.getElementById("BR");
const blue=document.getElementById("BL");
const currentColor=document.querySelector(".current");
const random=document.querySelector(".random");
const favBtn=document.querySelector(".fav");
const aplFavBtn=document.querySelector(".apl");


const colors=["red","yellow","green","pink","brown","blue"];

red.addEventListener("click",()=>{
    body.style.backgroundColor=colors[0];
    currentColor.innerText=colors[0];
})

yellow.addEventListener("click",()=>{
    body.style.backgroundColor=colors[1];
    currentColor.innerText=colors[1];
})

green.addEventListener("click",()=>{
    body.style.backgroundColor=colors[2];
    currentColor.innerText=colors[2];
})

pink.addEventListener("click",()=>{
    body.style.backgroundColor=colors[3];
    currentColor.innerText=colors[3];
})

brown.addEventListener("click",()=>{
    body.style.backgroundColor=colors[4];
    currentColor.innerText=colors[4];
})

blue.addEventListener("click",()=>{
    body.style.backgroundColor=colors[5];
    currentColor.innerText=colors[5];
})
function getRandomColor(){
       const randomIndex= Math.floor(Math.random()*colors.length);
       return colors[randomIndex];
}

random.addEventListener("click",()=>{
    const selectedColor=getRandomColor();
    body.style.backgroundColor=selectedColor;
    currentColor.innerText=selectedColor;
})
