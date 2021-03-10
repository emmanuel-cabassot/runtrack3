
let article = $('article').css('display', 'none');
let button = $('#button');
let cacher = $('#cacher').css('display', 'none');

$('#button').on('click', function () {
        $('#cacher').css('display', 'block');
        $('#button').css('display', 'none');
        $('article').css('display', 'block');     
    });

   $('#cacher').on('click', function () {
        $('#cacher').css('display', 'none');
        $('#button').css('display', 'block');
        $('article').css('display', 'none');
    });

