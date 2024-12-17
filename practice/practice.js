// let tody_test = 0;
// document.querySelector('.lets_style') .innerText = `Your Bag has ${ tody_test} items;`




// const job = document.querySelector(".job");

// job.addEventListener("click", () => {
//     job.src = "mesurement of mind.jpg";
//     console.log('I am working');
// });

const btn = document.querySelectorAll(".btn");
const job = document.querySelector(".job");
btn.forEach(element => {
    console.log(btn);
    btn.addEventListener("click", () => {
        job.src = "mesurement of mind.jpg";
    });
});

