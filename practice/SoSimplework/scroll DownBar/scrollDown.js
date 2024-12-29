const div1 = document.querySelector(".div1");
const btn = document.querySelector(".btn");


window.addEventListener("scroll", () => {
   
   if(document.body.scrollTop > 7 || document.documentElement.scrollTop > 7){
    btn.style.display = "block";
   
   }else{
    btn.style.display = "none";
    
   }

});

// let clc = calc(100% - 50px);

btn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});