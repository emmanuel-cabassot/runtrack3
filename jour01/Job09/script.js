var tableau = [0, 7, 5, 12, 0, 1]


/* function order() {
    tableau.forEach(element => {
        order();
    });
} */

function tri(tableau, desc) {

    if (desc == 'asc') {

        var modifie;
        do {
            modifie = false;
            for (var index = 0; index < tableau.length - 1; index++) {
                if (tableau[index] > tableau[index + 1]) {
                    var tempo = tableau[index];
                    tableau[index] = tableau[index + 1];
                    tableau[index + 1] = tempo;
                    modifie = true;
                }
            }
        } while (modifie == true);

        console.log(tableau);
    }
    else if (desc == 'desc') {
        var modifie;
        do {
            modifie = false;
            for (var index = 0; index < tableau.length - 1; index++) {
                if (tableau[index] < tableau[index + 1]) {
                    var tempo = tableau[index];
                    tableau[index] = tableau[index + 1];
                    tableau[index + 1] = tempo;
                    modifie = true;
                }
            }
        } while (modifie == true);

        console.log(tableau);
    }
    else{
        console.log('dans la fonction tri le deuxieme element doit etre \'desc\' ou \'asc\'')
    }
}

tri(tableau, 'asc')
