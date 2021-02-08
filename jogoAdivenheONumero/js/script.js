function verificar(){
    let n1 = document.getElementById("n1").innerHTML
    let n2 = document.getElementById("n2").value

    if(n1 == n2){
        alert(`VOCÊ ACERTOU O NÚMERO! EU ESCOLHI O ${n1}`)
    } else {
        alert(`VOCÊ ERROU! EU ESCOLHI O ${n1}`)
    }
    
    resetar()
    
}

function resetar(){
    document.getElementById("n2").value = ""

    let numeroResetado = Math.floor(Math.random() * 6)

    document.getElementById("n1").innerHTML = numeroResetado
}