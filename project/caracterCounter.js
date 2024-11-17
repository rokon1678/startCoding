const counterText = document.querySelector("#counterText");
const counting1 = document.querySelector("#counting1");
const counting2 = document.querySelector("#counting2");

counterText.addEventListener("keyup", () => {
    counteAll();
});

counteAll();

function counteAll(){
counting1.innerText = counterText.value.length;
counting2.innerText = counterText.getAttribute ("maxlength") - counterText.value.length;

};




// const counterText = document.querySelector("#counterText");
// const counter1 = document.querySelector("#counting1");
// const counting2 = document.querySelector("#counting2");


// counterText.addEventListener("keyup", () => {

//     count ();
// });

// count ();


// function count () {
//     counter1.innerText = counterText.value.length;
//     counting2.innerText = counterText.getAttribute("maxlength") - counterText.value.length;
// }