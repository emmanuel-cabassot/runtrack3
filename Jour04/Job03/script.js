let button = document.querySelector('button')
let idInput = document.querySelector('#id')
let nomInput = document.querySelector('#nom')
let p = document.querySelector('p')
let select = document.querySelector('option')


button.addEventListener('click', () => {
    fetch('pokemon.json')
        .then((reponse) => {
            if (reponse.ok) {
                return reponse.json()
                    .then((json) => {
                        if (idInput.value != '') {
                            for (const donnee of json) {
                                if (donnee.id == idInput.value) {
                                    p.innerHTML += "Nom :" + donnee.name.french + "<br> Id: " + donnee.id + "<br>"
                                }
                            }
                        }
                        if (nomInput != '') {
                            for (const donnee of json) {
                                if (donnee.name.french == nomInput.value) {
                                    p.innerHTML += "Nom :" + donnee.name.french + "<br> Id: " + donnee.id + "<br>"
                                }
                            }
                        }
                    })
            }
            else {
                console.log(reponse.statusText)
            }
        })

})