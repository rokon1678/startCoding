// window object

var a = 87365;


    
    let c = 83862;

    // forEach loop practice

    const arr = [7,4, 6, 5, 7, 6];

   arr.forEach(function(val){

    console.log(val-3);

   });


   const price = [12, 323, 24, 24, 64]

   price.forEach(() => {

    console.log(price.length);

   }) 

   // for in loop practice


  let obj ={
        name: "Rokon",
        age: 20, 
        city: "Natore", 
        occuppation: "student"

   };

   for( kye in obj) {

        console.log(obj.city = "pabna" );

   }


   // execution context 

   
   let d = 345;
   function alf() {
    v = d+30;
    function second (){
        e = 347;
        r = e + 90;
        return r;
    }
    return v;
    
   };

   console.log(alf());


   // falsy value 

   if ( 0) {
    console.log("hi I'm Rokon I like to play cricket");
   }else{
    console.log(" hi I'm Abid I like to play nothing");
   }


   if ( null) {
    console.log("hi I'm Rokon I like to play cricket");
   }else{
    console.log(" hi I'm Abid I like to play nothing");
   }

   
   if ( undefined) {
    console.log("hi I'm Rokon I like to play cricket");
   }else{
    console.log(" hi I'm Abid I like to play nothing");
   }

   
   if ( document.all) {
    console.log("hi I'm Rokon I like to play cricket");
   }else{
    console.log(" hi I'm Abid I like to play nothing");
   }

   
   if ( false) {
    console.log("hi I'm Rokon I like to play cricket");
   }else{
    console.log(" hi I'm Abid I like to play nothing");
   }

   // truthy value

   if ( 1) {
    console.log("hi I'm Rokon I like to play cricket");
   }else{
    console.log(" hi I'm Abid I like to play nothing");
   }


   
// how to copy reference value 

let j = [1, 2, 3, 4, 5, 6];

let l = [...j];

l.pop();
