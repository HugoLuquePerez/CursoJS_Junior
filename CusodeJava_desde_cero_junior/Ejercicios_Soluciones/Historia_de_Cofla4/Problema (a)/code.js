/* a) Cofla ya está terminando el primer semestrre del primer circlo, la tareea que le dene realizar es mucho mas avanzada de la que tenia antes, además de suma, reta, multiplicación y división,
 ahora tancién necesitará calcular potencias, raices cuadradas y cúbicas. */

    /* Crear Soluciones
    
    -perfeccionar la calculadora par poder implementar nuevas funciones.*/

    class Calculadora {    
        sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    
        restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    
        dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    
        multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num1,exp){
        return parseInt(num1) ** parseInt(exp);
    }
    raizCuadrada(num1){
        return Math.sqrt(num1);
    }
    riazCubica(num1){
        return Math.cbrt(num1);
    }

}
const calculadora = new Calculadora
    
alert("¿Que opereacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicacion, 5: Potenciar, 6: Raiz Cuadrada, 7: Raiz Cubica");
    
    if(operacion == 1){
        let numero1 = prompt("Primer número para sumar:");
        let numero2 = prompt("Segundo número para sumar:");
        let resultado = calculadora.sumar(numero1,numero2);
        alert(`La suma de ${numero1} y ${numero2} es = ` + resultado);
    }
    else if(operacion==2){
        let numero1=prompt("Primer número para restar:");
        let numero2=prompt("Segundo número para restar:");
        let resultado=calculadora.restar(numero1,numero2);
        alert(`La resta de ${numero1} y ${numero2} es = `+resultado);
    }
    else if(operacion==3){
        let numero1=prompt("Primer número para dividir:");
        let numero2=prompt("Segundo número para dividir:");
        let resultado=calculadora.dividir(numero1,numero2);
        alert(`La division de ${numero1} y ${numero2} es = ` + resultado)
    }
    else if(operacion==4){
        let numero1=prompt("Primer número para multiplicar:");
        let numero2=prompt("Segundo número para multiplicar:");
        let resultado=calculadora.multiplicar(numero1,numero2);
        alert(`La multiplicion de ${numero1} y ${numero2} es = ` + resultado)
    }
    else if(operacion==5){
        let numero1=prompt("Primer número para potenciar:");
        let numero2=prompt("Segundo número a exponer");
        let resultado=calculadora.potenciar(numero1,numero2);
        alert(`La poteciación de ${numero1} y ${numero2} es = ` + resultado)
    }
    else if(operacion==6){
        let numero1=prompt("¿De que numero deseas saber la raiz cuadrada?");
        let resultado=calculadora.raizCuadrada(numero1);
        alert(`La raiz cuadrada de ${numero1} es = ` + resultado)
    }
    else if(operacion==7){
        let numero1=prompt("Número que deseas sbar la raiz cubica");
        let resultado=calculadora.riazCubica(numero1);
        alert(`La raiz cubica de ${numero1} es = ` + resultado)
    } 
    else{
        alert("Esta operacion no es valida.")
    }