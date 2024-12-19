const head1 = document.querySelector(".head1");
const head2 = document.querySelector(".head2");
const head3 = document.querySelector(".head3");

const infoDiv1 =document.querySelector(".infoDiv1");
const infoDiv2 =document.querySelector(".infoDiv2");
const infoDiv3 =document.querySelector(".infoDiv3");


head1.addEventListener("click", () => {
    infoDiv1.style.display = "block";
    infoDiv2.style.display = "none";
    infoDiv3.style.display = "none";

});


head2.addEventListener("click", () => {
    infoDiv1.style.display = "none";
    infoDiv2.style.display = "block";
    infoDiv3.style.display = "none";

});


head3.addEventListener("click", () => {
    infoDiv3.style.display = "block";
    infoDiv2.style.display = "none";
    infoDiv1.style.display = "none";

});

const refresh = document.querySelector(".refresh");

refresh.addEventListener("click", () => {
    infoDiv1.style.display = "none";
     infoDiv2.style.display = "none";
      infoDiv3.style.display = "none";
   
});