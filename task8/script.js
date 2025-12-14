const success=document.querySelector(".success");
const warning=document.querySelector(".warning");
const error=document.querySelector(".error");
const info=document.querySelector(".info");
const su=document.querySelector(".su");
const wa=document.querySelector(".wa");
const er=document.querySelector(".er");
const In=document.querySelector(".in");
const clear=document.querySelector(".clear");

success.addEventListener("click",()=>{
    su.style.display="block";
});
warning.addEventListener("click",()=>{
    wa.style.display="block";
});
error.addEventListener("click",()=>{
    er.style.display="block";
});
info.addEventListener("click",()=>{
    In.style.display="block";
});
clear.addEventListener("click",()=>{
    
})