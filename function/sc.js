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
btn.addEventListener("click", function() {
  btn.innerHTML = "From the moment we enter the world, the first thing that becomes a part of us and shapes our identity is our name. The name given to us at birth remains with us for life, forming a core aspect of our identity. Therefore, choosing a baby’s name is a significant decision for parents. They actively seek distinctive, unique names that distinguish their child from others. This process demonstrates thoughtfulness and intention, and the chosen name accompanies the child on a journey of self-love, confidence, and body positivity right from the start. If you close your eyes and whisper a name, do specific images, emotions, or memories arise? This represents the hidden power of names. Let’s delve into their captivating influence on who we are"
})