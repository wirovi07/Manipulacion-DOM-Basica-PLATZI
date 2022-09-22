//Crea una funcion que pueda recibir cualquier array como parametro e imprimir su primer elemento.
function imprimirPrimerElementoArray(arr){
    console.log(arr[1]);
}
imprimirPrimerElementoArray(['Wilmar', 'Salomon', 'Guiomar']);

function imprimirElementoPorElemento(arr){
    for(i = 0; i < arr.length; i++ ){ //En el array no se hace menor o igual <= 
        console.log(arr[i]);
    }
}
imprimirElementoPorElemento(['Wilmar', 'Salomon', 'Guiomar']);