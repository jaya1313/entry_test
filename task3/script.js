const input=document.querySelector("#textId");
const typed=document.querySelector("#text");
const upper=document.querySelector("#upper");
const lower=document.querySelector("#lower");
const count=document.querySelector("#char");
const clear=document.querySelector(".clear");
const copy=document.querySelector(".copy");
const copiedmsg=document.querySelector(".msg");
input.addEventListener("input",()=>{
    let val=input.value;
    typed.innerText=" "+val;
    upper.textContent=" "+val.toUpperCase();
    lower.textContent=" "+val.toLowerCase();
    count.textContent=" "+val.length;
});
clear.addEventListener("click",()=>{
    input.value="";
    typed.innerText="";
    upper.textContent="";
    lower.textContent="";
    count.textContent="";
});
copy.addEventListener("click",()=>{
    
})
