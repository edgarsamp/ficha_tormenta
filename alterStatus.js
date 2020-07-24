function alterarNome(){
    var novoNome = prompt("Qual é o nome do seu personagem?")
    if (novoNome != null) {
        personagem.nome = novoNome
    }
    renderizar()
}
function alterarNivel(){
    var novoNivel = prompt("Oque é você?", `${personagem.raca} ${personagem.classe} ${personagem.level}`)
    if (novoNivel != null) {
        personagem.raca = novoNivel.split(" ")[0]
        personagem.classe = novoNivel.split(" ")[1]
        personagem.level = novoNivel.split(" ")[2]
    }
    renderizar()
}
function alterarXp(){
    var altXp = parseInt(prompt("Quanto de xp você ganhou?"))
    if (altXp > -Infinity) {
        personagem.xp += altXp
    }
    renderizar()
}
function alterarPvAtual(){
    var altPvAtual = parseInt(prompt("Quanto sua vida atual alterou?"))
    if (altPvAtual > -Infinity) {
        personagem.pv_atual += altPvAtual
    }
    renderizar()
}
function alterarPvMax(){
    var altPvMax = parseInt(prompt("Quanto sua vida máxima alterou?"))
    if (altPvMax > -Infinity) {
        personagem.pv_max += altPvMax
    }
    renderizar()
}
function alterarPmAtual(){
    var altPmAtual = parseInt(prompt("Quanto sua mana atual alterou?"))
    if (altPmAtual > -Infinity) {
        personagem.pm_atual += altPmAtual
    }
    renderizar()
}
function alterarPmMax(){
    var altPmMax = parseInt(prompt("Quanto sua mana máxima alterou?"))
    if (altPmMax > -Infinity) {
        personagem.pm_max += altPmMax
    }
    renderizar()
}
function alterarArmadura(){
    var altArmadura = parseInt(prompt("Qual é o sue novo valor de armadura?"))
    if (altArmadura > -Infinity) {
        personagem.armadura = altArmadura
    }
    renderizar()
}
function alterarDeslo(){
    var altDeslo = prompt("Qual é o seu novo valor de deslocamento?")
    if (altDeslo != null || altDeslo != NaN) {
        personagem.deslo = altDeslo + " m"
    }
    renderizar()
}
function alterarMod(mod){
    var altMod = parseInt(prompt(`Qual é o seu novo modificador de ${mod}?`))
    if (altMod > -Infinity) {
        personagem.modificadores[atributosVetor.indexOf(mod)] = altMod
    }
    renderizar()
}
function alterarAtr(mod){
    var altAtr = parseInt(prompt(`Qual é o seu novo valor de ${mod}?`))
    if (altAtr > -Infinity) {
        personagem.atributos[atributosVetor.indexOf(mod)] = altAtr
    }
    renderizar()
}
function alterarDinheiro(moeda){
    var altMoe = parseInt(prompt(`Quanto foi a alteração de seus ${moeda}?`))
    console.log(altMoe)

    if(altMoe > -Infinity){
        switch (moeda) {
            case "to":
                personagem.dinheiro.TO += altMoe
                break;
            case "td":
                personagem.dinheiro.TD += altMoe
                break;
            case "tc":
                personagem.dinheiro.TC += altMoe
                break;        
            default:
                break;
        }
    }
    renderizar()
}
function alterarPericia(i){
    console.log(nomePericias[i])
    var altPericia = parseInt(prompt(`Qual é o seu novo valor de ${nomePericias[i]}?`))
    if (altPericia > -Infinity) {
        personagem.pericias[i] = altPericia
    }
    renderizar()
}