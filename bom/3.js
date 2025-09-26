
let div = document.querySelector("div");
function count() {
  div.textContent -= 1;
  console.log(div.textContent); // بتبين الأرقام عالكونسول
  if (div.textContent == 0) {
    clearInterval(counter);
    console.log("خلص العد");
  }
}
let counter = setInterval(count, 1000);