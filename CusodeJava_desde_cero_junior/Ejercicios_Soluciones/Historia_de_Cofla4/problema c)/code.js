/* problema c)
Cofla ya vio las 12 matrerias y se decidió en cual se va a inscribir así que en tres dias los hará, el problema es que se rompió el sistema de inscripciones

    Crear Soluciones
    
    - Crear una funcion para preguntarle a cofla en que materia se quire inscribir.
    - Si ya hay 20 alumnos anotados en la materia negarle la inscripción.
    - Si hay menos de 20 alumnos inscribir a cofla y añadirlo a la lista */

    let materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}

    const inscribir = (alumno,materia)=>{
        personas = materias[materia];
        if (personas.length >= 21) {
            document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
        } else {
            personas.push(alumno);
            if (materia == "fisica") {
                materias = {
                    fisica: personas,
                    programacion: materias['programacion'],
                    logica: materias['logica'],
                    quimica:materias['quimica']
                }
            }
            else if (materia == "programacion") {
                materias = {
                    fisica: materias['fisica'],
                    programacion: personas,
                    logica: materias['logica'],
                    quimica:materias['quimica']
                }
            }else if (materia == "logica") {
                materias = {
                    fisica: materias['fisica'],
                    programacion: materia['programacion'],
                    logica: personas,
                    quimica:materias['quimica']
                }
            }else if (materia == "quimica") {
                materias = {
                    fisica: materias['fisica'],
                    programacion: materia['programacion'],
                    logica: materias['logica'],
                    quimica: personas
                }
            }
            document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
        }
    }
    
    document.write(materias['fisica'] + "<br>")
    
    inscribir("pedrito","fisica");
    inscribir("jorge","fisica");
    inscribir("ramses","fisica");
    inscribir("pedrito","fisica");
    inscribir("jorge","fisica");
    inscribir("ramses","fisica");
    inscribir("pedrito","fisica");
    inscribir("jorge","fisica");
    inscribir("ramses","fisica");
    inscribir("pedrito","fisica");
    inscribir("jorge","fisica");
    inscribir("ramses","fisica");
    inscribir("pedrito","fisica");