const as1 = document.querySelector("#ans1");
const as2 = document.querySelector("#ans2");
const as3 = document.querySelector("#ans3");
const as4 = document.querySelector("#ans4");
const next = document.querySelector("#next");

let check = 0;

as1.addEventListener("click", function(){
  if(check === 0 ) {
    as1.style.color = "white";
    as1.style.backgroundColor = "red";
    as1.style.border = "none";
    //as2
    as2.style.color = "white";
    as2.style.backgroundColor = "green";
    as2.style.border = "none";

    //as3
    as3.style.color = "white";
    as3.style.backgroundColor = "red";
    as3.style.border = "none";

    //as4
    as4.style.color = "white";
    as4.style.backgroundColor = "red";
    as4.style.border = "none";

    next.style.display = "block";
    // console.log("I am working");
   check = 1;
  } else{
    as1.style.color = "";
    as1.style.backgroundColor = "";
    as1.style.border = "";
    check = 0;
  }

})

// reapit 2


as2.addEventListener("click", function(){
    if(check === 0 ) {
      as1.style.color = "white";
      as1.style.backgroundColor = "red";
      as1.style.border = "none";
      //as2
      as2.style.color = "white";
      as2.style.backgroundColor = "green";
      as2.style.border = "none";
  
      //as3
      as3.style.color = "white";
      as3.style.backgroundColor = "red";
      as3.style.border = "none";
  
      //as4
      as4.style.color = "white";
      as4.style.backgroundColor = "red";
      as4.style.border = "none";
  
      next.style.display = "block";
      // console.log("I am working");
     check = 1;
    } else{
      as1.style.color = "";
      as1.style.backgroundColor = "";
      as1.style.border = "";
      check = 0;
    }
  
  })

  //reapit 3

  
as3.addEventListener("click", function(){
    if(check === 0 ) {
      as1.style.color = "white";
      as1.style.backgroundColor = "red";
      as1.style.border = "none";
      //as2
      as2.style.color = "white";
      as2.style.backgroundColor = "green";
      as2.style.border = "none";
  
      //as3
      as3.style.color = "white";
      as3.style.backgroundColor = "red";
      as3.style.border = "none";
  
      //as4
      as4.style.color = "white";
      as4.style.backgroundColor = "red";
      as4.style.border = "none";
  
      next.style.display = "block";
      // console.log("I am working");
     check = 1;
    } else{
      as1.style.color = "";
      as1.style.backgroundColor = "";
      as1.style.border = "";
      check = 0;
    }
  
  })


  //reapit4

  
as4.addEventListener("click", function(){
    if(check === 0 ) {
      as1.style.color = "white";
      as1.style.backgroundColor = "red";
      as1.style.border = "none";
      //as2
      as2.style.color = "white";
      as2.style.backgroundColor = "green";
      as2.style.border = "none";
  
      //as3
      as3.style.color = "white";
      as3.style.backgroundColor = "red";
      as3.style.border = "none";
  
      //as4
      as4.style.color = "white";
      as4.style.backgroundColor = "red";
      as4.style.border = "none";
  
      next.style.display = "block";
      // console.log("I am working");
     check = 1;
    } else{
      as1.style.color = "";
      as1.style.backgroundColor = "";
      as1.style.border = "";
      check = 0;
    }
  
  })

  next.addEventListener("click", function(){
    window.location.replace("http://127.0.0.1:5500/start%20html/Javascript/function/javaQuize/quize.html")
  })