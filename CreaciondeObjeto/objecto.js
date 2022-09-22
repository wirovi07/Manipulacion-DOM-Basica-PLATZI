var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    color: "Rojo",
};

function imprimirElementoPorElementoDeObjeto(Auto){
    const arr = Object.values(Auto);
    for(i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
imprimirElementoPorElementoDeObjeto(miAuto);