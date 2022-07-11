/* Cofla está sufriendo un poco... ya que, a pesar de que cree contar con el 90% de asistencias
y tener el promedio mayor a 7/10, no cree entregar el 75% de trabajos practicos entregados ya 
que necesita decidor las tareas que hará semanalmente, cofla debe, trabjar 8 horas por día durante 2 semanas
entre las cuales tiene que: 24  horas estudiar, 24 horas hacer trabajos practicos, 56 horas trabajar 8 horas de hacer las cosas de la casa.

    - Organizar las actividades diariamente.
    - Utlizar la consola para organizar todo.
    - el tiempo por tarea no debe superar las 4 horas*/

/* 30 min por dia para las cosas de la casa
100 min para los trabajos (1h40min)
10 min para de descanso
100 min para los trabajos (1h40min)
240 min para los trabajos (4h)
 */

let trabajo = "240  de trabajo";
let estudio = "100 minutos de descanso";
let tp = "100 minutos trabajso prácticos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos";

console.log("TAREAS");
for(i = 0; i > 14; i++){
    console.group("Dia" + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework)
    console.groupEnd
}
/* console.group("Dia 1");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework) 
console.group("Dia 2");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 3");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 4");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 5");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 6");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 7");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 8");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 9");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 10");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 11");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 12");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 13");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework)
console.group("Dia 14");
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework) */