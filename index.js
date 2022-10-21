
let myBooks = []

function book(title,author,totalPages,completedPages) {
    this.title = title,
    this.author = author,
    this.totalPages = totalPages,
    this.completedPages = completedPages
}

function addBook(book) {
    myBooks.push(book)
}

function displayBooks(myBooks) {
    for(let i = 0;i < myBooks.length;i++) {
        let bookContent = document.querySelector('.content')
        let bookCard = document.createElement('div')
        bookCard.classList.add('card')

        bookCard.appendChild(getBookInfo(myBooks[i]))
        // bookCard.textContent = `${myBooks[i]['title']}, ${myBooks[i]['author']}`
        bookContent.appendChild(bookCard)
    }
}

function getBookInfo(book) {
    
    let info = document.createElement('pre')

    info.textContent = 
    `Title: ${book['title']},
    Author: ${book['author']},
    Total Pages: ${book['totalPages']},
    Pages Read: ${book['completedPages']}`
    
    return info
}


const harryPotter = new book('Sorcerers Stone','JK Rowling','300', '250')

addBook(harryPotter)

const gameOfThrones = new book('Ice and Fire','George RR Martin', "600",'400')

addBook(gameOfThrones)

const theRoad = new book('The Road','Cormac Mccarthy','200','100')

addBook(theRoad)

console.log(myBooks)

displayBooks(myBooks)


const addBookButton = document.querySelector('.newBookButton')
addBookButton.addEventListener('click', () => {
    let form = document.createElement('form')
    window.prompt()

})

