const image = document.querySelector("#image");
const paraText = document.querySelector("#paragraph");
const nameText = document.querySelector("#name");
const div2 = document.querySelector("#div2");

div2.addEventListener("mousemove", () => {
image.src = "piture1.jpg";
paraText.innerText = "We’d been using Trusted Shops for around 8 years but it became really expensive. It also didn’t offer much flexibility. We wanted a platform that gave us the features we needed at a fair price.";
nameText.innerText = "Abdullah";

});


div2.addEventListener("mouseout", () => {
    image.src = "rokon final.png";
    paraText.innerText = "I really like your commpany products. for the first time I thought you do not have much better product in your company but now I realize no that was incorrect Thanks for your better services.";
    nameText.innerText = "croner de";
    
    
    });