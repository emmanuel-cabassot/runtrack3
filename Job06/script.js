let chiffre = 0;
for (let index = 0; index < 152; index++) {
    if (chiffre%3 == 0 && chiffre%5 == 0) {
        console.log('FizzBuzz');
        chiffre++
        continue
        
    } 
    else if (chiffre%3 == 0) {
        console.log('Fizz')
        chiffre++

    }
    else if (chiffre%5 == 0) {
        console.log('Buzz')
        chiffre++
    }
    console.log(chiffre)
    chiffre++
}