const Name1 = document.querySelector(".Name1");
const Name2 = document.querySelector(".Name2");
const Name3 = document.querySelector(".Name3");
const Name4 = document.querySelector(".Name4");

const mainInfoDiv1 = document.querySelector(".mainInfoDiv1");
const mainInfoDiv2 = document.querySelector(".mainInfoDiv2");
const mainInfoDiv3 = document.querySelector(".mainInfoDiv3");
const mainInfoDiv4 = document.querySelector(".mainInfoDiv4");


Name1.addEventListener("click", () => {
    Name1.style.backgroundColor = "red";
    Name2.style.backgroundColor = "";
    Name3.style.backgroundColor = "";
    Name4.style.backgroundColor = "";
    mainInfoDiv1.style.display = "block";
    mainInfoDiv1.style.backgroundColor = "red";
    mainInfoDiv1.style.color = "white";
    mainInfoDiv2.style.display = "none";
    mainInfoDiv3.style.display = "none";
    mainInfoDiv4.style.display = "none";
})


Name2.addEventListener("click", () => {
    Name2.style.backgroundColor = "green";
    Name1.style.backgroundColor = "";
    Name3.style.backgroundColor = "";
    Name4.style.backgroundColor = "";
    mainInfoDiv2.style.display = "block";
    mainInfoDiv2.style.backgroundColor = "green";
    mainInfoDiv2.style.color = "white";
    mainInfoDiv1.style.display = "none";
    mainInfoDiv3.style.display = "none";
    mainInfoDiv4.style.display = "none";
})


Name3.addEventListener("click", () => {
    Name3.style.backgroundColor = "blue";
    Name1.style.backgroundColor = "";
    Name2.style.backgroundColor = "";
    Name4.style.backgroundColor = "";
    mainInfoDiv3.style.display = "block";
    mainInfoDiv3.style.backgroundColor = "blue";
    mainInfoDiv3.style.color = "white";
    mainInfoDiv2.style.display = "none";
    mainInfoDiv1.style.display = "none";
    mainInfoDiv4.style.display = "none";
})



Name4.addEventListener("click", () => {
    Name4.style.backgroundColor = "red";
    Name1.style.backgroundColor = "";
    Name3.style.backgroundColor = "";
    Name2.style.backgroundColor = "";
    mainInfoDiv4.style.display = "block";
    mainInfoDiv4.style.backgroundColor = "red";
    mainInfoDiv4.style.color = "white";
    mainInfoDiv2.style.display = "none";
    mainInfoDiv3.style.display = "none";
    mainInfoDiv1.style.display = "none";
});

const refresh = document.querySelector(".refresh");

refresh.addEventListener("click", () => {
    Name1.style.backgroundColor = "";
    Name2.style.backgroundColor = "";
    Name3.style.backgroundColor = "";
    Name4.style.backgroundColor = "";
    mainInfoDiv1.style.display = "none";
    mainInfoDiv2.style.display = "none";
    mainInfoDiv3.style.display = "none";
    mainInfoDiv4.style.display = "none";
})