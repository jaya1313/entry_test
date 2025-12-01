const boxes=document.querySelectorAll(".box");
const box1=document.querySelector("#box1");
const box2=document.querySelector("#box2");
const box3=document.querySelector("#box3");


    // box1.addEventListener("click",() =>{
    //     box1.style.backgroundColor="rgb(130, 218, 130)";
    // });
    // box2.addEventListener("click",() =>{
    //     box2.style.backgroundColor="rgb(246, 125, 125)";
    // });
    // box3.addEventListener("click",() =>{
    //     box3.style.backgroundColor="rgb(101, 101, 163)";
    // });

    const colors=['rgb(246, 125, 125)','rgb(130, 218, 130)',
        'rgb(101, 101, 163)'];
     boxes.forEach(box =>{
        box.addEventListener("click",() =>{
            let i= Number(box.dataset.index);
            i=(i+1)% colors.length;
            box.style.backgroundColor=colors[i];
            box.dataset.index=i;
        });
     }) ;  