
// for loop task

// for (let i = 1; i <= 5 ; i++) {
//     console.log ('Allah is one');
// }
// console.log("countdowm has end");

// let sum = 0;
// let n = 100 ;

// for (let r = 1; r <= n; r++) {
//     sum = sum + r; //sum = 15
// }
// console.log( "sum =", sum);
// console.log("countdowm has end");


// while loop task

// let r = 1;
// while (r <= 5) {
//     console.log('I love');
//     r++;
// }

// do-while task

// let m = 1;

// do {
//     console.log('This is a loop');
//     m++;
// } while (m <= 10);


// let's learn (for-of loops)

// let str = "Assalamualaikum";
// let size = 0;
// for (let r of str) {
//     console.log ("r=", r);
//     size++;
// }

// console.log("size =", size); 


// let's learn (for-in loops)

let teacher = {
    name : "Nazirul",
    age : 30,
    pro : "Hadeeth",
    istitution : "msmfm",
};

for (let key in teacher) {
    console.log("key =", key, "value =", teacher[key]);
}