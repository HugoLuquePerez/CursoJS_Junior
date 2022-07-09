/* for in */
/* nos sirve pj; para trabajar con arrays y que nos devuelva su indice incluso las prpiedad tambien le podemos decir que nos decuelva el dato de la varieble en orden */

let animales = ["gato","perro","tiranosaurio rex"];
animales.edad = 20;

for (animal in animales){
    document.write(animales[animal] + "<br>")   /* document.write(animal + "<br>") */
}