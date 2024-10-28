// let's drive into function

function myFunction (FullName, age, qualification ) {
    console.log("Hello I am " + FullName + ' my age is ' + age + ' I am ' + qualification);
}

myFunction('Rokon', 20, 'Student')

// crite a subscribed button

function MyFunction() {
    let checke = document.querySelector("#subscribed").innerHTML= "Subscribed";
    alert  ('Subscribed');
   
    console.log(checke);
    for (let i = 0; i < 10; i++){
        console.log( "I subscribed")
      
    }
    
    
}

let identify = document.querySelector("#subscribed");
identify.addEventListener ('click', MyFunction);

// auto call function

(function (message){
    console.log(' I need ' +  message )
})("your help");