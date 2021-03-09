let textarea = document.querySelector('textarea')
let NomTouche


document.addEventListener('keypress', (e) => {
    NomTouche = e.key;
    textarea.innerHTML += NomTouche 
}) 
 
textarea.addEventListener('keypress', (event) => {
    NomTouche = event.key;
    textarea.innerHTML += NomTouche 
}) 


