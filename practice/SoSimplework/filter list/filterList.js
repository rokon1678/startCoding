let input = document.querySelector(".input");
const search = document.querySelector("#search");
input.addEventListener("click", () => {
    search.style.opacity = "0.1";
    input.style.borderColor = "rgb(198, 199, 201"
});




   input.addEventListener("keyup", () => {
    
    filiter = input.value.toUpperCase();
    ul = document.querySelector(".ul");
    li = document.getElementsByTagName("li");
   
   for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
       textValue = a.textContent || a.innerText;
       if (textValue.toUpperCase().indexOf(filiter) > -1){
           li[i].style.display = "";
       }else{
           li[i].style.display = "none";
       }
   }
   
   }) ;

 