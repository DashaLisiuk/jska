'use strict'
let randomNumber = Math.ceil( Math.random() *100);
let startTime = ( Date.now() );
let userNumber = +prompt('я загадла число от 1 до 100.\nгадай теперь:',0);
while (userNumber !== 0 !==randomNumber && userNumber !==0 ) {
    if (isNaN(userNumber)) {
        console.log('Ваше число неверное, это не число вообще, еще попыточку плес');
    }
    else if (userNumber < randomNumber) {
        userNumber = +prompt('мое число больше твоего ахахах, гоняй дальше');
    }
    else if (userNumber > randomNumber) {
        userNumber = +prompt('мое число меньше твоего ахахах, гоняй дальше');
    }
}
let exitMassage = 'ну вот и слабааак правильный ответ: + randomNumber';
let winMassage = 'красааава угадал, правильное число + randomNumber + \nТЫ потратил' + resultTime + 'сек';
if (userNumber === 0) alert(exitMassage);
else alert(winMassage);