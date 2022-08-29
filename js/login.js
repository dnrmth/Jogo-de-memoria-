const input = document.querySelector('.input')
const button = document.querySelector('.login-btn')
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => {
    if(target.value.length > 0){
        button.removeAttribute('disabled')
        return
    }

    button.setAttribute('disabled', '')
}

const handleSubmit = (event)=>{
    event.preventDefault() //impedir a pagina de recarregar após envio de formulário

    localStorage.setItem('player', input.value)//salvar nome do jogador
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)