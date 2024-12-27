const containerDiv = document.querySelector(".containerDiv");
const containerDiv2 = document.querySelector(".containerDiv2");
const containerDiv3 = document.querySelector(".containerDiv3");
const containerDiv4 = document.querySelector(".containerDiv4");
const containerDiv5 = document.querySelector(".containerDiv5");
const changePhoto = document.querySelector(".changePhoto");

const previous = document.querySelector("#previous");
const Next = document.querySelector("#Next");
changePhoto.forEach(r => {
    let count = changePhoto.firstElementChild.src.count;
    Next.addEventListener("click", () => {
        containerDiv2.style.display = "block";
        containerDiv.style.display = "none";
       
        document.querySelector(".span2").style.backgroundColor = " rgb(58, 57, 57)";
        document.querySelector(".span1").style.backgroundColor = "#fff";
        console.log("I am working");
    });
});





// lets check

const p = document.querySelector("p");
const btn = document.querySelector("button");

let test = 0 ;
btn.addEventListener("click", () => {
    // test.test += 1;
    p.innerText = test += 1;
});

