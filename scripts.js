let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let ListaCompleta = document.getElementById("tarefas")

let arrayDeTarefa = []

function mostrarNaTela() {
    let novaLista = ""

    arrayDeTarefa.forEach(tarefa => {
        novaLista = novaLista + `
        <li class="item-tarefa">
        <p>${tarefa}</p>
        </li>
        `

})


ListaCompleta.innerHTML = novaLista

}

function cliqueiNoBotao() {
    arrayDeTarefa.push(input.value)
    mostrarNaTela()
}

botao.addEventListener = ("click", cliqueiNoBotao)