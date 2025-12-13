const image=document.querySelector(".image");
const number=document.querySelector(".number");
const text=document.querySelector(".text");
const dots=document.querySelectorAll(".dots div");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const last=document.querySelector(".last");
const first=document.querySelector(".first");

const color=["red","blue","yellow","green","brown"];
let index=0;
let length=color.length -1;
image.style.backgroundColor= "rgb(83, 73, 73)";

next.addEventListener("click",()=>{
    if(index < color.length){
        let n=index+1;
        image.style.backgroundColor=color[index];
        number.innerText="image "+ n;
        text.innerText= "Image - "+n+" of 5";
        index++;
        prev.style.backgroundColor="#555";
        prev.style.textDecoration= "none";
        
    }
    else{
        next.style.backgroundColor= "#555";
        next.style.textDecoration= "line-through";
    }
});

prev.addEventListener("click",()=>{
    if(index > 0){
        let p=index-1;
        index--;
    image.style.backgroundColor=color[index-1];
    number.innerText="image "+ p;
     text.innerText= "Image - "+p+" of 5";
     next.style.backgroundColor="#555";
     next.style.textDecoration= "none";

    }
    else{
        prev.style.backgroundColor= "#555";
        prev.style.textDecoration= "line-through";
    }
})
image.style.backgroundColor= "rgb(83, 73, 73)";

first.addEventListener("click",()=>{
    image.style.backgroundColor=color[0];
    number.innerText="image "+ 1;
    text.innerText= "Image - 1of 5";
    prev.style.textDecoration= "line-through";
    next.style.textDecoration= "none";
})

last.addEventListener("click",()=>{
    image.style.backgroundColor=color[length];
    number.innerText="image "+ 5;
    text.innerText= "Image - 5 of 5";
    next.style.textDecoration= "line-through";
    prev.style.textDecoration= "none";
})

dots.forEach((dots,i) =>{
        dots.style.backgroundColor="black";
        
})

