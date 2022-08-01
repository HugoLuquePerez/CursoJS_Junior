/* minlength
sirve para decir cuantos caracter debe tener como minimo par apoder enviar el input*/

const input = document.querySelector(".input-normal");

input.minLength = 4;

/* tambien podemos usarlo para modificarlo desde html */

input.setAttribute("minlength","2");