const addBook = document.getElementById('addBook');
const shelf = document.getElementById('shelf');
const myLibrary = [
    {   Title: "Pride and Prejudice",
        Author: "Jane Austen",
        Pages: 226,
        Read: "read",
    },
    {   Title: "Dracula",
        Author: "Bram Stoker",
        Pages: 488,
        Read: "read",
    },
    {   Title: "Frankenstein",
        Author: "Mary Shelley",
        Pages: 352,
        Read: "read",
    },
    {   Title: "Bridget Jones's Diary",
        Author: "Helen Fielding",
        Pages: 320,
        Read: "read",
    },
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function(){
    //     alert(`${title} by ${author}, ${pages} pages, ${read}`)
    // };
}

function addBookToLibrary(){
    // 
}

function displayBooks(myLibrary){
    for (let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        let title = document.createElement('p');
        title.textContent = `Title: ${myLibrary[i].Title}`;
        let author = document.createElement('p');
        author.textContent = `Author: ${myLibrary[i].Author}`;
        let pages = document.createElement('p');
        pages.textContent = `Pages: ${myLibrary[i].Pages}`;
        let read = document.createElement('p');
        read.textContent = `Read: ${myLibrary[i].Read}`;
        let button = document.createElement('button');
        button.textContent = 'remove';
        card.appendChild(title)
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(button);
        card.classList.add('card');
        shelf.appendChild(card);
    } 
}

displayBooks(myLibrary);


/*
PAGE loads
DISPLAYS current collection
CLICK add book
    OUTPUT form
    SUBMIT data
    CREATES book
    ADD book to collection

DISPLAY BOOKS - RESULTS OF ATTEMPT 1
    - creates an array with 5(?) items(div.card)
    - each array has all books therefore books are multiplied by 5
    - TypeError at return statement Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

    let book = [];
    for (let i = 0; i <= myLibrary.length; i++){
        // CREATE card (div)
        book[i] = document.createElement('div');
        //FOR EACH PROPERTY
        for (const [key, value] of Object.entries(myLibrary)){
            //CREATE DOM element
            let property = document.createElement('div');
            //output property to element
            property.textContent = `${value}`;
            //append element to book[i]
            book[i].appendChild(property);
        //END FOR    
        }
        // CREATE delete button 
        let button = document.createElement('button');
        // ADD text to button
        button.textContent = 'remove';
        // ADD button to card
        book[i].appendChild(button);
        // ADD class to div
        book[i].classList.add('card');
    // END FOR    
    }
    // APPEND card to shelf (div)
    return shelf.appendChild(book);
}    


*/