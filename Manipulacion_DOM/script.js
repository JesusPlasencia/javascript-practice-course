let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let parrafito = document.querySelector('.parrafito');
let pid = document.querySelector('#pid');
let input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// !H1
h1.innerHTML = 'Patito <br> Feo'
h1.innerText = 'Just Feo'
// console.log(h1.getAttribute('class'))
// h1.setAttribute('class', 'rojo')
h1.classList.add('rojo')
h1.classList.remove('verde')
// h1.classList.toggle('verde')
// h1.classList.contains('verde')


// !INPUT
input.value = 456
input.placeholder = 'Changing placeholder'
// input.style = 'display: block;'

// !CREATE ELEMENT
const imgCreated = document.createElement('img')
imgCreated.setAttribute('src', 'https://occ-0-999-1009.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQZtslU0LfgaZ5T4Dt-z-h7H6Z52nCMW_O9GRVqbBs1rn9aR5ojEX7TDCGPRGDi9bTWROmc0LhWWON5k2OU4exEpFAms0VoF7A.jpg?r=01d')
imgCreated.title = 'Breaking Bad (2013)'
imgCreated.style = 'width: 40%; height: auto; margin: 0px auto;'
document.body.append(imgCreated)

// !APPEND CHILD
let container = document.getElementsByClassName('container').item(0);
const h2 = document.createElement('h2');
h2.innerText = 'Just a Subtitle'
h2.title = 'Subtitle';
container.appendChild(h2);