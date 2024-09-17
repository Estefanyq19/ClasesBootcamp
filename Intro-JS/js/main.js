const header = document.querySelector('header')
const title = document.getElementById('app-title')
title.textContent = 'hola desde la clase FSJ24'

//title.innerText = 'Hola'

title.classList.add('title')

//title.className = 'title'

const subtitle = document.getElementById('app-subtitle')

function toggleSubtitle(){
    //subtitle.classList.toggle('invisible')

    if(subtitle.classList.contains('invisible')){
        subtitle.classList.remove('invisible')
    } else {
        subtitle.classList.add('invisible')
    }
}

//Libreria de confetti

function fireConfetti(){
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
}


//Inyectando html
const about = document.getElementById('app-about')
about.insertAdjacentHTML('beforeend','<p>hola como estas</p>')
about.insertAdjacentHTML('beforeend','<h1>hola como estas</h1>')