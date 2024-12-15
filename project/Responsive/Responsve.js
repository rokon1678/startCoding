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

