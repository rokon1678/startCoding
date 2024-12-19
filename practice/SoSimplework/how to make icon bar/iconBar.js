const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");
const icon4 = document.querySelector("#icon4");
const icon5 = document.querySelector("#icon5");

icon1.addEventListener("click", () => {
    icon1.style.backgroundColor = "green";
    icon2.style.backgroundColor = "";
    icon3.style.backgroundColor = "";
    icon4.style.backgroundColor = "";
    icon5.style.backgroundColor = "";

});

icon2.addEventListener("click", () => {
    icon2.style.backgroundColor = "green";
    icon1.style.backgroundColor = ""
    icon3.style.backgroundColor = "";
    icon4.style.backgroundColor = "";
    icon5.style.backgroundColor = "";
});

icon3.addEventListener("click", () => {
      icon2.style.backgroundColor = "";
    icon1.style.backgroundColor = ""
    icon3.style.backgroundColor = "green";
    icon4.style.backgroundColor = "";
    icon5.style.backgroundColor = "";
});

icon4.addEventListener("click", () => {
    icon2.style.backgroundColor = "";
    icon1.style.backgroundColor = ""
    icon3.style.backgroundColor = "";
    icon4.style.backgroundColor = "green";
    icon5.style.backgroundColor = "";
});

icon5.addEventListener("click", () => {
    icon2.style.backgroundColor = "";
    icon1.style.backgroundColor = ""
    icon3.style.backgroundColor = "";
    icon4.style.backgroundColor = "";
    icon5.style.backgroundColor = "green";
});
