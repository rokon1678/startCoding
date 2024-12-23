const sidebarNav = document.querySelector(".sidebarNav");
const containerDiv = document.querySelector(".containerDiv");
const icon = document.querySelector("#icon");

sidebarNav.addEventListener("click", () => {
    containerDiv.style.display = "block";
});

icon.addEventListener("click", () => {
    containerDiv.style.display = "none";

});