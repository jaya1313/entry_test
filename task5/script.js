const red=document.getElementById("button1");
const blue=document.getElementById("button2");
const green=document.getElementById("button3");
const yellow=document.getElementById("button4");
const count1=document.getElementById("count1");
const count2=document.getElementById("count2");
const count3=document.getElementById("count3");
const count4=document.getElementById("count4");
let count=[0,0,0,0];
red.addEventListener("click",()=>{
    count[0]++;
    count1.innerText=count[0];
});

blue.addEventListener("click",()=>{
    count[1]++;
    count2.innerText=count[1];
});
green.addEventListener("click",()=>{
    count[2]++;
    count3.innerText=count[2];
});
yellow.addEventListener("click",()=>{
    count[3]++;
    count4.innerText=count[3];
});
const btns=[red,blue,green,yellow];
let maxcount=Math.max(...count);
let maxIndex=count.indexOf(maxcount);
