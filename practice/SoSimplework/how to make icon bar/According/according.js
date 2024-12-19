const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

const subBox1 = document.querySelector(".subBox1")
const subBox2 = document.querySelector(".subBox2")
const subBox3 = document.querySelector(".subBox3")

const ic = document.querySelector("#ic");
const ico = document.querySelector("#ico");
const icon = document.querySelector("#icon");

const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");


let ts = 0;



box1.addEventListener("click", () => {
    if(ts === 0) {
        subBox1.style.display = "block";
        ic.style.display = "none";
        icon1.style.display = "block";
        ts = 1;
    }else{
        subBox1.style.display = "none";
        icon1.style.display = "none";
        ic.style.display = "block";
        ts = 0;
    }
});

let ttss = 0;
box2.addEventListener("click", () => {
    if(ttss === 0) {
        subBox2.style.display = "block";
        ico.style.display ="none";
        icon2.style.display ="block";
    ttss = 1;
    }else{
        subBox2.style.display = "none";
    icon2.style.display ="none";
    ico.style.display ="block";
    ttss = 0;
    };
});

let tsss = 0;
box3.addEventListener("click", () => {
   if(tsss === 0){
    subBox3.style.display = "block";
    icon.style.display = "none";
    icon3.style.display = "block";
    tsss = 1;
   }else{
    subBox3.style.display = "none";
    icon3.style.display = "none";
    icon.style.display = "block";
    tsss = 0;
   };
});