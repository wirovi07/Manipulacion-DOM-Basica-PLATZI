const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calcular1");
const input2 = document.querySelector("#calcular2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", btnOnClick);

function btnOnClick(){
 
     const suma = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + suma;

}



