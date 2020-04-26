
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const insertPassword = prompt('Пожалуйста, введите пароль');
if(insertPassword === null) {
    message = 'Отменено пользователем!';
} else if (insertPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);