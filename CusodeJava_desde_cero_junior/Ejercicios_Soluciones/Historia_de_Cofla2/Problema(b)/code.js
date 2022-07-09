/* b) Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir...
Al otro día comienzan las clases del ciclo básico de la universidad (porque cofla quiere programador y se inscribió en la 
facultad de ingenieria para estudiar desarrollo de sofware).
En su curso en total son 19 alumnos, pero surgio un problema que complicó un poco la facultad:
se rompió el sistema  de registro de asistencias y durenta los próximos 30 dias no see podrán hacer registros de datos de
ningun tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.
        
        -Crea un minisistema que nos permita resgistrar los alumnosque esten presentes (P) y ausentes (A) en clase.
        -Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes).
        -Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta suspenso.*/

        /* Procedimiento para crear el sistema:
        -le hacemos saber al sistema cuantos alumnos son.
        -le decimos cuales son los nombres de los alumnos.
        -luego vamos a hacer que la maquina pase alumno por alumnos cada dia para sumare la presencia o la ausencia.
        -vamos hacer que la maquina nos muestre todos los alumnos con su registro de asistencia.
        -  */

    /* con el let cantidad vamos hacer saber al sistema cuantos alumnos son */

let cantidad = prompt("¿cuantos alumnos sois?");
let alumnosTotales = [];

/* vamos a usar un for para hacer saber a la maquina cuales son los nombres de los alumnos y que lleve la posicion de cada uno */

for (i = 0;i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre de el alumno " + (i+1)),0];
}

/* una contante con funcion la cual hace que se confirme si el alumnos ha asistido a clase y la maquina le sumara la asistencia */

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

/* con este for hacemos que se pase la lista de alumnos los 30 dias pra verificar su asistencia */

for (i = 0; i < 30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}<br>
    ________Presentes: ${alumnosTotales[alumno][1]}<br>
    ________ausencias: ${30-alumnosTotales[alumno][1]}`;
    if (30-alumnosTotales[alumno][1]>18){
        resultado+= "Supenso por tener mas de un 10% de ausencias a clase";
    }
    else{
        resultado+= "<br></br>";
    }
    document.write(resultado);
}

