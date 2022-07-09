/* 3 chicos van a una heladeria a comprar un helado pero hay un problema:
    Problema: los helados no tienen puestos los precios en sus estantes,
    ellos quieron comprar el helado mas caro con toda la plata que tienen.
    CREAR SOLUCIONES:
    -Pedirles que ingrsen el dineo que tienen y mostrarles el helado mas caro.
    -Si hay dos o mas del mismo precio mostrarlo todos.
    -Y decirle a cofla cuanto les sobra. */

    /* Precios de los helados: 
    Palito de helado de agua:0.6$
    Palito de heldo de crema: 1$
    Bombón helado marca heladix: 1.6$
    Bombón helado marca heladovich: 1.7$
    Bombón helado marca helardo: 1.8$
    Potecito de helado con confites: 2.9$
    Pote de 1/4: 2.9$ */

let dineroCofla = prompt("¿Cuanto dineros tienes Cofla?");  /* 3$ */
let dineroRoberto = prompt("¿cuanto dinero tienes Roberto?"); /* 1.5$ */
let dineroPedro = prompt("¿cuanto dinero tienes Pedro?"); /* 1.7$ */
dineroCofla = parseInt(dineroCofla);

/* SolucionesCofla: */

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate el helado de agua, Cofla.");
    alert("Y te sobran:" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Comprate el helado de crema, Cofla.")
    alert("Y te sobran:" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Comprate el bombón marca heladix, Cofla.");
    alert("Y te sobran:" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Comprate el bombón de marca heladovich, Cofla.")
    alert("Y te sobran:" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Comprate el bombón de marca helardo, Cofla.")
    alert("Y te sobran:" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("Comprate el helado con confites o el pote de 1/4 kg, Cofla.")
    alert("Y te sobran:" + (dineroCofla - 2.9));
}

else {
    alert("No te alcanza para ningun helado, lo siento Cofla.");
}

/* SolucionesRoberto */

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Comprate el helado de agua, Roberto.");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Comprate el helado de crema, Roberto.")
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Comprate el bombón marca heladix, Roberto.");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Comprate el bombón de marca heladovich, Roberto.")
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Comprate el bombón de marca helardo, Roberto.")
}

else if (dineroRoberto >= 2.9) {
    alert("Comprate el helado con confites o el pote de 1/4 kg, Roberto.")
}

else {
    alert("No te alcanza para ningun helado, lo siento Roberto.")
}

/* SolucionesPedro: */

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Comprate el helado de agua, Pedro.");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Comprate el helado de crema, Pedro.")
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Comprate el bombón marca heladix, Pedro.");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Comprate el bombón de marca heladovich, Pedro.")
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Comprate el bombón de marca helardo, Pedro.")
}

else if (dineroPedro >= 2.9) {
    alert("Comprate el helado con confites o el pote de 1/4 kg, Pedro.")
}

else {
    alert("No te alcanza para ningun helado, lo siento Pedro.");
}