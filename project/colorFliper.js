const colorFliper = document.querySelector("#colorFliper");

const colorFliperBtn = document.querySelector("#colorFliperBtn");

let countColor = 0;

colorFliperBtn.addEventListener("click", () => {

if( countColor === 0) {
    colorFliper.style.backgroundColor = 'green';
    console.log("I am working");
    countColor = 1;
} else if (countColor === 1) {
    colorFliper.style.backgroundColor = "blue";
    countColor = 0;
}else if(countColor === 0){
    colorFliper.style.backgroundColor = "red";
    countColor = 0;
}else{
    colorFliper.style.backgroundColor = "pink";
}
})