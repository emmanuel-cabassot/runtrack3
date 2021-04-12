<?php
    require_once('User.php');
    $user = new User();

    $nom = trim(htmlspecialchars($_POST['nom']));
    $prename = trim(htmlspecialchars($_POST['prenom']));
    $mail = trim(htmlspecialchars($_POST['email']));
    $pass = trim(htmlspecialchars($_POST['password']));

    $user->register($nom, $prename, $mail, $pass);
?>