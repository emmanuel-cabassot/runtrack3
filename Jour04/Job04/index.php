<?php
require('users.php');
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</head>

<body>
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
    </table>
    <button type="button" id="button">update</button>
    <script>
        var tab = <?= json_encode($tab); ?>;
        var tableau = JSON.parse(tab)
        for (const valeur of tableau) {
            var tr = document.createElement('tr')
            tbody.append(tr)

            var td = document.createElement('td')
            td.textContent = valeur.id
            tr.append(td)

            var ta = document.createElement('td')
            ta.textContent = valeur.nom
            tr.append(ta)

            var tb = document.createElement('td')
            tb.textContent = valeur.prenom
            tr.append(tb)

            var tc = document.createElement('td')
            tc.textContent = valeur.email
            tr.append(tc)
        }

        button.addEventListener('click', () => {
            <?php
            // Connexion a la BDD avec descriptif plus clair si il y a une erreur (array) 
            try {
                $bdd = new PDO('mysql:host=localhost;dbname=runtrack03;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            }
            // En cas d'erreur, on affiche un message et on arrête tout
            catch (Exception $e) {
                die('Erreur : ' . $e->getMessage());
            }
            // Si tout va bien, on peut continuer

            $req = $bdd->query('SELECT * FROM `utilisateurs`');
            $data = $req->fetchAll(PDO::FETCH_OBJ);
            $tab = json_encode($data);
            ?>
            var tab = <?= json_encode($tab); ?>;
            var tableau2 = JSON.parse(tab)
            for (const valeur of tableau2) {
                let tr = document.createElement('tr')
                tbody.append(tr)

                let td = document.createElement('td')
                td.textContent = valeur.id
                tr.append(td)

                let ta = document.createElement('td')
                ta.textContent = valeur.nom
                tr.append(ta)

                let tb = document.createElement('td')
                tb.textContent = valeur.prenom
                tr.append(tb)

                let tc = document.createElement('td')
                tc.textContent = valeur.email
                tr.append(tc)
            }
        })
    </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="script.js"></script>

</body>

</html>