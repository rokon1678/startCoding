const header = document.querySelector("header");
let test = 0;

window.addEventListener("scroll", () => {
    let check = window.pageYOffset || document.documentElement.check;
    if(check > test){
        header.style.top ="-5vw";
    }else{
        header.style.top ="0vw";
    }

    // test = check;
});