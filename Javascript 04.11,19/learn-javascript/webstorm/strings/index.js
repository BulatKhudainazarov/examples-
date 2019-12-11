const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`

const ul = document.querySelector("ul")

const google = `<li>${createLink({path: 'https://google.com', name: "Google"})}</li>`

const yandex = `<li>${createLink({path: 'https://ya.ru', name: "Yandex"})}</li>`

ul.insertAdjacentHTML("afterbegin", google)
ul.insertAdjacentHTML("afterbegin", yandex)

console.log(createLink({path: 'https://google.com', name: "Google"}))
console.log(google)

const strToLog = `Hello
  Word
    I am
      New tab
`

console.log(strToLog)