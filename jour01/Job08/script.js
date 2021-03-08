let chiffre = 2
function sommeNombresPremiers(nombre1, nombre2) {
    while (chiffre < nombre1) {
        if (nombre1 % chiffre == 0) {
            return false;
        }
        chiffre++
    }

    while (chiffre < nombre2) {
        if (nombre2 % chiffre == 0) {
            return false;
        }
        chiffre++
    }

    return nombre1 + nombre2
    
}

let somme = sommeNombresPremiers(2, 3)
if (somme == false) {
    console.log('Un des 2 chiffres n\'est pas un nombre premier')
}
else{
    console.log(somme)
}
