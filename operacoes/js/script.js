function somar(){
    let campo1 = document.getElementById("campo1").value
    let campo2 = document.getElementById("campo2").value

    let resultado = parseInt(campo1) + parseInt(campo2)

    console.log(`${campo1} + ${campo2} = ${resultado}`)
}

function multiplicacao(){
    let campo3 = document.getElementById("campo3").value
    let campo4 = document.getElementById("campo4").value

    let resultado = parseInt(campo3) * parseInt(campo4)

    console.log(`${campo3} * ${campo4} = ${resultado}`)
}

function divisao(){
    let campo5 = document.getElementById("campo5").value
    let campo6 = document.getElementById("campo6").value

    let resultado = parseInt(campo5) / parseInt(campo6)

    console.log(`${campo5} / ${campo6} = ${resultado}`)

    //resultado inteiro
    //console.log(parseInt(resultado))
}

function subtracao(){
    let campo7 = document.getElementById("campo7").value
    let campo8 = document.getElementById("campo8").value

    let resultado = parseInt(campo7) - parseInt(campo8)

    console.log(`${campo7} - ${campo8} = ${resultado}`)
}
