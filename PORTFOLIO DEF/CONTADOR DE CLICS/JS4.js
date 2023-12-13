

let pulsador = document.getElementById(`pulsador`);
let contarNumeros = document.getElementsByClassName (`contador`)[0];
let contador = 0;
let reiniciar = document.getElementsByClassName(`reiniciar`)[0];



pulsador.addEventListener(`click`, ()=> {
    contador++;
    contarNumeros.textContent = contador;
})


reiniciar.addEventListener(`click`, ()=> {
	contarNumeros.textContent = 0;
	contador = 0;
})

