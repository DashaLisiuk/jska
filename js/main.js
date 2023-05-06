'use strict';

// Удаление всех символов из строки str кроме чисел
const getNumbers = (str) => str.replace(/\D+/g,"");
 
let userName = '', userAge='', userTel = '', userEmail='';

function inputEmail( email ) { 
    userEmail = email.trim();
    console.log('ИМЕЙЛ ПОЛЬЗОВАТЕЛЯ', email);
}
function inputName( name ) { 
    userEmail = name.trim();
    console.log('ИМЯ ПОЛЬЗОВАТЕЛЯ', name);
}
function inputAge( age ) { 
    userEmail = age.trim();
    console.log('ВОЗРАСТ ПОЛЬЗОВАТЕЛЯ', age);
}
function inputTel( tel ) { 
    userEmail = tel.trim();
    console.log(' ТЕЛЕФОН ПОЛЬЗОВАТЕЛЯ', tel);
}

function send() { 

    if (userName.lenght < 2) {
        alert('введено меньше 2 символов');
    }
    
    else if ( userEmail.lenght < 5 ) {
        alert('В имейле меньше 5 символов');
    } else if (userEmail.indexOf('@') > 0) {
            alert('где пёс?')
            elseIf (userName < 5 || userEmail.indexOf('@'))
            alert(' меньше двух символов');
        } 
        else {
            alert('отправлено');
        }
    }



