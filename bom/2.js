let showPopup = function() {
let popup = document.createElement("div");
popup.className = "popup";
let btn = document.createElement("button");
btn.textContent = "X";
popup.appendChild(btn);
btn.onclick = function() {
    document.body.removeChild(popup);
};
popup.appendChild(document.createTextNode("This is a popup"));
popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    background-color: #eee;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    `

btn.style.cssText = `
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    // color: white;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    `

document.body.appendChild(popup);
}
setTimeout(showPopup, 2500);
const myPopup = new Popup({
    id: "my-popup",
    title: "My First Popup",
    content: `
        An example popup.
        Supports multiple lines.`,
});
