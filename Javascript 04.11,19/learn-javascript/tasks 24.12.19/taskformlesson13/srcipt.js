let age = prompt('Введите ваш возраст?', 18)
let name = prompt('Введите ваще имя?', 'Ваня')
let emailConnect = confirm('Подписаны ли вы на нашу рассылку?')

function access(userAge, userName, userEmailConnect) {
  if ( age >=  18 && emailConnect == true ) {
    console.log('Вы допущены')
  } else {
    console.log('Доступ запрещен')
  }
}

access(age, name, emailConnect)