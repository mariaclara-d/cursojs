
let valores = []

let botao = document.getElementById("button");

let textarea = document.getElementById("areadetexto")

botao.onclick = function () {

    let numero = Number(document.getElementById("valores").value);

    let item = document.createElement("option")

    textarea.appendChild(item)


    if (numero < 1 || numero > 100) {
        window.alert('Por favor digite um número entre 1 e 100!')

    } if (valores.indexOf(numero) != -1) {
        window.alert('Esse valor já foi adicionado!')

    } else {
        valores.push(numero)
        item.text += `Valor ${numero} adicionado \n`
        
    }

}

let botaofinalizar = document.getElementById("button2")

let resquantidade = document.getElementById("res1");
let resvalormaximo = document.getElementById("res2")
let resvalorminimo = document.getElementById("res3");
let ressoma = document.getElementById("res4");
let resmedia = document.getElementById("res5");


botaofinalizar.onclick = function () {

    let soma = valores.reduce((accumulator, currentValue) => accumulator + currentValue);

    let max = Math.max(...valores);
    let min = Math.min(...valores);

    let media = soma / valores.length

    resquantidade.innerHTML = `Ao todo temos ${valores.length} números cadastrados`
    resvalormaximo.innerHTML = `O maior valor informado foi ${max}`
    resvalorminimo.innerHTML = `O menor valor informado foi ${min}`
    ressoma.innerHTML = `Somando todos os valores temos ${soma}`
    resmedia.innerHTML = `A média dos valores digitados é ${media}`

}

