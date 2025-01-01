const input = document.querySelector(".input");
const search = document.querySelector("#search");
input.addEventListener("click", () => {
    search.style.opacity = "0.1";
    input.style.borderColor = "rgb(198, 199, 201"
});



// let val = area.innerText;
// let valu =input.value ;
// console.log(valu);
input.addEventListener("keyup", () => {
    console.log(input.value);
});

const h2 = document.querySelectorAll("h2");
const area = document.querySelectorAll(".area");
area.forEach(function (value) {
    // fillter();
    console.log(h2.innerText);
});

// function fillter () {
//     if(valu !==val){
//         area.value;
//         console.log("i am working");
//     }else{
//         console.log("I am not working");
//     }
// };


