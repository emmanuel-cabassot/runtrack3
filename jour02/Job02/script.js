let button = document.querySelector('button');
let citation = document.querySelector('article');
let hide = true;

function showhide() {
    if (hide == true) {
        citation.textContent = "“L'important n'est pas la chute, mais l'atterrissage.”"
        hide = false;
    }
    else{
        citation.textContent = " ";
        hide = true;
    }
}

button.addEventListener('click', (showhide));
