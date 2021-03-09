let button = document.querySelector('button');
let compteur = document.querySelector('#compteur');

function addone() {
    compteur.innerHTML ++
}

button.addEventListener('click', (addone))