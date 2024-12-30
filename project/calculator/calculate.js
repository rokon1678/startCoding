
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn10 = document.querySelector("#btn10");

const calCounter = document.querySelector("#calCounter");


 btn1.addEventListener("click", (one) => {
    calCounter.value += `${'1'}`;
    console.log("i am working");
}) ;



btn2.addEventListener("click", (one) => {
    calCounter.value += `${'2'}`;
    console.log("i am working");
}) ;



btn3.addEventListener("click", (one) => {
    calCounter.value += `${'3'}`;
    console.log("i am working");
}) ;


btn4.addEventListener("click", (one) => {
    calCounter.value += `${'4'}`;
    console.log("i am working");
}) ;



btn5.addEventListener("click", (one) => {
    calCounter.value += `${'5'}`;
    console.log("i am working");
}) ;



btn6.addEventListener("click", (one) => {
    calCounter.value += `${'6'}`;
    console.log("i am working");
}) ;



btn7.addEventListener("click", (one) => {
    calCounter.value += `${'7'}`;
    console.log("i am working");
}) ;



btn8.addEventListener("click", (one) => {
    calCounter.value += `${'8'}`;
    console.log("i am working");
}) ;



btn9.addEventListener("click", (one) => {
    calCounter.value += `${'9'}`;
    console.log("i am working");
}) ;

btn10.addEventListener("click", (zero) => {
    calCounter.value += `${'0'}`;
});

const btn11 = document.querySelector("#btn11");
const btn12 = document.querySelector("#btn12");
const btn13 = document.querySelector("#btn13");
const btn14 = document.querySelector("#btn14");
const btn15 = document.querySelector("#btn15");
const btn16 = document.querySelector("#btn16");
const btnC = document.querySelector("#btnC");

btnC.addEventListener("click", (C) => {
    calCounter.value = "";
});

btn11.addEventListener("click", (eleven) => {
    calCounter.value += `${'+'}`;
});

btn12.addEventListener("click", (zero) => {
    calCounter.value += `${'-'}`;
});

btn13.addEventListener("click", (zero) => {
    calCounter.value += `${'.'}`;
});

btn14.addEventListener("click", (zero) => {
    calCounter.value += `${'*'}`;
});

btn15.addEventListener("click", (zero) => {
    calCounter.value += `${'/'}`;
});

btn16.addEventListener("click", (zero) => {
    calCounter.value = `${eval(calCounter.value)}`;
});