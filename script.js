let number1 = 0
let number2 = 0
let result = 0
sign = ''

const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const shadow1 = document.getElementById('shadow1')
const shadow2 = document.getElementById('shadow2')

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

//logic for calculation
function calAdd(num1, num2){result = num1 + num2}
function calSubtract(num1, num2){result = num1 - num2}
function calMultiply(num1, num2){result = number1 * number2}
function calDivide(num1, num2){result = num1 / num2}

function operate(operator){
    switch(operator){
        case('+'): return calAdd(number1, number2)
        case('-'): return calSubtract(number1, number2)
        case('*'): return calMultiply(number1, number2)
        case('/'): return calDivide(number1, number2)
    }
}

//numpad print number to screen    
numPad0.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad0.innerText)
        shadow2.append(numPad0.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)
    }
    else if (sign === ''){
    screen1.append(numPad0.innerText)
    shadow1.append(numPad0.innerText)
    number1 = Number(shadow1.innerText)
}})
numPad1.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad1.innerText)
        shadow2.append(numPad1.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad1.innerText)
    shadow1.append(numPad1.innerText)
    number1 = Number(shadow1.innerText)
}})

numPad2.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad2.innerText)
        shadow2.append(numPad2.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad2.innerText)
    shadow1.append(numPad2.innerText)
    number1 = Number(shadow1.innerText)
}})

numPad3.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad3.innerText)
        shadow2.append(numPad3.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad3.innerText)
    shadow1.append(numPad3.innerText)
    number1 = Number(shadow1.innerText)

}})

numPad4.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad4.innerText)
        shadow2.append(numPad4.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad4.innerText)
    shadow1.append(numPad4.innerText)
    number1 = Number(shadow1.innerText)
}})

numPad5.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad5.innerText)
        shadow2.append(numPad5.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad5.innerText)
    shadow1.append(numPad5.innerText)
    number1 = Number(shadow1.innerText)
}})

numPad6.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad6.innerText)
        shadow2.append(numPad6.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad6.innerText)
    shadow1.append(numPad6.innerText)
    number1 = Number(shadow1.innerText)
}})

numPad7.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad7.innerText)
        shadow2.append(numPad7.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad7.innerText)
    shadow1.append(numPad7.innerText)
    number1 = Number(shadow1.innerText)
}})

numPad8.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad8.innerText)
        shadow2.append(numPad8.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad8.innerText)
    shadow1.append(numPad8.innerText)
    number1 = Number(shadow1.innerText)
}})

numPad9.addEventListener('click', function(){
    if (sign !== ''){
        screen1.append(numPad9.innerText)
        shadow2.append(numPad9.innerText)
        number2 = Number(shadow2.innerText)    
        operate(sign)    
    }
    else if (sign === ''){
    screen1.append(numPad9.innerText)
    shadow1.append(numPad9.innerText)
    number1 = Number(shadow1.innerText)
}})

//clear button
clear.addEventListener('click', function(){
    screen1.textContent = ''
    screen2.textContent = ''
    shadow1.textContent = ''
    shadow2.textContent = ''
    number1 = 0
    number2 = 0
    result = 0
    sign = ''
})


//operation button
add.addEventListener('click', function(){
    // if (sign != ''){
    //     screen1.append(' + ')    
    //     operate(sign)
    //     shadow1.textContent = ''
    //     shadow2.textContent = ''
    //     screen1.textContent = result
    //     sign = ''
    //     number1 = result
    //     number2 = 0
    //     result = 0    
    // }
    // else {
        sign = '+'
        screen1.append(' + ')    
    // }
})

subtract.addEventListener('click', function(){
    sign = '-'
    screen1.append(' - ')
})

multiply.addEventListener('click', function(){
    sign = '*'
    screen1.append(' X ')
})
divide.addEventListener('click', function(){
    sign = '/'
    screen1.append(' / ')
})
equal.addEventListener('click', function(){
    shadow1.textContent = ''
    shadow2.textContent = ''
    screen1.textContent = result
    sign = ''
    number1 = result
    number2 = 0
    result = 0

})