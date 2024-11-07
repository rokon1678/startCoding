/*let shape = document.querySelector("#middle");

shape.addEventListener("mousemove", function(details){

    let caheckIt = shape.getBoundingClientRect();
    let insideShape = details.clientX - caheckIt.left;
    
    if(insideShape < caheckIt.width / 2){
            let setColorRed = gsap.utils.mapRange(
                0, caheckIt.width / 2, 255, 0, insideShape
            );

            gsap.to(shape, {
                backgroundColor: `rgb(${setColorRed}, 0, 0)`,
                ease: Power4,

            });
    }else {
        let setColorBlue = gsap.utils.mapRange(
             caheckIt.width / 2, caheckIt.width, 0, 255, insideShape
        );

        gsap.to(shape, {
            backgroundColor: `rgb(0, 0, ${setColorBlue})`,
            ease: Power4,

        });
    }

});

shape.addEventListener("mouseleave", function(){
    gsap.to(shape, {
        backgroundColor: "white",
    })
})
*/





let structure = document.querySelector("#center");

structure.addEventListener("mousemove", function(info){
    let loction = structure.getBoundingClientRect();
    let stlocation = info.clientX - loction.left;

    if(stlocation < loction.width / 2){
        let colorRed = gsap.utils.mapRange(
            0, loction.width / 2, 255, 0, stlocation
        );

        gsap.to(structure, {
            backgroundColor: `rgb(${colorRed}, 0, 0)`,
            ease: Power4,
        });
    }else{
        let colorBlue = gsap.utils.mapRange(
            loction.width / 2, loction.width, 0, 255, stlocation
        );

        gsap.to(structure, {
            backgroundColor: `rgb(0, 0, ${colorBlue})`,
            ease: Power4,
        });
    }


  

});

structure.addEventListener("mouseleave", function(){
    gsap.to(structure, {
        backgroundColor: "white",
    });
})