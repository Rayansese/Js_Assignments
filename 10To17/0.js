let varName = { title: "Elzero", desc: "Elzero Web School", data: "25/10" };
let x = `<div>
<h3>${varName.title}</h3>
<p>${varName.desc}</p>
<span>${varName.data}</span>
</div>
`;
document.write(x.repeat(4));
