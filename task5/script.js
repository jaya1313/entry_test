const red=document.getElementById("button1");
const blue=document.getElementById("button2");
const green=document.getElementById("button3");
const yellow=document.getElementById("button4");
const count1=document.getElementById("count1");
const count2=document.getElementById("count2");
const count3=document.getElementById("count3");
const count4=document.getElementById("count4");
const leader=document.querySelector(".leader");
let count=[0,0,0,0];
red.addEventListener("click",()=>{
    count[0]++;
    count1.innerText=count[0];
    if(count[0]>count[1] && count[0]>count[2] && count[0]>count[3]){
            leader.innerText="RED with clicks "+count[0];
}
else if(count[1]>count[0] && count[1]>count[2] && count[1]>count[3]){
            leader.innerText="BLUE with clicks "+count[1];
}
else if(count[2]>count[0] && count[2]>count[1] && count[2]>count[3]){
            leader.innerText="GREEN with clicks "+count[2];
}
else if(count[3]>count[0] && count[3]>count[1] && count[3]>count[2]){
            leader.innerText="YELLOW with clicks "+count[3];
}
 else{
            leader.innerText="TIE";
 }
});

blue.addEventListener("click",()=>{
    count[1]++;
    count2.innerText=count[1];
    if(count[0]>count[1] && count[0]>count[2] && count[0]>count[3]){
            leader.innerText="RED with clicks "+count[0];
}
else if(count[1]>count[0] && count[1]>count[2] && count[1]>count[3]){
            leader.innerText="BLUE with clicks "+count[1];
}
else if(count[2]>count[0] && count[2]>count[1] && count[2]>count[3]){
            leader.innerText="GREEN with clicks "+count[2];
}
else if(count[3]>count[0] && count[3]>count[1] && count[3]>count[2]){
            leader.innerText="YELLOW with clicks "+count[3];
}
 else{
            leader.innerText="TIE";
 }
});
green.addEventListener("click",()=>{
    count[2]++;
    count3.innerText=count[2];
    if(count[0]>count[1] && count[0]>count[2] && count[0]>count[3]){
            leader.innerText="RED with clicks "+count[0];
}
else if(count[1]>count[0] && count[1]>count[2] && count[1]>count[3]){
            leader.innerText="BLUE with clicks "+count[1];
}
else if(count[2]>count[0] && count[2]>count[1] && count[2]>count[3]){
            leader.innerText="GREEN with clicks "+count[2];
}
else if(count[3]>count[0] && count[3]>count[1] && count[3]>count[2]){
            leader.innerText="YELLOW with clicks "+count[3];
}
 else{
            leader.innerText="TIE";
 }
});
yellow.addEventListener("click",()=>{
    count[3]++;
    count4.innerText=count[3];
    if(count[0]>count[1] && count[0]>count[2] && count[0]>count[3]){
            leader.innerText="RED with clicks "+count[0];
}
else if(count[1]>count[0] && count[1]>count[2] && count[1]>count[3]){
            leader.innerText="BLUE with clicks "+count[1];
}
else if(count[2]>count[0] && count[2]>count[1] && count[2]>count[3]){
            leader.innerText="GREEN with clicks "+count[2];
}
else if(count[3]>count[0] && count[3]>count[1] && count[3]>count[2]){
            leader.innerText="YELLOW with clicks "+count[3];
}
 else{
            leader.innerText="TIE";
 }
});
const btns=[red,blue,green,yellow];
let maxcount=Math.max(...count);
let maxIndex=count.indexOf(maxcount);
const resetbtn=document.querySelector(".resetbtn");
resetbtn.addEventListener("click",() =>{
            leader.innerText="";
            count[0]=0;
            count1.innerText="";
            count[1]=0;
            count2.innerText="";
            count[2]=0;
            count3.innerText="";
            count[3]=0;
            count4.innerText="";
})