let i = 1; 
for (let i = 1; i<6; i++) {
    console.log(i+ " - " +(i*i));
}

console.log(8 + 4);
console.log(8 - 4);
console.log(8 / 4);
console.log(8 * 4);


let x = "55";
let y = 88;
console.log(x / y);

let temperature =25.5;
console.log("Cslsius" + "-" + 25.5);
console.log("Kelvin" + "-" + (273 + temperature));

let hour = 5;
console.log(60 * 5);
console.log((60 * 5) * 60);


let speed1 = 36;
function myCalculation () {
    let km = 36 * 1000;
    let sd = 60 * 60;
    return km / sd;
}

console.log(myCalculation ());

function numberMirror(n){
    return "N";
 }
 
 console.log(numberMirror());

function totalAmount(x, y, h) {
    if (h <= 1) {
        console.log(x);
    } else {
        console.log(x + (h - 1) * y);
    }
}

console.log( totalAmount(10, 1, 5) );

// // Input related code. Please do not change this.
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function(input) {
//   const nums = input.trim().split(' ');
//   const x = parseInt(nums[0]); 
//   const y = parseInt(nums[1]); 
//   const h = parseInt(nums[2]); 
//   totalAmount(x, y, h);
// });




let t = myFunction(4, 3 , "This is a simle text");
document.getElementById("demo").innerHTML = t;

function myFunction(a, b, st) {
 
  return a * b + st;}
//   document.getElementById("demo").innerHTML = ;
 

let a = 7;
let b = 3;
console.log(a / b);
let changing = "abid";
 changing = "rokon";
console.log(changing);


 