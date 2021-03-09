window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth

        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur

        // Calcul de la couleur
        let color = position / hauteur * 255

        // Modification du CSS de la barre
        document.getElementById("progress").style.width = barre+"px"
        document.querySelector("footer").style.backgroundColor = "rgb(" + color + ", " + color + ", " + color + ")"
    })  
    
    
}