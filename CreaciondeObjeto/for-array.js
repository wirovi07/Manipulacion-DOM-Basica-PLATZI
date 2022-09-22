var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
} 


function suma(n,m){
    var resultado;
    resultado = n + m;
    return resultado;
}
resultado(1,2);