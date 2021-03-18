<?php
// Connexion a la BDD avec descriptif plus clair si il y a une erreur (array) 
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=runtrack03;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
// En cas d'erreur, on affiche un message et on arrête tout
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
// Si tout va bien, on peut continuer

$req = $bdd->query( 'SELECT * FROM `utilisateurs`');
    $data = $req->fetchAll(PDO::FETCH_OBJ); 
    $tab = json_encode($data);      
?>







