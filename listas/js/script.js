function adicionarIngrediente(){

    let ing = document.getElementById("ingrediente").value

    let listahtml = document.getElementById("lista").innerHTML

    //listahtml = listahtml + "<li>"+ing+"</li>"

    //nessa linha adiciona na lista
    listahtml = `${listahtml}` + `<li>${ing}</li>`

    //nessa linha começa a criar uma nova lista
    //listahtml = `<li>${ing}</li>`


    document.getElementById("lista").innerHTML = listahtml
}