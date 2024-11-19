const btnC = document.querySelector("#btnC");
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
const btn11 = document.querySelector("#btn11");
const btn12 = document.querySelector("#btn12");
const btn13 = document.querySelector("#btn13");
const btn14 = document.querySelector("#btn14");
const btn15 = document.querySelector("#btn15");
const btn16 = document.querySelector("#btn16");
const screen = document.querySelector("#calCounter");

btn1.addEventListener("click", (one) => {
    screen.value += `${'1'}`;
    console.log("I am working");

});

btn2.addEventListener("click", (two) => {
    screen.value += `${'2'}`;
    console.log("I am working");

});

btn3.addEventListener("click", (three) => {
    screen.value += `${'3'}`;
    console.log("I am working");

});

btn4.addEventListener("click", (four) => {
    screen.value += `${'4'}`;
    console.log("I am working");

});

btn5.addEventListener("click", (five) => {
    screen.value += `${'5'}`;
    console.log("I am working");

});

btn6.addEventListener("click", (six) => {
    screen.value += `${'6'}`;
    console.log("I am working");

});

btn7.addEventListener("click", (seven) => {
    screen.value += `${'7'}`;
    console.log("I am working");

});

btn8.addEventListener("click", (eight) => {
    screen.value += `${'8'}`;
    console.log("I am working");

});

btn9.addEventListener("click", (nine) => {
    screen.value += `${'9'}`;
    console.log("I am working");

});

btn10.addEventListener("click", (ten) => {
    screen.value += `${'0'}`;
    console.log("I am working");

});

btn11.addEventListener("click", (eleven) => {
    screen.value += `${'+'}`;
    console.log("I am working");

});

btn12.addEventListener("click", (twelve) => {
    screen.value += `${'-'}`;
    console.log("I am working");

});

btn13.addEventListener("click", (therteen) => {
    screen.value += `${'.'}`;
    console.log("I am working");

});

btn14.addEventListener("click", (fourteen) => {
    screen.value += `${'*'}`;
    console.log("I am working");

});

btn15.addEventListener("click", (fifteen) => {
    screen.value += `${'/'}`;
    console.log("I am working");

});

btn16.addEventListener("click", (sixteen) => {
    screen.value = `${eval(screen.value)}`;
    console.log("I am working");

});

btnC.addEventListener("click", (C) => {
    screen.value = `${''}`;
    console.log("I am working");

});


