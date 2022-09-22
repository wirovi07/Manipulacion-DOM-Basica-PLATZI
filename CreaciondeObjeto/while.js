var estudiantes = ["Maria", "Sergio", "Rosa", "Maria"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

let respuesta;

while (respuesta != '4'){
    let pregunta = prompt("La respuesta de 2 + 2 es:");
    respuesta = pregunta;
}