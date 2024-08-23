
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item =>{
    const tittle = item.querySelector(".accordion-tittle");
    const content = item.querySelector(".accordion-para");

    tittle.addEventListener("click", ()=>{
        for(i=0; i<accordionItems.length; i++){
            if(accordionItems[i] != item){
              accordionItems[i].classList.remove("active")
            }else{
                item.classList.toggle("active");
            }
        }
    });
});