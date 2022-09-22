const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Voy a triunfar <br> por mi familia"; //Convierte este texto en codigo HTML
//h1.innerText = "Voy a triunfar <br> por mi familia"; //Solo deja este linea en texto 
//h1.textContent = "Voy a triunfar <br> por mi familia";//Solo deja este linea en texto
console.log(h1.getAttribute("pantalla"));//Modifica los atributos en el HTML
h1.setAttribute("class", "rojo");//Modifica los atributos en el HTML

 h1.classList.add("rojo");
 h1.classList.remove("verde");
 h1.classList.toggle("verde");
 h1.classList.contains("verdes");

 input.value = 1790;

 const img = document.createElement("img");
 img.setAttribute("src", "https://somospnt.com/images/blog/cover/function-declaration.png");

 pid.innerHTML = " ";
 pid.append(img);


