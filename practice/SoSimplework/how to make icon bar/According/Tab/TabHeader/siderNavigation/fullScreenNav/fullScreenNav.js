const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".containerDiv");
const icon = document.querySelector("#icon");

btn.addEventListener("click", () => {
    containerDiv.style.display = "block";
    containerDiv.animate([
        {
         
            transform : "scaleX(0)",

        },
        {
            transform: "scaleX(1)",
        },
    ],{
        duration:3000,
        direction:'right',
    })
});

icon.addEventListener("click", () => {
    containerDiv.style.display = "none";
});