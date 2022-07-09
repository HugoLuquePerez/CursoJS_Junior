/* Podemos concatenar de varias formas con dos strings */

saludo = "hola pedro";
pregunta = " ¿como estas? ";
frase = saludo + pregunta;
    document.write(frase)

/* o con un string y un number */

frase2 = "Mi edad es ";
number = 17;
resultado = frase2 + number;
document.write(resultado)

/* para concatenar dos numeros seria de esta forma */

number2 = 53;
number3 = 8;
resultado2 = " " + number2 + " " + number3;
document.write(resultado2)

/* tambie se puede con .concat */

number4 = " 66 ";
number5 = 18;
resultado3 = number4.concat(number5);
document.write(resultado3)

/* ultima forma de concatenar ${} */

conversacion = "Hugo Pérez";
conversacion1 = ` soy ${conversacion} y estoy caminando`;

document.write(conversacion1)