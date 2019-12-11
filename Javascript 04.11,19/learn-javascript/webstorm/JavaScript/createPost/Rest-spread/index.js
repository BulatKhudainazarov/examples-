const form = document.querySelector("form")

form.addEventListener("submit", event => {

  event.preventDefault()
  const title = form.title.value
  const text = form.text.value
  const description = form.description.value

  // for Spread
  // saveForm({title, text, description})
  // for Rest
  saveForm(title, text, description)


})

// Spread
// function saveForm(data) {
//
//   const formData = {
//     date: new Date().toLocaleDateString(),
//     ...data
//   }
//
//   console.log("Form data", formData)
// }

// Rest
function saveForm(...args) {

  const [title, text, desription] = args

  const formData = {
    date: new Date().toLocaleDateString(),
    title, text, desription
  }

  console.log("Form data", formData)
}
