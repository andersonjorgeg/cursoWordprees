function trocarDiv(nome, idade) {
    let area = document.getElementById("area")
    let texto = prompt("Qual o seu sobrenome? ")

    //area.innerHTML = nome + " " + texto + " tem " + idade + " anos"
    area.innerHTML = `${nome} ${texto} tem ${idade} anos`
}