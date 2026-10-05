
let notaExamen1 = Number(process.argv[2]);
let notaRecu1 = Number(process.argv[3]);

let notaExamen2 = Number(process.argv[4]);
let notaRecu2 = Number(process.argv[5]);

let notaExamen3 = Number(process.argv[6]);
let notaRecu3 = Number(process.argv[7]);

let evaluacion1Aprobada;
let evaluacion2Aprobada;
let evaluacion3Aprobada;


if ((notaExamen1 >= 70) || (notaRecu1 >= 50)) {
    evaluacion1Aprobada = true;
} else {
    evaluacion1Aprobada = false;
}

if ((notaExamen2 >= 60) || (notaRecu2 >= 50)) {
    evaluacion2Aprobada = true;
} else {
    evaluacion2Aprobada = false;
}

if ((notaExamen3 >= 50) || (notaRecu3 >= 50)) {
    evaluacion3Aprobada = true;
} else {
    evaluacion3Aprobada = false;
}

if ((evaluacion1Aprobada === true) && (evaluacion2Aprobada === true) && (evaluacion3Aprobada === true)) {
    console.log("El alumno ha aprobado");
} else {
    console.log("El alumno está suspenso");
}