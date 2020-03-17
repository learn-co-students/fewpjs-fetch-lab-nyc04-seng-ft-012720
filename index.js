function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") //fetch from an api
  .then(resp => resp.json())//get the json repsonse
  .then(json => renderBooks(json))//pass the json as an argument in the funciton to render the data
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
