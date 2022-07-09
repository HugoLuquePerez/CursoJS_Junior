/* La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un pofresor y todos los alumnos que se anotaron a dichas clases,
pero necesitamos ver esto mas ordenadamente.

    Crear soluciones
    
    -Crear una función que al pasarle como parametro la materia nos devuelva:
        Profesor asignado y el nombre de todos los alumnos
        
    - Crear función que nos diga en cuantas clases está Cofla.
    - Nombrar las clases en la que esta y los profesores de cada una.*/

    const materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}
	
const obtenerInformacion = (materia)=>{
	
	if (materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	} else {
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);

if (informacion !== false) {
	let profesor = informacion[0][0];
	alumnos = informacion[0];
	alumnos.shift();
	document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
		`);
}
}

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	}
	return `<b style='color:blue'>
	${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
	<br><br>
	`;
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("pedro"))