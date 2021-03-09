
let NomTouche
let code = ''
let konami = 38384040373937396665

document.addEventListener('keydown', (e) => {
    
    NomTouche = e.keyCode;
    code += NomTouche 
    console.log(code)
    if (code == konami) {
        
    }
}) 



