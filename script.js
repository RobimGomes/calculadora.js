let um = document.querySelector('#um');
let dois = document.querySelector('#dois');
let tres = document.querySelector('#tres');
let quatro = document.querySelector('#quatro');
let cinco = document.querySelector('#cinco');
let seis = document.querySelector('#seis');
let sete = document.querySelector('#sete');
let oito = document.querySelector('#oito');
let nove = document.querySelector('#nove');
let zero = document.querySelector('#zero');
let decimal = document.querySelector('#decimal');

let somar = document.querySelector('#somar');
let subtrair = document.querySelector('#subtrair');
let multiplicar = document.querySelector('#multiplicar');
let dividir = document.querySelector('#dividir');
let limpar = document.querySelector('#limpar');
let igual = document.querySelector('#igual');
let resultado = document.querySelector('#resultado');


zero.addEventListener('click', () => {
    resultado.value += "0";
})
um.addEventListener('click', () => {
    resultado.value += "1";
})
dois.addEventListener('click', () => {
    resultado.value += "2";
})
tres.addEventListener('click', () => {
    resultado.value += "3";
})
quatro.addEventListener('click', () => {
    resultado.value += "4";
})
cinco.addEventListener('click', () => {
    resultado.value += "5";
})
seis.addEventListener('click', () => {
    resultado.value += "6";
})
sete.addEventListener('click', () => {
    resultado.value += "7";
})
oito.addEventListener('click', () => {
    resultado.value += "8";
})
nove.addEventListener('click', () => {
    resultado.value += "9";
})

somar.addEventListener('click', () => {
    resultado.value += "+";
})
subtrair.addEventListener('click', () => {
    resultado.value += "-";
})
multiplicar.addEventListener('click', () => {
    resultado.value += "*";
})
dividir.addEventListener('click', () => {
    resultado.value += "/";
})
decimal.addEventListener('click', () => {
    resultado.value += ".";
})

limpar.addEventListener('click', function ()  {
    resultado.value = "";
})

igual.addEventListener('click', function ()  {
    resultado.value = eval(resultado.value);

})




