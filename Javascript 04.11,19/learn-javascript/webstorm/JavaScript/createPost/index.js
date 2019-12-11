const createPost = (title, text, date = new Date().toLocaleDateString()) => {
  return {title, text, date}
}

const post = createPost("Скоро новый год!", "Скоро будет 2020!", "20.12.2019")
console.log(post)