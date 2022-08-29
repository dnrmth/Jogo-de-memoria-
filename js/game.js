const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')


const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy'
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let secondCard = ''

const checkEndGame = ()=>{
    const disabledCards = document.querySelectorAll('.disabled-card')
    if(disabledCards.length == 20){
     setTimeout(()=>{
        clearInterval(this.loop)
        alert(`Parabens, ${spanPlayer.innerHTML}! Você concluiu em: ${timer.innerHTML}segundos.`)
    }, 400)
    }
}

const checkCards = ()=>{
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if(firstCharacter == secondCharacter){
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        checkEndGame()
    } else {

        setTimeout(()=>{
            firstCard.classList.remove('rotate-card')
            secondCard.classList.remove('rotate-card')

            firstCard = ''
            secondCard = ''
        }, 600)
        
    }
}

const revealCard = ({ target }) => {

    if(target.parentNode.className.includes('rotate-card')){
        return;
    }
    if(firstCard == ''){
        target.parentNode.classList.add('rotate-card')
        firstCard = target.parentNode
    } else if(secondCard == ''){
        target.parentNode.classList.add('rotate-card')
        secondCard = target.parentNode

        checkCards()
    }
    if(secondCard != firstCard){
        target.parentNode.classList
    }

}

const createCard = (character)=>{
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../imagens/${character}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card
}

const loadGame = () => {

    const duplicate = [...characters, ...characters]
    const shuffled = duplicate.sort(() => Math.random() - 0.5)

    shuffled.forEach((character) => {
        const cards = createCard(character)
        grid.appendChild(cards)
    })
}

const startTimer = ()=>{
    this.loop = setInterval(()=>{
        const currentTime = +timer.innerHTML
        timer.innerHTML = currentTime + 1
    }, 1000)
}

window.onload = ()=>{
    spanPlayer.innerHTML = localStorage.getItem('player')
    startTimer()
    loadGame()
}
