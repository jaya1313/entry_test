const boxes=document.querySelectorAll(".box");
const box1=document.querySelector("#box1");
const box2=document.querySelector("#box2");
const box3=document.querySelector("#box3");
const resetbtn=document.querySelector(".reset");
const total_count=document.querySelector(".total");

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

      let totalClicks=0;
     boxes.forEach((box) =>{
        const countText=box.parentElement.querySelector(".click p");
        box.addEventListener("click",() =>{
            let count= Number(box.getAttribute("data-count")) +1;
               box.setAttribute("data-count",count);
               countText.textContent="Clicks: "+count;
               totalClicks++;
               total_count.textContent="Total Counts: "+totalClicks;
        });
    });

    resetbtn.addEventListener("click",() =>{
        boxes.forEach((box,i) =>{
            box.dataset.index=0;
            box.dataset.count=0;
            totalClicks=0;  
            box.style.backgroundColor=colors[i];
            const countText=box.parentElement.querySelector(".click p");
            countText.textContent="Clicks: 0";
            total_count.textContent="Total Counts: 0";
        });
    });