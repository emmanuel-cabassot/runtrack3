let emailConnexion = document.querySelector('.connexion #email')
let passwordConnexion = document.querySelector('.connexion #password')
let buttonConnexion = document.querySelector('.connexion #submit')

passwordConnexion.addEventListener("input", checkPass)
emailConnexion.addEventListener("input", checkEmail)
buttonConnexion.addEventListener("click", (e) =>{
    
})
var emailOk;
var passwordOk;

function checkPass() {
    // On initialise un score
    let score = 0;

    // On récupère ce qui a été saisi
    let mdp = passwordConnexion.value;

    // On va chercher les éléments dont on a besoin
    let minuscule = document.querySelector('#minuscule')
    let majuscule = document.querySelector('#majuscule');
    let chiffre = document.querySelector('#chiffre');
    let special = document.querySelector('#special');
    let longueur = document.querySelector('#longueur')

    // On vérifie qu'on a une minuscule
    if (/[a-z]/.test(mdp)) {
        // On passe en vert minuscule (valid)
        minuscule.classList.replace("invalid", "valid");
        score++;
    } else {
        // On passe en rouge minuscule (invalid)
        minuscule.classList.replace('valid', 'invalid');
    }

    // On vérifie qu'on a une majuscule
    if (/[A-Z]/.test(mdp)) {
        // On passe en vert (valid)
        majuscule.classList.replace('invalid', 'valid');
        score++;
    } else {
        // On passe en rouge (invalid)
        majuscule.classList.replace('valid', 'invalid');
    }

    // On vérifie qu'on a un chiffre
    if (/[0-9]/.test(mdp)) {
        // On passe en vert (valid)
        chiffre.classList.replace('invalid', 'valid');
        score++;
    } else {
        // On passe en rouge (invalid)
        chiffre.classList.replace('valid', 'invalid');
    }

    // On vérifie qu'on a un caractère spécial
    if (/[$@!/\\%*#&]/.test(mdp)) {
        // On passe en vert  (valid)
        special.classList.replace('invalid', 'valid');
        score++;
    } else {
        // On passe en rouge  (invalid)
        special.classList.replace('valid', 'invalid');
    }

    // On vérifie la longueur du mdp
    if (mdp.length >= 6) {
        // On passe en vert
        longueur.classList.replace('invalid', 'valid');
        score++;
    } else {
        // On passe en rouge
        longueur.classList.replace('valid', 'invalid')
    }

    if (score == 5) {
        passwordOk == true;
        if (emailOk == true) {
            buttonConnexion.disabled = false
        }
    }
}

function checkEmail() {
    // On récupère la valeur d'email
    let email = emailConnexion.value;

    // On va chercher l'element qui affiche que l'email est au bon format
    let emailValide = document.querySelector('#emailValide')

    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        // email valide

        emailValide.classList.replace('cacher', 'vue')
        emailOk =true;
        if (passwordOk == true ) {
            buttonConnexion.disabled = false
            
        }
    } else {
        // Email non valide
        emailValide.classList.replace('vue', 'cacher')
    }
}