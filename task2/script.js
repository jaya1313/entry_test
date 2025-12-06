const contents=document.querySelectorAll(".content");
const buttons=document.querySelectorAll(".button");
const bio=document.getElementById("bio");
const skill=document.getElementById("skill");
const hobbies=document.getElementById("hobbies");
const show=document.querySelector("#show1");
const hide=document.querySelector("#hide1");
const section=document.querySelector("#section");
contents.forEach(content=>{
    content.style.display="none";
});
const enable=() =>{
    buttons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        
    });
});
      
}
buttons.forEach((button,index) =>{
    button.addEventListener("click",() =>{
        if(contents[index].style.display==="none"){
    contents[index].style.display="flex";
    if(index==0){
    buttons[index].innerText="HIDE BIO";
    section.innerText="Visible Section:"+"BIO";
    }
    if(index==1){
    buttons[index].innerText="HIDE SKILL";
    section.innerText="Visible Section:"+"SKILL";
    }
    if(index==2){
    buttons[index].innerText="HIDE HOBBIES";
    section.innerText="Visible Section:"+"HOBBIES";
    }
}
else{
   contents[index].style.display="none";
        if(index==0){
    buttons[index].innerText="SHOW BIO";
    section.innerText="";
    }
    if(index==1){
    buttons[index].innerText="SHOW SKILL";
    section.innerText="";
    }
    if(index==2){
    buttons[index].innerText="SHOW HOBBIES";
    section.innerText="";
    }
}
});
});

show.addEventListener("click",()=>{
    contents.forEach(content =>{
       content.style.display="flex";
    });
    
});
hide.addEventListener("click",()=>{
    contents.forEach((content,index) =>{
       content.style.display="none";
       section.innerText="";
        if(index==0){
    buttons[index].innerText="SHOW BIO";
    }
    if(index==1){
    buttons[index].innerText="SHOW SKILL";
    }
    if(index==2){
    buttons[index].innerText="SHOW HOBBIES";
    }
    });
    
});


