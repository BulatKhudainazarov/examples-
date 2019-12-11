/*
  Client -> Server -> DataBase -> Server -> Client
*/

console.log('Клиент: хочу получить список пользователей')
console.log('...')

// setTimeout(function () {
//   console.log('Сервер: запрашиваю список пользователей в БД')
//   console.log('...')
//
//   setTimeout(function () {
//     console.log('БД: формирую список пользователей')
//     console.log('...')
//
//     setTimeout(function () {
//       console.log('Сервер: трансформирую данные для клиента')
//       console.log('...')
//
//       setTimeout(function () {
//         console.log('Клиент: получил данные и отображает их')
//       }, 1000)
//     }, 500)
//   }, 500)
// }, 1000)

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Сервер: запрашиваю список пользователей в БД')
    console.log('...')
    resolve()
  }, 1000)
})

promise.then(function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let users = [
        {uid: 'id1', name: 'Maxim'},
        {uid: 'id2', name: 'Elena'}
      ]
      // reject('БД не смогла получить список пользователей')
      console.log('БД: формирую список пользователей', users)
      console.log('...')
      resolve(users)
    }, 500)
  })
})
.then(function (dbUsers) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('Сервер: запрашиваю список пользователей в БД')
        console.log('...')
        let users = dbUsers.map(function (user) {
          return {
            id: user.uid,
            firstName: user.name,
            timestamp: Date.now()
          }
        })
        resolve(users)
      }, 500)
    })
  })
.then(function (users) {
  setTimeout(function () {
    console.log('Клиент: получил данные и отображает их', users)
  }, 1000)
})
.catch(function (error) {
  console.log(error)
})
// .finally(function () {
//   console.log('Finally')
// })