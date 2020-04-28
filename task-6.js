'use strict';

let input;
let total = 0;

do {
input = prompt ('Введите, пожалуйста, число');
if(Number.isNaN(input)) {
    alert('Введено не число, попробуйте еще раз');
} else {
    total += Number(input);
}
} while (input !== null) {
alert(`Общая сумма чисел равна ${total}`);
}
