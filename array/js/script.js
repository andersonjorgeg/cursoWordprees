
let lista = ["arroz", "feijão", "salada", "farofa"]

function pesquisarArray(){
    let item = document.getElementById("pesquisa").value

    if(lista.indexOf(item) > -1) {
        alert("tem na lista")
    } else {
        alert("não tem na lista")
    }
    
}

function adicionarItem() {
    let item = document.getElementById("adicionar").value

    for(let i = 0; i < lista.length; i++){
        if(lista[i] != item){
            lista.push(item)
            alert("item adicionado")
            console.log(lista)
            break
        } else {
            alert("o item ja foi adicionado")
            break
        }
    }
}