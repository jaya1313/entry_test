const like=document.querySelector(".like");
const dislike=document.querySelector(".dislike");
const re=document.querySelector(".remove");
const opp=document.querySelector(".opp");
const display=document.querySelector(".display");
const score=document.querySelector(".totalScore");
const reset=document.querySelector(".reset");
const countLike=document.querySelector(".co");
const countDislike=document.querySelector(".co1");

let count=0;
like.addEventListener("click",()=>{
    count++;
    countLike.innerText=count;
    score.innerText=count-count1;
     display.innerText="👍";
});
 let count1=0;
dislike.addEventListener("click",()=>{
    count1++;
    countDislike.innerText=count1;
    score.innerText=count-count1;
     display.innerText="👎";
});
re.addEventListener("click",() =>{
         count=0;
         count1=0;
         countLike.innerText=count;
         countDislike.innerText=count1;
})
opp.addEventListener("click",()=>{
    countLike.innerText=count1;
    countDislike.innerText=count;

});

reset.addEventListener("click",()=>{
         count=0;
         count1=0;
         countLike.innerText=count;
         countDislike.innerText=count1;
         score.innerText="0";
         display.innerText="";
         count=0;
         count1=0;
});