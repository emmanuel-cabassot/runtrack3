/* let article = document.querySelector('article');
let button  = document.querySelector('#button');
let cacher  = document.querySelector('#cacher')

 */
let hidden = false;
let article = $('article').css('color', 'red');
let button = $('#button').css('background-color', 'blue');
let cacher = $('#cacher').css('background-color', 'red');

if (hidden == true) {
    $('article').css('display', 'none');
    $('#cacher').css('display', 'none');
   $('#button').on('click', function () {
        $('#cacher').css('display', 'block');
        $('#button').css('display', 'none');
        $('article').css('display', 'block');
        hidden = 'bb'
    });

}


   $('#cacher').on('click', function () {
       console.log(hidden)
        $('#cacher').css('display', 'none');
        $('#button').css('display', 'block');
        $('article').css('display', 'none');
        
        hidden = true;
    });

