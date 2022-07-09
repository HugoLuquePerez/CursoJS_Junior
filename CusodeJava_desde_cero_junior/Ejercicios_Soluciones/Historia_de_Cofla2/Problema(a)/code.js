/* a) Un joven muy afortunado logró ganar el primer premio de la lotería... exacto, estamos hablando del pobre al que cofla le
dió una mano, este pobre decide hacer una fiesta para festejar que salió de la pobreza con este millonario compró una máquina
que dejara pasar solamente a los mayores de edad, entre otras cosas...

        -Dejar pasar solo a los mayores de edad.
        -La primer persona que entre despues de las 2 AM, no paga. */

let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cuantos años tienes?");
    if(edad >= "18"){
        if(time >= 2 && time <7 && free == false){
            alert("Usted puede pasar, la entrada la paga la casa ¡disfrute!");
            free = true;
        }
        else{
            alert("Podes pasar pero tienes que pagar entrada.")
        }
    }
    else{
        alert("Perdona pero no puedes entrar a la fiesta, minimo 18 años.");
    }
}

validarCliente("23");
validarCliente("2");
validarCliente("14");
validarCliente("5");
validarCliente("8");
validarCliente("3");