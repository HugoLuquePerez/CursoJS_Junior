/* metodo setter */

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
        this.raza=undefined;
    }
    set setRaza(newName){
        this.raza=newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro",5,"rojo","American Standford");
const gato  = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1,"verde");

perro.modificarRaza("pedro");
document.write(perro.getRaza);