/* let edad = 18;

 if(edad === 18){
    console.log("Puedes votar por 1ra vez");
 }else if(edad > 18){
    console.log("Puedes votar nuevamente");
 }else{
    console.log("No puedes votar");
 }*/

 var piedra = "piedra";
 var papel = "papel";
 var tijeras = "tijeras";

 function PiedraPapeloTijeras(parametro1, parametro2){
    if(parametro1 === parametro2){
        console.log("Empate");
    }else if(parametro1 === "piedra" && parametro2 ==="tijeras"){
        console.log("Gana PIEDRA");
    }else if(parametro1 === "piedra" && parametro2 === "papel"){
        console.log("Gana PAPEL");
    }else if(parametro1 === "tijeras" && parametro2 === "papel"){
        console.log("Gana TIJERAS");
    }
 }
 PiedraPapeloTijeras(piedra, papel);
 /*PiedraPapeloTijeras(parametro1, parametro2)*/