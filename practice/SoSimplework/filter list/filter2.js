let input = document.querySelector(".input");
input.addEventListener("keyup", () => {
    filter = input.value.toUpperCase();
    ul = document.querySelector(".ul");
    li = ul.getElementsByTagName("li");
    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        condition = a.textContent || a.innerText;
        if(condition.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else {
            li[i].style.display = "none";
        }
    };
});