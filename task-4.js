'use strict';
const credits = 23580;
const pricePerDroid = 3000;
const message = prompt('Введите количество дроидов, которое желаете приобрести');
let totalPrice;

if (message === null) {
console.log('Отменено пользователем!');
} else {
totalPrice = pricePerDroid * message;
if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
    } else {
        console.log(`Вы купили ${message} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
    }
}

