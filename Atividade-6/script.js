const bicho = document.getElementById("bicho");
const btn = document.getElementById("btn");
const fundo = document.getElementById("fundo");

const estados = {
    normal: "bb.png",
    clicado: "bbc.png",
    alimentado: "bbf.png",
    fome30: "bbb.png",
    fome60: "bbm.png",
}

let contador = 0;
let intervalo = null;
let time_click = null;
let time_Out = null;

btn.addEventListener("click", alimentar);

function init_cont (){
    if(intervalo) clearInterval(intervalo)

    intervalo = setInterval(()=> {
        contador ++;
        console.log("Tempo: ", contador);

        if (contador == 10){
            bicho.src = estados.fome30;
            fundo.src = "ilhafuria.png";
        }

        if (contador == 20){
        bicho.src = estados.fome60;
        fundo.src = "ilhanuvem.png";
        }

    }, 1000);
}

function alimentar(){

    bicho.src = estados.clicado;
    fundo.src = "ilha.png";

    contador = 0;

    if (intervalo) clearInterval(intervalo);
    init_cont();

    if (time_click) clearTimeout(time_click);
    if (time_Out) clearTimeout(time_Out);

    time_click = setTimeout(() => {

        bicho.src = estados.alimentado;
        fundo.src = "ilhadoce.png";

        time_Out = setTimeout(() => {

            bicho.src = estados.normal;
            fundo.src = "ilha.png";

        },2000)

    },1000);
}

function mudarFundo(imagem) {
    document.body.style.backgroundImage = `url(${imagem})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

bicho.src = estados.normal;
fundo.src = "ilha.png";

init_cont();