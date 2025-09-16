let header = document.createElement("header");
let logo = document.createElement("span");
logo.textContent="Elzero";
header.appendChild(logo);

let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent="Home";
let li2 = document.createElement("li");
li2.textContent="About";
let li3 = document.createElement("li");
li3.textContent="Service";
let li4 = document.createElement("li");
li4.textContent="Contact";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
header.appendChild(ul);
// how to make css to those ?   
document.body.appendChild(header);

header.style.cssText="display:flex;justify-content:space-between;align-items:center;padding:20px;font-family:Arial, sans-serif";
logo.style.cssText="color:#23a96e;font-weight:bold;font-size:26px;";
ul.style.cssText="list-style:none;display:flex;gap:20px;margin:0;padding:0";

let grid = document.createElement("div");
grid.className="grid";
document.body.appendChild(grid);
grid.style.cssText="background-color: #eaebecff ;display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:20px;font-family:Arial, sans-serif";
for (let i=1;i<=15;i++){
    let product = document.createElement("div");
    product.className="product"; 
    let pnum = document.createElement("span");
    pnum.textContent=i;

    product.appendChild(pnum);

    product.style.cssText="background-color:#f7f7f7;border:1px solid #ddd;border-radius:5px;padding:20px;text-align:center;";

    grid.appendChild(product);
    pnum.style.cssText="display:block;font-size:25px;color:#23a96e;margin-bottom:10px;";
    
}

    document.body.appendChild(product);