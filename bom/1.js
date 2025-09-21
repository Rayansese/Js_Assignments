let prompt = window.prompt("Print Number From - To","5-20");
// console.log(prompt);
let pos = prompt.indexOf("-"); 

let firstPart = parseInt(prompt.substring(0, pos));

let secondPart = parseInt(prompt.substring(pos + 1));
for(let i = Math.min(firstPart,secondPart); i <= Math.max(secondPart,firstPart); i++){
    console.log(i);
}
