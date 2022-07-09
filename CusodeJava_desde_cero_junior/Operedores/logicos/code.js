/* operadores logicos: solo funcionan con valores logicos: true o false */
/* and(&&): sirve para verificar que los dos valores son true de lo contrario tirara false */

num1 = 12;
num2 = 24;

afirmacion1 = num1 < num2;
afirmacion2 = num1 !== num2;
    document.write(afirmacion1 && afirmacion2)

/* or(||): sirve para verificar si uno de los dos valores es verdadero es true si no hay ninguno verdadero es false */

    document.write(afirmacion1 || afirmacion2)

/* Not(!): sirve para hacer que si un valor es tru lo convirtamos en false y al contrario */

document.write(!afirmacion1)

/* Ejercicio:Operacion alargada dificultad intermedia */

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;
op = (num1 > num2 || num2 < num3) && (!(num1 < num3) && num5 != num3) 
    document.write(op)