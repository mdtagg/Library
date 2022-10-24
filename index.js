
// let myBooks = []

// function book(title,author,totalPages,completedPages) {
//     this.title = title,
//     this.author = author,
//     this.totalPages = totalPages,
//     this.completedPages = completedPages
// }

// function addBook(book) {
//     myBooks.push(book)
// }

// function displayBooks(myBooks) {
//     for(let i = 0;i < myBooks.length;i++) {
//         let bookContent = document.querySelector('.content')
//         let bookCard = document.createElement('div')
//         bookCard.classList.add('card')

//         bookCard.appendChild(getBookInfo(myBooks[i]))
//         // bookCard.textContent = `${myBooks[i]['title']}, ${myBooks[i]['author']}`
//         bookContent.appendChild(bookCard)
//     }
// }

// function getBookInfo(book) {
    
//     let info = document.createElement('pre')

//     info.textContent = 
//     `Title: ${book['title']},
//     Author: ${book['author']},
//     Total Pages: ${book['totalPages']},
//     Pages Read: ${book['completedPages']}`
    
//     return info
// }


// const harryPotter = new book('Sorcerers Stone','JK Rowling','300', '250')

// addBook(harryPotter)

// const gameOfThrones = new book('Ice and Fire','George RR Martin', "600",'400')

// addBook(gameOfThrones)

// const theRoad = new book('The Road','Cormac Mccarthy','200','100')

// addBook(theRoad)

// console.log(myBooks)

// displayBooks(myBooks)


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
const bookTitle = document.getElementById('title')


const addBook = document.getElementById('addBookButton')
addBook.addEventListener('click', closeForm)
addBook.addEventListener('click', createBookCard)
addBook.addEventListener('click', createBook)

function createBookCard() {
    let card = document.createElement('div')
    card.classList.add('card')
    bookCards.appendChild(card)
}

let newBook = new book(bookTitleValue)

function book(title) {
    this.title = title
}

bookCards.appendChild(newBook)






// const author = document.getElementById('author')
const pages = document.getElementById('pages')













//problem
 
// const resultsList = document.getElementById('books')

// addBook.addEventListener('click', () => popUpBookCard)

// function popUpBookCard() {
//     console.log('pop up book ran')
//     resultsList.style.display = 'block'
//     new URLSearchParams(window.location.search).forEach((value,name) => {
//         resultsList.append(`${name}:${value}`)
//         resultsList.append(document.createElement('br'))
//     })
// }


// console.log(resultsList)
