

let btn = document.getElementById("btn");


function colorRgbAleatorio() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let colorRgb = `rgb(${r} , ${g} , ${b})`;
	return colorRgb;
}


btn.addEventListener (`click` , ()=> {
	let randomColor = colorRgbAleatorio();
	btn.style.backgroundColor = randomColor;
})





