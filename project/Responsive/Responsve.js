const icon = document.querySelector("#icon");
const iconDivOne = document.querySelector("#iconDivOne");
let test = 0;

icon.addEventListener("click", () => {
    if (test == 0) {
        iconDivOne.style.display = "block";
        test = 1;
    } else {
        iconDivOne.style.display = "none";
        test = 0;
    }

});




const btn = document.querySelector("#btn");
const dinamicNumber = document.querySelector("#dinamicNumber");
let putOthersIamge = document.querySelector("#cartImage");
const subSectionOneProductAreaOne = document.querySelectorAll(".subSectionOneProductAreaOne");
let proved = 0;
let manage = 0;

subSectionOneProductAreaOne.forEach(juj => {
    // console.log(subSectionOneProductAreaOne);
    btn.addEventListener("click", () => {
        proved += 1;
        dinamicNumber.innerText = proved;
        subSectionOneProductAreaOne.firstElementChild.src = putOthersIamge;  
       
    });
});
