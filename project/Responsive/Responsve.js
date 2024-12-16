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


const button = document.querySelector("#btn");
const dinamicNumber = document.querySelector("#dinamicNumber");
let proved = 0;

function btn () {
    
        proved +=1;
       let notMainCount = dinamicNumber.innerText = proved;
      
  
};