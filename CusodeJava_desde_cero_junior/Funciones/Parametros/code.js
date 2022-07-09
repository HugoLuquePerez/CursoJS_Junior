/* Parametros */
/* hacen que una funcion pueda variar su resultado pj */
/* se puede hacer funciones con parametros de varis maneras */

/*
function suma(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")
}
suma(12,32);
suma(22,55);
 */

/*
let suma = function(num1,num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")
}
suma(12,32);
suma(22,55); 
*/

/* Para esta forma en la parte de los parametros si es uno solo no hace falta parentesis  */
/* si dentro de la funcion solamente hay una expresion no hace falta llaves */

const suma = (num1,num2)=>{
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")
}
suma(12,32);
suma(22,55);