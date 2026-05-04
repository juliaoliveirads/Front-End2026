function revelar(){
    document.querySelector('.card-img-top').src = 'img/_vinicius_junior.png';
    
    document.querySelector('#Nome span').textContent = 'Vinícius José Paixão de Oliveira Júnior';
    document.getElementById('Rank').textContent = '9,5';
    document.getElementById('Data_Nas').textContent = '12/07/2000 (25 anos)';
    document.getElementById('Alutra').textContent = '1,76 m';
    document.getElementById('Posição ').textContent = 'Ponta-esquerda / Atacante';
    
    document.querySelector('#Nome').classList.remove('placeholder-glow');
    document.querySelector('p.card-text').classList.remove('placeholder-glow');
    
    document.querySelector('#Nome span').classList.remove('placeholder', 'col-6');
    document.querySelector('#Nome span').classList.add('card-text');
    
    document.getElementById('Data_Nas').classList.remove('placeholder', 'col-4');
    document.getElementById('Data_Nas').classList.add('card-text');
    
    document.getElementById('Alutra').classList.remove('placeholder', 'col-4');
    document.getElementById('Alutra').classList.add('card-text');
    
    document.getElementById('Posição ').classList.remove('placeholder', 'col-6');
    document.getElementById('Posição ').classList.add('card-text');
}