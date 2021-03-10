let tableau = ['<img src="img/arc1.png" alt="">', '<img src="img/arc2.png" alt="">', '<img src="img/arc3.png" alt="">', '<img src="img/arc4.png" alt="">', '<img src="img/arc5.png" alt="">', '<img src="img/arc6.png" alt="">']

function melange(tabeau) {
    var i, j, tmp;
    for (i = tableau.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tableau[i];
        tableau[i] = tableau[j];
        tableau[j] = tmp;
    }
    return tabeau;
}

tableau = melange(tableau);
var melanges;

$('#button').on('click', function () {
    for (let index = 1; index < 7; index++) {
        $('#rangees .' + index ).empty() 
        $('#melangees .'  + index).html(tableau[index - 1])  
        $('#button').css('display', 'none')
    }
});

let tour = 1;
$('#melangees .1').on('click', function(){
    tempo = $('#melangees .1').html();
    $('#rangees .' + tour).html(tempo);
    $('#melangees .1').empty();
    tour ++
});

$('#melangees .2').on('click', function(){
    tempo = $('#melangees .2').html();
    $('#rangees .' + tour).html(tempo);
    $('#melangees .2').empty();
    tour ++
});

$('#melangees .3').on('click', function(){
    tempo = $('#melangees .3').html();
    $('#rangees .' + tour).html(tempo);
    $('#melangees .3').empty();
    tour ++
});

$('#melangees .4').on('click', function(){
    tempo = $('#melangees .4').html();
    $('#rangees .' + tour).html(tempo);
    $('#melangees .4').empty();
    tour ++
});

$('#melangees .5').on('click', function(){
    tempo = $('#melangees .5').html();
    $('#rangees .' + tour).html(tempo);
    $('#melangees .5').empty();
    tour ++
});

$('#melangees .6').on('click', function(){
    tempo = $('#melangees .6').html();
    $('#rangees .' + tour).html(tempo);
    $('#melangees .6').empty();
    tour ++
});

if ($('#melangees .6') != '') {
    console.log('ca marche')
}
