$(document).ready(function(){
    console.log('App is ready');

    $('#login').click(function(){
        var mail = $('#mail').val();
        var password = $('#password').val();
        $.ajax({
            url: 'api/log.php',
            method: 'POST',
            data: {
                mail: mail,
                password: password
            },
            dataType: 'json',
            success: function(data){
                console.log(data);
            },
            error: function(){
                console.error('Erreur');
            }
        })
    })















    $('#register').click(function(){
        if($('#prename').val() != '' && $('#name').val() != '' && $('#mail').val() != '' && $('#password').val() != '' && $('#cpassword').val() != ''){
            var prename = $('#prename').val();
            var name = $('#name').val();
            var mail = $('#mail').val();
            var password = $('#password').val();
            var cpassword = $('#cpassword').val();

            if(password === cpassword){
                console.log(prename, name, mail, password, cpassword);
                $.ajax({
                    url: 'api/reg.php',
                    method: 'POST',
                    data: {
                        name: name,
                        prename: prename,
                        mail: mail,
                        password: password
                    },
                    success: function(){
                        $(location).attr('href', 'login.php');
                    },
                    error: function(){
                        alert("Erreur lors de l'inscription");
                    } 
                })
            }
            else{
                console.error('Les mots de passes ne correspondent pas');
                $('#password').val('');
                $('#cpassword').val('');
                $('#password').focus();
            }
        }
        else{
            console.clear();
            console.error('Veuillez remplir tous les champs');
            $('#prename').focus();
        }
    })
})