let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML= 'Nome invalido'
        txt.style.color = 'red'
        
    }else{
        txt.innerHTML = 'Nome valido'
        txt.style.color='green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail= document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
       txtEmail.innerHTML = "E-mail inválido"
       txtEmail.style.color ='red' 
    } else{
        txtEmail.innerHTML= 'Email válido'
        txtEmail.style.color= 'green'
        emailOk = true

    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >=2) {
        txtAssunto.innerHTML = 'Por favor, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
    } else{
        txtAssunto.innerHTML = 'Texto válido'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso')
    }else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '600px'
    mapa.style.height = '500px'
}

function mapaNormal() {
    mapa.style.width = '600px'
    mapa.style.height = '300px'
}