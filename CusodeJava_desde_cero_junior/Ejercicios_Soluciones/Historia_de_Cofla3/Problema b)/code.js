/* Cofla no esta satisfecho con los telefonos asi que decide ir a la seccion de telefonos de gma alta, donde va a poder
encontrar los telefonos mas caris del lugar, así que al entrar vió dos telefonos que le encataron, estos dos telefonos de gama
alta puede hacer todo lo que podia hacer los 3 anteriores pero tiene mejores caracteristicas y además pueden grabar en camara super lenta, tiene reconocimiento facial y una camara extra.

    Crear soluciones
    
    - Implementar todas las cuaidades en los dos celulares de gama alta.*/

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

    class CelularAltaGama extends Celular{
        constructor(color,peso,tamaño,rdc,ram,rdce){
            super(color,peso,tamaño,rdc,ram);
            this.resolucionDeCamaraExtra=rdce;
        }
        grabarVideoLento(){
            alert("estas grabando en camara lenta");
        }
        reconocimientoFacial(){
            alert("vamos a iniciar un reconocimiento facial");
        }
        infoAltaGama(){
            return this.mosbileInfo() + `Resolución de Cámara Extra: ${this.resolucionDeCamaraExtra}`
        }
    }
    
    celular1=new CelularAltaGama("rojo","130g","5,2","4k","3gb","Full HD");
    celular2=new CelularAltaGama("negro","142g","6","4k","4gb","HD")
    
    document.write(`
        ${celular1.infoAltaGama()} <br> <br>
        ${celular2.infoAltaGama()} <br>

    `);