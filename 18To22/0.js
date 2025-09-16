/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // print => 11+20+80-11 // now a=12 // b=21 // c=81
console.log(++a + -b + +c++ - -a++ + +a); // print => 13-21 + 81 + 13 +14=74 // now a=14//b=21//c=82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//(82-1)+21+((14-1)*21)-(22*13)+12 -1

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

document.write(-d*+e + "\n"); // 2000
document.write(f/+(+e+g)); // 173