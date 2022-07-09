
/* Sistema ideal para hacer POO */

/* Abstracción: es a lo que llamamos resumir el codigo o mas bien no acomplejarlo de manera que si estamos creando un coche vamos a darle el metodo rodar, pero no le vamos adar un rodar lento, semi lento... */
/* Modularidad: a lo quer llamamos dividir un problema de gran magnitud en partes para solucionarlas y por consecuencia resolver el gran problema */
/* Encapsulamiento: hacer que todo los dtos sean privados para que los usuarios no se le sea tan facil ingresar a los datos */
/* Polimorfismo: es la capacidad que tiene un objeto par comportarse distinto por su propiedades cuando pj tienen el metodo caminar */

/* PJ: Polimorfismo no todos los animales pueden ladrar */

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
    ladrar(){
        if(this.especie=="perro"){
            document.write("waw"+"<br>");
        }
        else{
            document.write("No puede ladrar, ya que es un"+this.especie+"<br>");
        }
    }
}

/* herencia con super(): los usamos para ahorranos codigo y otros uso que se pueden compartir */
/* extends; selo añadimos al objeto de una clase para definir algo mas sobre ese objeto en concreto */

class Perro extends Animal{
    constructor(especie,edad,color,raza) {
        super(especie,edad,color);
        this.raza=raza;
    }
    ladrar(){
        alert ("waw");
    }
}

let perro = new Perro("perro",5,"rojo","American Standford");
let gato  = new Animal("gato",2,"negro");
let pajaro = new Animal("pajaro",1,"verde");

perro.verInfo();
perro.ladrar();
gato.verInfo();
gato.ladrar();
pajaro.verInfo();
pajaro.ladrar();