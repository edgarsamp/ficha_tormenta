let favoritos =  JSON.parse(localStorage.getItem("favoritos")) || []
let suas = JSON.parse(localStorage.getItem("suas")) ||  []
let suasFav = JSON.parse(localStorage.getItem("suasFav")) ||  []
personagem = JSON.parse(localStorage.getItem("personagem")) || {
    nome: "Nome do personagem",
    pm_max: 0,
    pm_atual: 0,
    cd: 0
}

todasMagiasSimpli = [{circulo: "1", tipo: "D", nome: "Abençoar Alimentos", desc: "Purifica refeição, que também fornece bônus temporários."},
{circulo: "1", tipo: "D", nome: "Acalmar Animal", desc: "Um animal fica prestativo."},
{circulo: "1", tipo: "A", nome: "Adaga Mental", desc: "Alvo sofre dano mental e pode ficar pasmo."},
{circulo: "1", tipo: "A", nome: "Alarme", desc: "Avisa quando alguém invadir uma área protegida."},
{circulo: "1", tipo: "A", nome: "Amedrontar", desc: "O alvo fica abalado ou apavorado."},
{circulo: "1", tipo: "A", nome: "Área Escorregadia", desc: "Criaturas na área podem cair ou objeto afetado pode ser derrubado."},
{circulo: "1", tipo: "D", nome: "Arma Espiritual", desc: "Cria uma arma de energia que ataca seus inimigos."},
{circulo: "1", tipo: "U", nome: "Arma Mágica", desc: "Arma recebe bônus ou poderes mágicos."},
{circulo: "1", tipo: "A", nome: "Armadura Arcana", desc: "Aumenta sua Defesa."},
{circulo: "1", tipo: "D", nome: "Armamento da Natureza", desc: "Arma natural ou primitiva causa dano como se fosse maior."},
{circulo: "1", tipo: "U", nome: "Aviso", desc: "Envia um alerta telepático para uma criatura."},
{circulo: "1", tipo: "D", nome: "Bênção", desc: "Fornece bônus em ataques e dano."},
{circulo: "1", tipo: "D", nome: "Caminhos da Natureza", desc: "Convoca um espírito que guia você e seus aliados em terreno selvagem."},
{circulo: "1", tipo: "D", nome: "Comando", desc: "Força o alvo a obedecer a uma ordem."},
{circulo: "1", tipo: "D", nome: "Compreensão", desc: "Você entende qualquer coisa escrita ou falada e pode ouvir pensamentos."},
{circulo: "1", tipo: "A", nome: "Concentração de Combate", desc: "Ao atacar, você pode rolar dois dados e ficar com o melhor."},
{circulo: "1", tipo: "A", nome: "Conjurar Monstro", desc: "Convoca um monstro sob seu comando."},
{circulo: "1", tipo: "D", nome: "Consagrar", desc: "Abençoa a área, maximizando efeitos de cura."},
{circulo: "1", tipo: "D", nome: "Controlar Plantas", desc: "Vegetação enreda criaturas."},
{circulo: "1", tipo: "D", nome: "Criar Elementos", desc: "Cria uma quantidade Minúscula de água, ar, fogo ou terra."},
{circulo: "1", tipo: "A", nome: "Criar Ilusão", desc: "Cria uma ilusão visual ou sonora."},
{circulo: "1", tipo: "D", nome: "Curar Ferimentos", desc: "Seu toque recupera pontos de vida."},
{circulo: "1", tipo: "D", nome: "Despedaçar", desc: "Som alto e agudo causa atordoamento e dano de impacto."},
{circulo: "1", tipo: "D", nome: "Detectar Ameaças", desc: "Detecta a presença, quantidade e poder de criaturas na área."},
{circulo: "1", tipo: "A", nome: "Disfarce Ilusório", desc: "Muda a aparência de uma ou mais criaturas."},
{circulo: "1", tipo: "A", nome: "Enfeitiçar", desc: "Alvo se torna prestativo e pode realizar um pedido seu."},
{circulo: "1", tipo: "D", nome: "Escudo da Fé", desc: "Protege um aliado."},
{circulo: "1", tipo: "U", nome: "Escuridão", desc: "Objeto emana uma área de escuridão."},
{circulo: "1", tipo: "A", nome: "Explosão de Chamas", desc: "Cone causa dano de fogo."},
{circulo: "1", tipo: "D", nome: "Hipnotismo", desc: "Alvos ficam fascinados."},
{circulo: "1", tipo: "A", nome: "Imagem Espelhada", desc: "Cria duplicatas para confundir os inimigos, oferecendo bônus na Defesa."},
{circulo: "1", tipo: "D", nome: "Infligir Ferimentos", desc: "Seu toque causa dano de trevas e pode deixar abalado."},
{circulo: "1", tipo: "A", nome: "Leque Cromático", desc: "Criaturas na área ficam inconscientes, atordoadas ou cegas."},
{circulo: "1", tipo: "U", nome: "Luz", desc: "Objeto ilumina como uma tocha."},
{circulo: "1", tipo: "U", nome: "Névoa", desc: "Cria uma névoa que oferece camuflagem."},
{circulo: "1", tipo: "D", nome: "Orientação", desc: "Alvo recebe bônus nos testes de perícia."},
{circulo: "1", tipo: "D", nome: "Perdição", desc: "Inimigos sofrem penalidade nos ataques e danos."},
{circulo: "1", tipo: "A", nome: "Primor Atlético", desc: "Alvo recebe bônus no deslocamento e em testes de Atletismo."},
{circulo: "1", tipo: "D", nome: "Profanar", desc: "Conspurca a área, dobrando o dano de trevas."},
{circulo: "1", tipo: "D", nome: "Proteção Divina", desc: "Alvo recebe bônus em testes de resistência."},
{circulo: "1", tipo: "A", nome: "Queda Suave", desc: "Alvo cai lentamente."},
{circulo: "1", tipo: "A", nome: "Raio do Enfraquecimento", desc: "Impõe penalidades em testes físicos."},
{circulo: "1", tipo: "U", nome: "Resistência a Energia", desc: "Fornece resistência contra um tipo de energia a sua escolha."},
{circulo: "1", tipo: "D", nome: "Santuário", desc: "Inimigos devem passar num teste de Vontade para atacá-lo."},
{circulo: "1", tipo: "A", nome: "Seta Infalível de Talude", desc: "Dispara setas de energia que acertam automaticamente."},
{circulo: "1", tipo: "A", nome: "Sono", desc: "Alvo fica fatigado ou cai em um sono profundo."},
{circulo: "1", tipo: "D", nome: "Suporte Ambiental", desc: "Ignora efeitos de calor e frio e pode respirar na água."},
{circulo: "1", tipo: "A", nome: "Teia", desc: "Criaturas na área ficam enredadas."},
{circulo: "1", tipo: "A", nome: "Toque Chocante", desc: "Toque causa dano de eletricidade."},
{circulo: "1", tipo: "A", nome: "Tranca Arcana", desc: "Tranca um item que possa ser aberto ou fechado."},
{circulo: "1", tipo: "D", nome: "Tranquilidade", desc: "Acalma criaturas na área."},
{circulo: "1", tipo: "A", nome: "Transmutar Objetos", desc: "Pode consertar ou fabricar um objeto temporário."},
{circulo: "1", tipo: "U", nome: "Visão Mística", desc: "Você pode ver auras mágicas."},
{circulo: "1", tipo: "A", nome: "Vitalidade Fantasma", desc: "Você recebe pontos de vida temporários."}
]

const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .janela a")

close.addEventListener("click", () => {modal.classList.add("hide")})


function preencheCabecario(){
    document.querySelector(".nome").innerHTML  = `<h1>${personagem.nome}</h1>`

    document.querySelector(".pm").innerHTML  = `<h1 ondblclick="alterarPmAtual()">${personagem.pm_atual}</h1>`
    document.querySelector(".pm").innerHTML += `<h2 ondblclick="alterarPmMax()">${personagem.pm_max}</h2>`

    document.querySelector(".cd").innerHTML = `<h2>CD</h2>`
    document.querySelector(".cd").innerHTML += `<h1 ondblclick="alterarCd()">${personagem.cd}</h2>`

    saveMagias()
}

function alterarCd(){
    var altCd = parseInt(prompt("Qual é o CD de suas magias?"))
    if (altCd > -Infinity) {
        personagem.cd = altCd
    }
    preencheCabecario()
}

function alterarPmAtual(){
    var altPmAtual = parseInt(prompt("Quanto sua mana atual alterou?"))
    if (altPmAtual > -Infinity) {
        personagem.pm_atual += altPmAtual
    }
    preencheCabecario()
}
function alterarPmMax(){
    var altPmMax = parseInt(prompt("Quanto sua mana máxima alterou?"))
    if (altPmMax > -Infinity) {
        personagem.pm_max += altPmMax
    }
    preencheCabecario()
}

function saveMagias(){
    JSON
    localStorage.setItem("favoritos", JSON.stringify(favoritos))

    JSON
    localStorage.setItem("suas", JSON.stringify(suas))

    JSON
    localStorage.setItem("suasFav", JSON.stringify(suasFav))

    JSON
    localStorage.setItem("personagem", JSON.stringify(personagem))
}

function fav(id){
    divFav = document.querySelector(`#id${id}`)
    if(favoritos.indexOf(id) === -1){
        favoritos.push(id)
    }
    renderizarTodas()
}
function unfav(id){
    divFav = document.querySelector(`#id${id}`)

    favoritos.splice(favoritos.indexOf(id), 1)
    renderizarTodas()
}


function renderizarTodas(){
    listasElement = document.querySelector(".listaMagias")
    listasElement.innerHTML = ""

    for(let i=0; i < favoritos.length; i++){
        listasElement.innerHTML += `
        <div class="magia fav" id="id${favoritos[i]}">
            <div class="fav-img" onclick="unfav(${favoritos[i]})"></div>
            <h1>${todasMagiasSimpli[favoritos[i]].circulo}</h1>
            <h1>${todasMagiasSimpli[favoritos[i]].tipo}</h1>
            <h1 ondblclick="add(${favoritos[i]})">${todasMagiasSimpli[favoritos[i]].nome}</h1>
            <h1  ondblclick="abrirMagia(${favoritos[i]})">${todasMagiasSimpli[favoritos[i]].desc}</h1>
        </div>`
    }

    for(let i=0; i < todasMagiasSimpli.length; i++){
        if(favoritos.indexOf(i) === -1){
            listasElement.innerHTML += `
            <div class="magia" id="id${i}">
                <div class="fav-img" onclick="fav(${i})"></div>
                <h1>${todasMagiasSimpli[i].circulo}</h1>
                <h1>${todasMagiasSimpli[i].tipo}</h1>
                <h1 ondblclick="add(${i})">${todasMagiasSimpli[i].nome}</h1>
                <h1 ondblclick="abrirMagia(${i})">${todasMagiasSimpli[i].desc}</h1>
            </div>`
        }
    }
    saveMagias()
}

function renderizarSuas(){
    listasElement = document.querySelector(".listaMagias")
    listasElement.innerHTML = ""

    for(let i=0; i < suasFav.length; i++){
        listasElement.innerHTML += `
        <div class="magia fav" id="id${suasFav[i]}">
            <div class="fav-img" onclick="remSuasfav(${suasFav[i]})"></div>
            <h1>${todasMagiasSimpli[suasFav[i]].circulo}</h1>
            <h1>${todasMagiasSimpli[suasFav[i]].tipo}</h1>
            <h1 ondblclick="remv(${suasFav[i]})">${todasMagiasSimpli[suasFav[i]].nome}</h1>
            <h1  ondblclick="abrirMagia(${suasFav[i]})">${todasMagiasSimpli[suasFav[i]].desc}</h1>
        </div>`
    }

    for(let i=0; i < suas.length; i++){
        if(suasFav.indexOf(suas[i]) === -1){
            listasElement.innerHTML += `
            <div class="magia" id="id${suas[i]}">
                <div class="fav-img" onclick="addsuasfav(${suas[i]})"></div>
                <h1>${todasMagiasSimpli[suas[i]].circulo}</h1>
                <h1>${todasMagiasSimpli[suas[i]].tipo}</h1>
                <h1 ondblclick="remv(${suas[i]})">${todasMagiasSimpli[suas[i]].nome}</h1>
                <h1  ondblclick="abrirMagia(${suas[i]})">${todasMagiasSimpli[suas[i]].desc}</h1>
            </div>`
        }
    }
    saveMagias()
}

function addsuasfav(id){
    divFav = document.querySelector(`#id${id}`)
    if(suasFav.indexOf(id) === -1){
        suasFav.push(id)
    }
    renderizarSuas()
}
function remSuasfav(id){
    suasFav.splice(suasFav.indexOf(id), 1)
    renderizarSuas()
}

function add(id){
    if(suas.indexOf(id) === -1){
        suas.push(id)
    }
}
function remv(id){
    suas.splice(suas.indexOf(id), 1)
    renderizarSuas()
}

function abrirMagia(i){
    const magiaImgDiv = document.querySelector("#modal .magia-desc")

    magiaImgDiv.innerHTML = `<img src="/assents/magias/${todasMagiasSimpli[i].nome}.png" alt="${todasMagiasSimpli[i].nome}">`
    modal.classList.remove("hide")
}


preencheCabecario()
