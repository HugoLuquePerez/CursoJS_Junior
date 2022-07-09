/* A) Cofla entró a una tienda de celulares porque le pareció bastante bien comprarse un nuevo celular.
De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención 3 telefonos especificamente.
El problema es que ningun vendedor sabbe nada al respecto  entonces no pueden recomendarle absolutamente nada... pero claro:
el antes de comprar esos delulares quiere ver las cualidades y comportamientos de cada uno para poder compararlos, ahi 
entramos nosotros.

    Crear soluciones
    
    - Crear un sistema para mostrole a cofla las particularidades de los 3 telefonos.
    - Cada telefono debe tener color, peso, resolución de camara y memoria ram.
    - Cada telefono debe poder prender, reiniciar, apagar, tomar fotos y grabar. */

class Celular{
    constructor(color,peso,tamaño,rdc,ram){
        this.color=color;
        this.peso=peso,
        this.tamaño=tamaño;
        this.resolucionDeCamara=rdc;
        this.memoriaRam=ram;
        this.encendido=false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("el telefono se esta encendiendo.");
            this.encendido=true;
        }
        else{
            alert("el telefono esta apagandose.");
            this.encendido=false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando telefono");
        }
        else{
            alert("el telefono esta apagado");
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`video tomado en una resolucion de: ${this.resolucionDeCamara}`);
    }
    mosbileInfo(){
        return`
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolución de Video; <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>`;
    }
}

celular1=new Celular("rojo","150g","5","HD","1gb");
celular2=new Celular("negro","155g","5,4","Full HD","2gb");
celular3=new Celular("blanco","15046g","5,9","Full HD","2gb");

/* celular1.presionarBotonEncendido();
celular1.tomarFotos();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido(); */

document.write(`
    ${celular1.mosbileInfo()} <br>
    ${celular2.mosbileInfo()} <br>
    ${celular3.mosbileInfo()} <br>
`);