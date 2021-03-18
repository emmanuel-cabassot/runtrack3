<?php
// Connexion a la BDD avec descriptif plus clair si il y a une erreur (array) 
try {
    $bdd = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
// En cas d'erreur, on affiche un message et on arrête tout
catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}
// Si tout va bien, on peut continuer

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <main>
        <section class="connexion">
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control email" id="email">
                    <div class="erreur_email">
                        <span id="emailValide" class="cacher">Email valide</span>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Mot de passe</label>
                    <input type="password" class="form-control" id="password">
                    <div class="erreur_password">
                        <p>Votre mot de passe doit contenir
                            <span id="minuscule" class='invalid'>une minuscule</span>/
                            <span id="majuscule" class='invalid'>une majuscule</span>/
                            <span id="chiffre" class='invalid'>un chiffre</span>/
                            <span id="special" class='invalid'>un caractère spécial</span>/
                            <span id="longueur" class='invalid'>minimim 6 caractères</span>
                        </p>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" id="submit" disabled="true">Connexion</button>
            </form>
        </section>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="script.js"></script>

</body>

</html>