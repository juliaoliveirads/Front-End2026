function revelar(){
    document.querySelector(".card-img-top").src = "img/_vinicius_junior.png";

    const nome = document.getElementById("Nome");
    const rank = document.getElementById("Rank");
    const data = document.getElementById("Data_Nas");
    const alutra = document.getElementById("Alutra");
    const Posicao = document.getElementById("Posicao");

    nome.innerHTML = "Vinícius José Paixão de Oliveira Júnior";
    rank.innerHTML = "9,5";
    data.innerHTML = '12/07/2000 (25 anos)';
    alutra.innerHTML = "1,76 m";
    Posicao.innerHTML = "Ponta-esquerda / Atacante";

    nome.classList.remove('placeholder', 'col-6');
    rank.classList.remove('placeholder', 'col-6');
    data.classList.remove('placeholder', 'col-6');
    alutra.classList.remove('placeholder', 'col-6');
    Posicao.classList.remove('placeholder', 'col-6');
}
