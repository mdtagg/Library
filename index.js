
const addBookButton = document.querySelector('.newBookButton')
let form = document.querySelector('.book-form')
addBookButton.addEventListener('click', popUp)

function popUp() {
    form.style.display = 'block'
}

const closeButton = document.getElementById('close-button')
closeButton.addEventListener('click', closeForm)

function closeForm() {
    form.style.display = 'none'
}


//Working solution

let bookCards = document.getElementById('book-card-container')
const bookNode = document.getElementById('title')
const authorNode = document.getElementById('author')
const pagesNode = document.getElementById('pages')


const addBook = document.getElementById('addBookButton')
addBook.addEventListener('click', closeForm)
addBook.addEventListener('click', createBookCard)

function createBookCard() {
    let card = document.createElement('div')
    card.classList.add('card')
    bookCards.appendChild(card)

    let bookTitleValue = bookNode.value
    let authorTitle = authorNode.value
    let pagesTitle = pagesNode.value 

    let newBook = new Book(bookTitleValue,authorTitle,pagesTitle)
    
    let cardTitle = document.createElement('p')
    cardTitle.textContent = newBook.title

    let authorValue = document.createElement('p')
    authorValue.textContent = newBook.author

    let pagesValue = document.createElement('p')
    pagesValue.textContent = newBook.pages

    card.appendChild(cardTitle)
    card.appendChild(authorValue)
    card.appendChild(pagesValue)
}

function Book(title,author,pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}
