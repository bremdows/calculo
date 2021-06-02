"use strict";
document.addEventListener('DOMContentLoaded', () => {
	console.log("El documento esta listo para ejecutar código JS");

	agregarBlank();

})

function agregarBlank(){
	let enlaces,
		contador; 
	enlaces = document.querySelectorAll("a");
	contador = 0;

	enlaces.forEach( (enlace) => {
		enlace.setAttribute("target", "_blank");
	});

	console.log(contador)

}