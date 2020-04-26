'use script';
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

const message = prompt('Введите страну доставки');
let other;
if(message === null) {
    alert('Отменено пользователем')
} else {
    switch (message.toLowerCase()) {
        case 'китай':
        alert(`Доставка в ${message} будет стоить ${priceChina} кредитов`);
        break;
        
        case 'чили':
        alert(`Доставка в ${message} будет стоить ${priceChile} кредитов`);
        break;
        
        case 'австралия':
        alert(`Доставка в ${message} будет стоить ${priceAustralia} кредитов`);
        break;
        
        case 'индия':
        alert(`Доставка в ${message} будет стоить ${priceIndia} кредитов`);
        break;
        
        case 'ямайка':
        alert(`Доставка в ${message} будет стоить ${priceJamaica} кредитов`);
        break;

        default:
        alert('В вашу страну доставка не доступна');
        }
} 