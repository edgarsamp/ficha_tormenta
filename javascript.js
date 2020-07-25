nomePericias = ["Atletismo", "Luta", "Acrobacia*", "Ladinagem*", "Cavalgar", "Pontaria", "Furtividade*", "Pilotagem", "Iniciativa", "Reflexos", "Fortitude", "Investigação", "Conhecimento", "Misticismo", "Guerra", "Nobreza", "Cura", "Religião", "Intuição", "Sobrevivência", "Percepção", "Vontade", "Adestramento", "Enganação", "Atuação", "Intimidação", "Diplomacia", "Jogatina"]
atriPericias = [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5]
atributosVetor = ["for", "des", "con", "int", "sab", "car"]

personagem = JSON.parse(localStorage.getItem("personagem")) || {
    nome: "Nome do personagem",
    raca: "Raça",
    classe: "Classe",
    level: 0,
    xp: 0,
    pv_max: 00,
    pv_atual: 00,
    pm_max: 00,
    pm_atual: 00,
    armadura: 15,
    deslo: "12 m",

    atributos: [0,0,0,0,0,0],
    modificadores: [0,0,0,0,0,0],
    pericias:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    dinheiro: {
        TO: 100,
        TD: 100,
        TC: 100
    },

    itens: ["", "", "", "", "", "", "", "", "", "", "" ],
    poder: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],

    armas:[
        {arma: "", bonus: "", dano: "", crit: "", tipo: "", alc: ""},
        {arma: "", bonus: "", dano: "", crit: "", tipo: "", alc: ""},
        {arma: "", bonus: "", dano: "", crit: "", tipo: "", alc: ""},
        {arma: "", bonus: "", dano: "", crit: "", tipo: "", alc: ""}
    ],
    armaduras:[
        {name: "", bonus: "", pen: ""},
        {name: "", bonus: "", pen: ""}
    ]
}

function savePersonagem(){
    JSON
    localStorage.setItem("personagem", JSON.stringify(personagem))
}

function preencheCabecario(){
    // Preenche a descrição do personagem
    document.querySelector(".desc").innerHTML  = `<h1 ondblclick="alterarNome()">${personagem.nome}</h1>`
    document.querySelector(".desc").innerHTML += `<h2 ondblclick="alterarNivel()">${personagem.raca}, ${personagem.classe} ${personagem.level}</h2>`
    document.querySelector(".desc").innerHTML += `<h2 ondblclick="alterarXp()">${personagem.xp} xp</h2>`
    
    // Preenche o pv
    document.querySelector(".pv").innerHTML  = `<h1 ondblclick="alterarPvAtual()">${personagem.pv_atual}</h1>`
    document.querySelector(".pv").innerHTML += `<h2 ondblclick="alterarPvMax()">${personagem.pv_max }</h2>`
    
    // Preenche o pm
    document.querySelector(".pm").innerHTML  = `<h1 ondblclick="alterarPmAtual()">${personagem.pm_atual}</h1>`
    document.querySelector(".pm").innerHTML += `<h2 ondblclick="alterarPmMax()">${personagem.pm_max}</h2>`

    // Preenche a amadura
    document.querySelector(".arm").innerHTML = `<h1 ondblclick="alterarArmadura()">${personagem.armadura}</h1>`

    // Preenche a deslocamento
    document.querySelector(".desl").innerHTML = `<h1 ondblclick="alterarDeslo()">${personagem.deslo}</h1>`

    // Preenche atributos e modificadores
    atributos = document.querySelectorAll(".valor")
    for(i in personagem.modificadores){
        atributos[i].innerHTML = `<div class="valor-mod" ondblclick="alterarMod('${atributosVetor[i]}')">${personagem.modificadores[i]}</div>`
        atributos[i].innerHTML += `<div class="valor-atr" ondblclick="alterarAtr('${atributosVetor[i]}')">${personagem.atributos[i]}</div>`
    }

}

function pericia2atributo(pericia){
    switch (atriPericias[nomePericias.indexOf(pericia)]) {
        case 0:
            return "for"
            break;
        case 1:
            return "des"
            break;
        case 2:
            return "con"
            break;
        case 3:
            return "int"
            break;
        case 4:
            return "sab"
            break;
        case 5:
            return "car"
            break;
        default:
            return "";
    }
}

function preenchePericias(){
    pericias = document.querySelector(".dir")
    pericias.innerHTML = ""
    for(i in nomePericias){
        if(i%2 === 0){
            pericias.innerHTML +=`
             <div class="atr esquerda" ondblclick="alterarPericia(${i})">
                 <p>${nomePericias[i]}</p>
                 <div class="valor ${pericia2atributo(nomePericias[i])}">
                     <h3>${personagem.pericias[i]}</h3>
                 </div>
             </div>
            `
            //<h3>${personagem.modificadores[atriPericias[nomePericias.indexOf(nomePericias[i])]]}</h3>
        }else{
            pericias.innerHTML +=`
             <div class="atr direita" ondblclick="alterarPericia(${i})">
                 <div class="valor ${pericia2atributo(nomePericias[i])}">
                 <h3>${personagem.pericias[i]}</h3>
                 </div>
                 <p>${nomePericias[i]}</p>
             </div>
            `
        }
    }
}

function preencheDinheiro(){
    document.querySelector(".dinheiro").innerHTML  = `<div class="mochila"></div>`
    document.querySelector(".dinheiro").innerHTML += `<div class="to" ondblclick="alterarDinheiro('to')"><h1>${personagem.dinheiro.TO}</h1></div>`
    document.querySelector(".dinheiro").innerHTML += `<div class="td" ondblclick="alterarDinheiro('td')"><h1>${personagem.dinheiro.TD}</h1></div>`
    document.querySelector(".dinheiro").innerHTML += `<div class="tc" ondblclick="alterarDinheiro('tc')"><h1>${personagem.dinheiro.TC}</h1></div>`
}

function preencheItens(){
    itensElement = document.querySelector(".itens")
    itensElement.innerHTML = ""
    for(i in personagem.itens){
        if(personagem.itens[i] === ""){
            itensElement.innerHTML += `<input type="text" class="item" id="item${i}" onblur="addItem(${i})" placeholder="Item">`
        }else{
            itensElement.innerHTML += `<div class="item" id="item${i}" ondblclick="removeItem(${i})">${personagem.itens[i]}</div>`
        }
    }
}

function removeItem(i){
    personagem.itens[i] = ""
    preencheItens()
}

function addItem(i){
    itemElement = document.querySelector(`#item${i}`)
    personagem.itens[i] = itemElement.value
    preencheItens()
}

function preenchePoder(){
    poderElement = document.querySelector(".habi")
    poderElement.innerHTML = ""
    for(i in personagem.poder){
        if(personagem.poder[i] === ""){
            poderElement.innerHTML += `<input type="text" class="poder" id="poder${i}" onblur="addPoder(${i})" placeholder="Poder / Habilidade">`
        }else{
            poderElement.innerHTML += `<div class="poder" id="poder${i}" ondblclick="removePoder(${i})">${personagem.poder[i]}</div>`
        }
    }
}

function removePoder(i){
    personagem.poder[i] = ""
    preenchePoder()
}

function addPoder(i){
    poderElement = document.querySelector(`#poder${i}`)
    personagem.poder[i] = poderElement.value
    preenchePoder()
}

function preencheArmas(){
    armasElement = document.querySelector(".armas")
    armasElement.innerHTML = ""
    for(i in personagem.armas){
        divArma = '<div class="arma">'
        if(personagem.armas[i].arma === ""){
            divArma += `
            <input type="text" id="arma${i}" class="arma_nome" placeholder="Arma">
            <input type="text" id="bonus${i}" placeholder="Bonus">
            <input type="text" id="dano${i}"  placeholder="Dano">
            <input type="text" id="crit${i}" placeholder="Crít">
            <input type="text" id="tipo${i}"  placeholder="Tipo">
            <input type="text" id="alc${i}"  onblur="addArma(${i})"  placeholder="Alc">
            `
        }else{
            divArma += `
            <div class="arma_nome" id="arma${i}"  ondblclick="removeArma(${i})">${personagem.armas[i].arma}</div>
            <div id="bonus${i}" ondblclick="removeArma(${i})">${personagem.armas[i].bonus}</div>
            <div id="dano${i}"  ondblclick="removeArma(${i})">${personagem.armas[i].dano}</div>
            <div id="crit.${i}" ondblclick="removeArma(${i})">${personagem.armas[i].crit}</div>
            <div id="tipo${i}"  ondblclick="removeArma(${i})">${personagem.armas[i].tipo}</div>
            <div id="alc.${i}"  ondblclick="removeArma(${i})">${personagem.armas[i].alc}</div>
            `
        }
        divArma += "</div>"
        armasElement.innerHTML += divArma
    }
}

function removeArma(i){
    personagem.armas[i] = {arma: "", bonus: "", dano: "", crit: "", tipo: "", alc: ""}
    preencheArmas()
}

function addArma(i){
    personagem.armas[i].arma =  document.querySelector(`#arma${i}`).value
    personagem.armas[i].bonus = document.querySelector(`#bonus${i}`).value
    personagem.armas[i].dano =  document.querySelector(`#dano${i}`).value
    personagem.armas[i].crit =  document.querySelector(`#crit${i}`).value
    personagem.armas[i].tipo =  document.querySelector(`#tipo${i}`).value
    personagem.armas[i].alc =   document.querySelector(`#alc${i}`).value
    preencheArmas()
}

function preencheArmadura(){
    armaduraElement = document.querySelector(".defesas")
    armaduraElement.innerHTML = ""

    divArmadura = '<div class="armad">'
    if(personagem.armaduras[0].name === ""){
        divArmadura += `
        <input type="text" class="armadura" id="def00" placeholder="Armadura">
        <input type="text" id="def01" placeholder="Bônus">
        <input type="text" id="def02" placeholder="Pen." onblur="addArmadura(0)">
        `
    }else{
        divArmadura += `
        <div class="armadura" id="def00" ondblclick="removeArmadura(0)">${personagem.armaduras[0].name}</div>
        <div id="def01" ondblclick="removeArmadura(0)">${personagem.armaduras[0].bonus}</div>
        <div id="def02" ondblclick="removeArmadura(0)">${personagem.armaduras[0].pen}</div>
        `
    }
    divArmadura += "</div>"


    divEscudo = '<div class="esc">'
    if(personagem.armaduras[1].name === ""){
        divEscudo += `
        <input type="text" class="escudo"id="def10" placeholder="Escudo">
        <input type="text" id="def11" placeholder="Bônus">
        <input type="text" id="def12" placeholder="Pen." onblur="addArmadura(1)">
        `
    }else{
        divEscudo += `
        <div class="escudo" id="def10" ondblclick="removeArmadura(1)">${personagem.armaduras[1].name}</div>
        <div id="def11" ondblclick="removeArmadura(1)">${personagem.armaduras[1].bonus}</div>
        <div id="def12" ondblclick="removeArmadura(1)">${personagem.armaduras[1].pen}</div>
        `
    }
    divEscudo += "</div>"

    teste= divArmadura + divEscudo
    armaduraElement.innerHTML += divArmadura + divEscudo
}

function removeArmadura(i){
    personagem.armaduras[i] = {name: "", bonus: "", pen: ""}
    preencheArmadura()
}

function addArmadura(i){
    personagem.armaduras[i].name =  document.querySelector(`#def${i}0`).value
    personagem.armaduras[i].bonus = document.querySelector(`#def${i}1`).value
    personagem.armaduras[i].pen =  document.querySelector(`#def${i}2`).value
    preencheArmadura()
}

function renderizar(){
    savePersonagem()
    preencheCabecario()
    preenchePericias()
    preencheDinheiro()
    preencheItens()
    preenchePoder()
    preencheArmas()
    preencheArmadura()
}

renderizar()
document.querySelector(".foto").addEventListener("click", renderizar)