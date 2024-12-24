const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".containerDiv");
const icon = document.querySelector("#icon");

btn.addEventListener("click", () => {
    containerDiv.style.display = "block";
    containerDiv.animate([
        {
         
            transform : "translate(-100%)",

        },
        {
            transform: "translate(0%)",
        },
    ],{
        duration:500,
        direction:"normal",
    });
});

icon.addEventListener("click", () => {
    
    containerDiv.style.display = "none";
   

   
});