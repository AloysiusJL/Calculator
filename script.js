let number1 = null
let number2 = null
let operator = null
let result = null

const screen1 = document.getElementById('result')
const screen2 = document.getElementById('input')

const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const persentage = document.getElementById('persentage');
const float = document.getElementById('float');
const subtract = document.getElementById('subtract');
const nimPlus = document.getElementById('nimPlus');
const multiply = document.getElementById('multiply');
const add = document.getElementById('add');

const numPad0 = document.getElementById('numPad0');
const numPad1 = document.getElementById('numPad1');
const numPad2 = document.getElementById('numPad2');
const numPad3 = document.getElementById('numPad3');
const numPad4 = document.getElementById('numPad4');
const numPad5 = document.getElementById('numPad5');
const numPad6 = document.getElementById('numPad6');
const numPad7 = document.getElementById('numPad7');
const numPad8 = document.getElementById('numPad8');
const numPad9 = document.getElementById('numPad9');

numPad0.addEventListener('click', function(){
    screen2.append(numPad0.innerText)
    number1 = screen2.innerText
})
numPad1.addEventListener('click', function(){
    screen2.append(numPad1.innerText)
    number1 = screen2.innerText
})
numPad2.addEventListener('click', function(){
    screen2.append(numPad2.innerText)
    number1 = screen2.innerText
})
numPad3.addEventListener('click', function(){
    screen2.append(numPad3.innerText)
    number1 = screen2.innerText
})
numPad4.addEventListener('click', function(){
    screen2.append(numPad4.innerText)
    number1 = screen2.innerText
})
numPad5.addEventListener('click', function(){
    screen2.append(numPad5.innerText)
    number1 = screen2.innerText
})
numPad6.addEventListener('click', function(){
    screen2.append(numPad6.innerText)
    number1 = screen2.innerText
})
numPad7.addEventListener('click', function(){
    screen2.append(numPad7.innerText)
    number1 = screen2.innerText
})
numPad8.addEventListener('click', function(){
    screen2.append(numPad8.innerText)
    number1 = screen2.innerText
})
numPad9.addEventListener('click', function(){
    screen2.append(numPad9.innerText)
    number1 = screen2.innerText
})
clear.addEventListener('click', function(){
    screen2.remove(this.innerText)
})

function calAdd(num1, num2){number1 = num1 + num2}
function calSubtract(num1, num2){number1 = num1 - num2}
function calMultiply(num1, num2){number1 = number1 * number2}
function calDivide(num1, num2){number1 = num1 / num2}

function operate(operator, num1, num2){
    switch(operate){
        case('+'): return calAdd(num1, num2)
        case('-'): return calSubtract(num1, num2)
        case('*'): return calMultiply(num1, num2)
        case('/'): return calDivide(num1, num2)
    }
}