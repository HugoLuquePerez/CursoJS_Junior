/* calculadora */

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que opereacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicacion");

if(operacion == 1){
    let numero1 = prompt("Primer número para sumar:");
    let numero2 = prompt("Segundo número para sumar:");
    let resultado = sumar(numero1,numero2);
    alert(`La suma de ${numero1} y ${numero2} es =` + resultado);
}
else if(operacion==2){
    let numero1=prompt("Primer número para restar:");
    let numero2=prompt("Segundo número para restar:");
    let resultado=restar(numero1,numero2);
    alert(`La resta de ${numero1} y ${numero2} es =`+resultado);
}
else if(operacion==3){
    let numero1=prompt("Primer número para dividir:");
    let numero2=prompt("Segundo número para dividir:");
    let resultado=dividir(numero1,numero2);
    alert(`La division de ${numero1} y ${numero2} es =` + resultado)
}
else if(operacion=4){
    let numero1=prompt("Primer número para multiplicar:");
    let numero2=prompt("Segundo número para multiplicar:");
    let resultado=multiplicar(numero1,numero2);
    alert(`La multiplicion de ${numero1} y ${numero2} es =` + resultado)
}
else{
    alert("Esta operacion no es valida.")
}