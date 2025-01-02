let textarea = document.querySelector("#textarea");

let para2 = document.querySelector("#para2");


   
    
textarea.addEventListener("keyup", () => {
    clength = textarea.value.length;
    let para = document.querySelector("#para");
     para.innerText = clength;
    para2.innerText = textarea.getAttribute("maxlength") - clength;
});