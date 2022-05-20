// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for (let i = 0; i < n; i++) { // external loop
//     for (let j = 0; j < n; j++) { // internal loop
//         string += "*";
//     }
//     // newline after each row
//     string += "\n";
// }
// // printing the string
// console.log(string);


// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++)  // external loop
//   for(let j = 0; j < n; j++) // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }

//     else 
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }


//       let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   // printing star
//   for (let j = 0; j < i; j++) {
//     if(i === n) {
//       string += "*";
//     }
//     else {
//       if (j == 0 || j == i - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);





let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);



// let k = 0;
// do {
//     console.log("" + k);
//     k += 1;
// }
// while (k < 10);


// countinue

let k = 0;
do {
    if (k === 5) {

        k += 1;
        continue;
    }
    console.log("" + k);
    k += 1;
}
while (k < 10);




let arr ={
    name :"Month",
    age:24,
    email:"abc@gmail.com",
    address:"bandal capital ,kothrude depot",
    mobile: "1234567890"
}
console.log(arr);

// for(let key in arr)
// console.log(arr[key])

