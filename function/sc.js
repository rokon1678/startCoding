let sub = document.querySelector("#subscribed");
let chake = 0;
sub.addEventListener("click",  function(){
  if(chake === 0) {
    
    sub.innerHTML = "Subscribed";
    alert ("Subcribed");
    chake = 1;
  }else {
    sub.innerHTML = "Subscribe";
    alert ("Unsubscirbed");
    chake = 0;
  }


})


let btn = document.querySelector("#click");
let again = 0;
btn.addEventListener("click", function() {
  if( again === 0){
     btn.innerHTML = " Click me again to look my change</br></br></br>From the moment we enter the world, the first thing that becomes a part of us and shapes our identity is our name. The name given to us at birth remains with us for life, forming a core aspect of our identity. Therefore, choosing a baby’s name is a significant decision for parents. They actively seek distinctive, unique names that distinguish their child from others. This process demonstrates thoughtfulness and intention, and the chosen name accompanies the child on a journey of self-love, confidence, and body positivity right from the start. If you close your eyes and whisper a name, do specific images, emotions, or memories arise? This represents the hidden power of names. Let’s delve into their captivating influence on who we are"
     again = 1;
  }else{
    btn.innerHTML = "click me to look my cahnge";
    again = 0;
  }
 
})

let ig = document.querySelector("#image");
let cond = 0;

ig.addEventListener("click", function() {
 if(cond === 0){
  ig.src = "IMG20240618150124.jpg";
  cond = 1;
 }else{
   ig.src = "IMG20231224170212.jpg";
   cond = 0;
 }


})

// Drop down menue

let btt = document.querySelector("#btn");
let div = document.querySelector("#last_div");
let need = 0;

btt.addEventListener("click", function(){
 if(need === 0) {
  div.style.display = "block";
  need = 1;
 }else {
  div.style.display = "none";
  need = 0;
 }

});


// icon drop down

let ic = document.querySelector("#icon");
let down = document.querySelector("#consider_list");
let compare= 0;

ic.addEventListener("click", function(){
  if(compare === 0) {
    down.style.display = "block";
    compare = 1;
  }else {
    down.style.display = "none";
    compare = 0;
  }

});
