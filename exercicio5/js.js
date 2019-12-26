document.querySelector('input#adicionar').addEventListener('click', adiciona);
document.querySelector('input#finalizar').addEventListener('click', finalizar);
let res = document.querySelector('div#res')
let select = document.querySelector('select#select');
let arrayNum = [];

let verifica = 0;
function adiciona(){
    let option = document.createElement('option');
    var num = Number(document.querySelector('input#inputNum').value);

    if(num > 100 || num == '' || verifica == num){
        alert("[ERRO] Número ja digitado ou maior que 100");
    } else {
        verifica = num;
        arrayNum.push(num);
        option.text = `O valor ${num} foi adicionado`;
        select.add(option);
        
    }
}

function finalizar(){
    let num = Number(document.querySelector('input#inputNum').value);

    if(num == ""){
        alert('Digite alguns números antes de finalizar')
    } else {
        res.innerHTML += `Ao todo, temos ${arrayNum.length} números cadastrados <br>`;
        res.innerHTML += `O maior valor informado foi ${arrayNum.sort(function(a,b){return b - a;})[0]}<br/>`;
        res.innerHTML += `O menor valor informado foi ${arrayNum.sort(function(a,b){return a - b;})[0]} <br/>`;
        res.innerHTML += `Somando todos os valores, temos ${arrayNum.reduce((a, b) => {return a + b;})} <br/>`;
        res.innerHTML += `A media dos valores digitados é ${arrayNum.reduce((a,b) =>{ return a / b })}`;
    }
}

