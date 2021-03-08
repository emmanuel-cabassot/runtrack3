function bisextile(année){
    if (année%4 == 0) {
        return true
    }
    else{
        return false
    }
}


if (bisextile(2024) == true) {
    console.log('année bisextile')
}
else{
    console.log("Pas une année bisextile")
}