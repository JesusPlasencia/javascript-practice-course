// !TITLE
let h1 = document.querySelector('h1')
h1.innerText = 'CALCULADORA MATEMATICA'
h1.style = 'color: blue;'

// !NUMBER 1 && NUMBER 2
let number1 = document.querySelector('#calculo1')
let number2 = document.querySelector('#calculo2')

// !FORM
let form = document.querySelector('#form');

// !BUTTON (Metodo 1)
let button = document.querySelector('#btnCalcular')
function btnOnClick() {
    let result = "";
    let h3 = document.createElement('h3');
    result = parseInt(number1.value) + parseInt(number2.value);
    h3.innerText = `The sum of ${number1.value} + ${number2.value} = ${result}.`
    document.body.append(h3);
    return;
}

// !BUTTON (Metodo 2)
// button.addEventListener('click', btnOnClick);
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    let result = "";
    let h3 = document.createElement('h3');
    result = parseInt(number1.value) + parseInt(number2.value);
    h3.innerText = `The sum of ${number1.value} + ${number2.value} = ${result}.`
    document.body.append(h3);
    return;
}