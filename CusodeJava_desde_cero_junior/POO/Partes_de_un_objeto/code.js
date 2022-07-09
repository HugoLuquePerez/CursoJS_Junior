/* POO */
/* Con class declaramos la clae de un objeto */
/* constructor: sirve para darle propiedades al obejeto atraves del parametros */
/* atributo o propiedades: son la que le añadimos en los parametros al constructor para luego especificarlos */

class animal {
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

let perro = new animal("perro",5,"rojo");
let gato  = new animal("gato",2,"negro");
let pajaro = new animal("pajaro",1,"verde");

/* en vez de usar el document.write para los tres  hacemos un method (metodo) con un document que nos diga la ifo del animal.  */

/* document.write(perro.info +"<br>");
document.write(perro.info +"<br>");
document.write(perro.info +"<br>");  */

/* instaciación: ahora mecionamos la info de los animales que queremos ver */

perro.verInfo();
gato.verInfo();
pajaro.verInfo();