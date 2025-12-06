const items=document.querySelectorAll(".list1");
const mark=document.getElementById("mark");
const unmark=document.getElementById("unmark");
const count=document.getElementById("complete");
const pb=document.getElementById("pb");
let count1=0;

items.forEach(item =>{
    item.mode=true;
     item.addEventListener("click",()=>{
        if(item.mode){
        item.style.boxShadow="0px 4px 5px grey";
        item.style.textDecoration="line-through";
        item.style.color="grey";
        item.mode=false;
        count1++;
        }
        else{
         item.style.boxShadow="0px 4px 5px  brown";
        item.style.textDecoration="none";
        item.style.color="brown";
        item.mode=true;
         count1--;
        }
        count.innerText=count1+"/5";
        let percent=(count1/5)*100;
        pb.innerText=percent+"%";
     });
});
mark.addEventListener("click",()=>{
    items.forEach(item =>{
        item.style.boxShadow="0px 4px 5px grey";
        item.style.textDecoration="line-through";
        item.style.color="grey";  
        pb.innerText="100%";
        count.innerText="5/5";     
});
});
unmark.addEventListener("click",()=>{
    items.forEach(item =>{
        item.style.boxShadow="0px 4px 5px brown";
        item.style.textDecoration="none";
        item.style.color="brown";   
        pb.innerText="";
        count.innerText="";    
});
});