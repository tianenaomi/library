const addBtn = document.getElementById('addBtn');
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
    
}

function displayBooks(myLibrary){
    // FOR each book in myLibrary
        // CREATE card (div)
        // ADD book details to card
        // ADD button to card
        // ADD class to div
        // APPEND card to shelf (div)
}