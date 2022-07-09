/* para hacer que un bucle pare el ciclo. */

let numero = 0;

while(numero < 1000) {
    numero++;
    document.write(numero);
    if (numero == 10){
        break;
    }
}

document.write("fin");