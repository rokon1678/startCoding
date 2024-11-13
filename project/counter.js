const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const count = document.querySelector("#count");

let check = 0;

btn1.addEventListener('click', function(){
    
check += 1; 
count.innerHTML = check;


})


btn2.addEventListener('click', function(){
    
    check = 0; 
    count.innerHTML = check;
    
    
    })

    btn3.addEventListener('click', function(){
    
        check -= 1; 
        count.innerHTML = check;
        
        
        })