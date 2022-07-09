/* c) Cofla ya tiene su nuevo telefono y ahora está mirando las aplicaciones de la Play Store ya que quiere juagar juegos que sean
muy populares, que tengan buena puntuación y quue pesen poco, pero las 7 apps que llamaron su ateción son un tanto similares
y sabe que si se descarga todas, probablement juegue con todas, pero él se va a descargar solo dos para tener pérdidas
innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidirse cual de todas estas
aplicaciones es la que se va a descargar.

    Crear soluciones
    
    - Crear un sistema que ayude a Cofla a decidir cual app descargar.
    - La información de los instaladores debe contener la cantidad de descargas y la puntuación.
    - Las apps se deben poder instalar abrir cerrar y desistalar.*/

class App{
    constructo(descargas,puntuacion,peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.inciciada=false;
        this.instalada=false;
    }
    abrir(){
        if(this.inciciada==false){
            this.inciciada=true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.inciciada==true){
            this.inciciada=false;
            alert("app cerrada");
        }
    }
    instalar(){
        if(this.instalada==false){
            this.instalada=true;
            alert("app isntalada correctamente")
        }
    }
    desinstalar(){
        if(this.instalada==true){
            this.instalada=false;
            alert("app desinstalada")
        }
    }
}

app = new App("16.000","5 estrellas","900mb");
App.instalar();
App.abrir();
App.cerrar();
App.desinstalar();