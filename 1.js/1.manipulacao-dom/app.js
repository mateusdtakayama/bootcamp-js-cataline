var input = document.getElementById("idade")

console.log(input.parentElement)

function sayHello() {
    console.log("Hello")
}

var ancora = document.querySelector("#app a")

ancora.addEventListener("click", function(event){
    event.preventDefault()
    console.log("teste")
})

var bd = document.getElementById("background")

bd.style.background = "#000"
bd.style.height = "200px"
bd.style.width = "200px"

var oi = document.getElementById("teste")

// .outerHTML  - retorna todo o HTML do elelemento (string)
// .innerHTML - HTML interno (string)
// .innerText - todo o texto interno, sem as tags


// outerHTML se tentar mudar o valor remove tudo e substitui
// innerHTML ao tentar mudar o valor adiciona dentro da tag interna um texto, pode ser usado para adicionar tags também
// innerText ao tentar mudar o valor remove as tags e adiciona um texto entre as tags internas


// Como criar um elemento

let link = document.createElement('a')
let textLink = document.createTextNode("Vá para o link")

link.setAttribute("href", "https://www.google.com.br")

link.appendChild(textLink)
link.href = "https://twitter.com.br"

oi.appendChild(link)

// Remover um elemento

let teste = document.getElementById("texto")

oi.removeChild(teste)

// Intervalo

window.setInterval(function(){
    console.log("Imprimindo a cada 3s")
}, 3000)

window.setTimeout(function(){
    console.log("Imprime dps de 1 segundo e nunca mais")
}, 1000)


// Armazenamento local

window.localStorage.theme = 'dark'

// ficará salvo até a pessoa limpar ou desinstalar o navegador 