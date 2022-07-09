/* filter()
crea un nuevo array con tododos los elementos que cumplan la condición. */

let numeros = ["abecedario","manzana","pedro","dedo","bobo"];
let resultado = numeros.filter(numero => numero.length > 3);
document.write(resultado+"<br>");