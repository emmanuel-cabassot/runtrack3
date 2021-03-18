let insere = {
    name: "La Plateforme_",
    address: "8 rue d'hozier",
    city: "Marseille",
    nb_staff: "11",
    creation: "2019"
}

let insertion = JSON.stringify(insere)

function jsonValueKey(result, key) {

    JSON.parse(result, function (nom, valeur) {
        if (nom == key) {
            return console.log(valeur)
        }
    })

}

jsonValueKey(insertion, 'creation')