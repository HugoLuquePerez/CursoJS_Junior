/* Las caracteristicas que vamos a ver son herencia y extends ya las conocemos */

class Animal {
    constructor(especie,edad,color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info = `soy ${this .especie}, tengo ${this.edad}, y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza) {
        super(especie,edad,color);
        this.raza=raza;
    }
    ladrar(){
        alert ("¡waw!");
    }
}

let perro = new Perro("perro",5,"rojo","American Standford");
let gato  = new Animal("gato",2,"negro");
let pajaro = new Animal("pajaro",1,"verde");

perro.ladrar();