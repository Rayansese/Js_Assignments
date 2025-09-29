let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
arr3[0] = arr3[1]
arr3[1] = arr3[2];
arr3[2]= arr1[0]
let [a,b,c] = arr3
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

