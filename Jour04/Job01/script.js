/* Version javascript Vanilla */
let button = document.querySelector('#button');

const url = 'expression.txt';
let requete = new XMLHttpRequest();

button.addEventListener('click', () => {
    requete.open('GET', 'expression.txt');
    requete.responseType = 'text';
    requete.send();

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let p = document.createElement('p');
                p.innerHTML=reponse;
                button.after(p)                    
            }
            else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
});

