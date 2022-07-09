/* Condicionales: uso y definicion */
/* If: si el valor que se le indica es true va a realizar la accion */

let nombre = prompt("decime tu nombre");

    if(nombre == "Hugo Perez") {
        alert("hola " + nombre)
    }

/* else if: si el el valor de arriba es false va hacer otra funcion */

    else if(nombre == "dalto") {
        alert("¿Tu nombre es?" + nombre)
    }

/* else: si ninguna de las condiciones se cumple va a realizar esta funcion */

    else {
        alert("¡Ese no es tu nombre!")
    }