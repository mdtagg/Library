
// pop up the form menu

const addBookButton = document.querySelector('.newBookButton')
let form = document.querySelector('.book-form')
addBookButton.addEventListener('click', popUp)

function popUp() {
    form.style.display = 'block'
    titleNode.value = ''
    authorNode.value = ''
    pagesNode.value = ''
}

//close button on form
const closeButton = document.getElementById('close-button')
closeButton.addEventListener('click', closeForm)

function closeForm(e) {
    form.style.display = 'none'
    if(e.target.id !== 'addBookButton') {
        titleNode.value = ''
        authorNode.value = ''
        pagesNode.value = ''
    }
}

//creating book cards

let myLibrary = []
const bookCardContainer = document.getElementById('book-card-container')
const addBook = document.getElementById('addBookButton')

const titleNode = document.getElementById('title')
const authorNode = document.getElementById('author')
const pagesNode = document.getElementById('pages')
const readNode = document.getElementById('have-read')

addBook.addEventListener('click', closeForm)
addBook.addEventListener('click', addBookToLibrary)

function addBookToLibrary() {
    let titleNodeValue = titleNode.value
    let authorNodeValue = authorNode.value
    let pagesNodeValue = pagesNode.value
    let readNodeValue = readNode.value
    console.log(readNodeValue)

    let newBook = new Book(titleNodeValue,authorNodeValue,pagesNodeValue,readNodeValue)

    myLibrary.push(newBook)
    console.log(myLibrary)

    createBookCard(myLibrary)
}

function createBookCard(library) {

    let counter = 0
    if(library.length > 1) {
        counter = library.length - 1
    }
    for(let i = counter;i < library.length;i++) {

        let bookCard = document.createElement('div')
        bookCard.classList.add('card')
        bookCard.setAttribute('data-attribute',`${counter}`)

        let deleteBookCard = document.createElement('p')
        deleteBookCard.classList.add('card-close')
        deleteBookCard.textContent = 'x'
        deleteBookCard.setAttribute('data-attribute',`${counter}`)
        deleteBookCard.addEventListener('click', deleteCard)

        let titleText = document.createElement('p')
        titleText.classList.add('card-title')
        titleText.textContent = library[i].title

        let authorText = document.createElement('p')
        authorText.textContent = library[i].author

        let pagesNumber = document.createElement('p')
        pagesNumber.textContent = library[i].pages

        bookCard.appendChild(deleteBookCard)
        bookCard.appendChild(titleText)
        bookCard.appendChild(authorText)
        bookCard.appendChild(pagesNumber)

        let readButtonContainer = document.createElement('span')
        let readButton = document.createElement('input')
        readButton.setAttribute('type','checkbox')
        readButton.setAttribute('data-attribute',`${counter}`)
        readButton.addEventListener('click', toggleRead)

        readButtonContainer.appendChild(readButton)


        if(library[i].read === 'Read') {
            bookCard.classList.add('solid-green-border')
            // bookCard.style.borderLeft = '10px solid green'
            let haveRead = document.createElement('p')
            haveRead.textContent = 'Read'
            readButton.checked = true
            haveRead.appendChild(readButtonContainer)
            bookCard.appendChild(haveRead)
        }else {
            bookCard.classList.add('solid-yellow-border')
            // bookCard.style.borderLeft = '10px solid yellow'
            let haveNotRead = document.createElement('p')
            haveNotRead.textContent = 'Not Read'
            haveNotRead.appendChild(readButtonContainer)
            bookCard.appendChild(haveNotRead)
        }
        bookCardContainer.appendChild(bookCard)
    }
}

function Book(title,author,pages,read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function deleteCard(e) {
    let allCards = document.querySelectorAll('.card')
    for(let i = 0;i < allCards.length;i++) {
        if(allCards[i].dataset.attribute === e.target.dataset.attribute) {
            allCards[i].style.display = 'none'
        }
    }
}

function toggleRead(e) {

    let isChecked = document.querySelectorAll('.card')
    
    for(let i = 0;i < isChecked.length;i++) {

        if(!e.target.checked && isChecked[i].dataset.attribute === e.target.dataset.attribute) {
            isChecked[i].style.borderLeft = '10px solid yellow'
        } else {
            isChecked[i].style.borderLeft = '10px solid green'
        }
    }
}

// let bookCards = document.getElementById('book-card-container')

// const haveReadNode = document.getElementById('read')


// const addBook = document.getElementById('addBookButton')
// addBook.addEventListener('click', closeForm)
// addBook.addEventListener('click', createBookCard)

// function createBookCard() {
//     let card = document.createElement('div')
//     card.classList.add('card')
//     bookCards.appendChild(card)

//     let titleValue = titleNode.value
//     let authorTitle = authorNode.value
//     let pagesTitle = pagesNode.value 

//     let newBook = new Book(titleValue,authorTitle,pagesTitle)

//     let cardTitle = document.createElement('p')
//     cardTitle.classList.add('card-title')
//     cardTitle.textContent = newBook.title

//     let authorValue = document.createElement('p')
//     authorValue.textContent = newBook.author

//     let pagesValue = document.createElement('p')
//     pagesValue.textContent = newBook.pages

//     let haveReadLabel = document.createElement('label')
//     haveReadLabel.setAttribute('for','haveRead')
//     haveReadLabel.textContent = 'Read?'
    

//     let readValue = document.createElement('input')
//     readValue.setAttribute('type','checkbox')
//     readValue.setAttribute('name','haveRead')
//     readValue.setAttribute('id','haveRead')

//     card.appendChild(cardTitle)
//     card.appendChild(authorValue)
//     card.appendChild(pagesValue)
//     card.appendChild(haveReadLabel)
//     card.appendChild(readValue)
// }

// function Book(title,author,pages) {
//     this.title = title,
//     this.author = author,
//     this.pages = pages
// }
