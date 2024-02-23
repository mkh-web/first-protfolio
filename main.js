//where i willl put the elemnet

const obj = {
    x : document.getElementById("header-list"),
    hiddenelement : document.querySelectorAll(".hidden"),
    headers : document.getElementById("header"),
    loader : document.querySelector(".loader"),
    lang : document.querySelector("#lang"),
}



//loader animaiton
window.addEventListener("load",()=>{
  document.querySelector("#loader-text").innerHTML = "Compelet"
  obj.loader.classList.add("loader-hidden")

document.body.removeChild(obj.loader)
})

//responsvie menu

function openM() {
     if (obj.x.className == "header-list") {
       obj.x.classList.add("responsive");
     } else {
       obj.x.className = "header-list";
     }
   }

   obj.x.addEventListener("click",openM)


//
   const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        entry.target.classList.add("show")
      }else{
        entry.target.classList.remove("show")
      }

    })  
   })

   obj.hiddenelement.forEach((el)=> observer.observe(el))



   //header color when scrolling
   addEventListener("scroll",()=>{

    if(scrollY == 700){
      obj.headers.classList.add("headercolor");
      
    } else if(scrollY < 700){
      obj.headers.classList.remove("headercolor");
   }
  })

  addEventListener("change",()=>{
    switch (obj.lang.value){
      case "en-US":

      break;
        
        case "ar-KSA":
      
      break;

    }
    
  })