/* a) Terminó el primer semestre y cofla no sabe si aprobará o no las materias, para lograrlo necesitará:
Contar co al menos el 90% de asistencias,
El promedio por materia debe ser almenos 7/10.
Debe tener almenos del 75% de los trabajos practicos entregados.

    - Solicitar los datos y decirle si aprueba o no. 
    - Mostar todo esto con colores representativos en consola (ej: no aprobar en rojo) */

    let materias={
        fisica: [90,6,4,"fisica"],
        mat: [84,8,2,"matematicas"],
        logica: [92,8,4,"logica"],
        quimica: [96,8,4," quimica"],
        calculo: [91,6,3,"calculo"],
        programcion: [79,7,4,"programcion"],
        biologia : [75,9,2,"biologia"],
        bbdd: [98,9,1,"bbdd"],
        algebra: [100,10,4,"algebra"]
    }
    
    const asistencia = ()=>{
        for (materia in materias){
            let asistencias = materias[materia][0];
            if(asistencias >= 90){
                console.log(`${materias[materia][3]}`);
                console.log("%c    Aprobado","color:green");
            }
            else{
                console.log(`${materias[materia][3]}`);
                console.log("%c    Suspenso","color:red");
            }
        }
    }
    
    const media = ()=>{
        for (materia in materias){
            let medias = materias[materia][1];
            if(medias >= 7){
                console.log(`${materias[materia][3]}`);
                console.log("%c    Aprobado","color:green");
            }
            else{
                console.log(`${materias[materia][3]}`);
                console.log("%c   Suspenso","color:red");
            }
        }
    }

    const trabajoPractico = ()=>{
        for (materia in materias){
            let trabajoPracticos = materias[materia][2];
            if(trabajoPracticos >= 4){
                console.log(`${materias[materia][3]}`);
                console.log("%c    Aprobado","color:green");
            }
            else{
                console.log(`${materias[materia][3]}`);
                console.log("%c   Suspenso","color:red");
            }
        }
    }
    
    asistencia();
    media();
    trabajoPractico();