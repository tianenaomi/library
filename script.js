const   action = document.getElementById('action');
const   addBookBtn = document.getElementById('addForm');
const   addBookDiv = document.getElementById('addBookDiv');
const   closeAddBook = document.getElementById('closeAddBook');
const   form = document.getElementById('addBookForm');
const   formTitle = document.getElementById('title');
const   formAuthor = document.getElementById('author');
const   formPages = document.getElementById('pages');
const   formRadios = document.querySelectorAll('input[type="radio"]');
const   no = document.getElementById('no');
let     removeAuthor = document.getElementById('removeAuthor');
let     removeTitle = document.getElementById('removeTitle');
const   shelf = document.getElementById('shelf');  
const   submitBookBtn = document.getElementById('addBook');
const   yes = document.getElementById('yes');

// NEW variables
let     confirmAction;
let     myLibrary = [];
const   originalData = [
    {   title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 226,
        readStatus: "read",
    },
    {   title: "Bridget Jones's Diary",
        author: "Helen Fielding",
        pages: 320,
        readStatus: "read",
    },
    {   title: "Frankenstein",
        author: "Mary Shelley",
        pages: 352,
        readStatus: "unread",
    },
    {   title: "Dracula",
        author: "Bram Stoker",
        pages: 488,
        readStatus: "unread",
    },
];
let     radio;
let     whichBook;
//  END new variables

// EVENT listeners
addBookBtn.addEventListener('click', () => openNewBookForm());
closeAddBook.addEventListener('click', () => closeAddBookForm());
form.addEventListener('submit', (event) => {
    //SEE BOTTOM OF PAGE
    console.log(event.target);
    event.preventDefault(); 
    addBookToLibrary();
});
no.addEventListener('click', () => performAction('no')); 
yes.addEventListener('click', () => performAction('yes'));
// END event listeners

class Book {
    constructor(title, author, pages, readStatus){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

class Status extends Book {
    toggleStatus(){
        if (this.readStatus === 'read'){
            this.readStatus = 'unread';
        } else if (this.readStatus === 'unread'){
            this.readStatus = 'read';
        }
        return this.readStatus;
    }
}

createBooks(originalData);
displayBooks(myLibrary);
colourStatus(myLibrary);

function addBookToLibrary(){
    findRadioValue();
    let newBook = new Book(formTitle.value, formAuthor.value, formPages.value, radio);
    myLibrary.push(newBook);
    clearShelf();
    displayBooks(myLibrary);
    closeAddBookForm();
}

function checkAction(xbutton, title, author){
    form.classList.remove('open');
    addBookDiv.classList.remove('open');
    xbutton.disabled = true;
    whichBook = +xbutton.value;
    removeTitle.textContent = title.textContent;
    removeAuthor.textContent = author.textContent;
    action.classList.add('open');
}

function clearShelf(){
    while (shelf.firstChild){
        shelf.removeChild(shelf.firstChild);
    }
}

function closeAddBookForm(){
    form.reset();
    form.classList.remove('open');
    addBookDiv.classList.remove('open');
}

function colourStatus(myLibrary){
    let cards = document.querySelectorAll('.card'); 
    for (let i = 0; i < cards.length; i++){
        if (myLibrary[i].readStatus === 'read'){
            cards[i].classList.add('read');
        } else 
            cards[i].classList.remove('read');
    }
}

function createBooks(originalData){
    for (let i = 0; i < originalData.length; i++){
      myLibrary.push(new Status(originalData[i].title, originalData[i].author, originalData[i].pages, originalData[i].readStatus));
    }
    return myLibrary;
}

function displayBooks(myLibrary){ 
    for (let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        let title = document.createElement('p');
        title.textContent = `${myLibrary[i].title}`;
        let author = document.createElement('p');
        author.textContent = `${myLibrary[i].author}`;
        let pages = document.createElement('p');
        pages.textContent = `${myLibrary[i].pages} pages`;
        let readStatus = document.createElement('button');
        readStatus.textContent = `${myLibrary[i].readStatus}`;
        colourStatus(myLibrary);
        readStatus.addEventListener('click', () => {
            myLibrary[i].toggleStatus();
            readStatus.textContent = `${myLibrary[i].readStatus}`
            colourStatus(myLibrary);
        });
        let container = document.createElement('div');
        let xbutton = document.createElement('button');
        xbutton.textContent = 'x';
        xbutton.setAttribute('id', 'button' + i);
        xbutton.value = i;
        xbutton.addEventListener('click', () => checkAction(xbutton, title, author));
        card.classList.add('card');
        card.classList.add(i);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        container.appendChild(readStatus);
        container.appendChild(xbutton);
        card.appendChild(container);
        shelf.appendChild(card);
    } 
}

function findRadioValue(){
    formRadios.forEach(radioButton => {
        if (radioButton.checked == true){
            radio = radioButton.value;
        }
    });
    return radio;
}

function openNewBookForm(){
    let form = document.getElementById('addBookForm');
    form.classList.add('open');
    addBookDiv.classList.add('open');
    action.classList.remove('open');
    whichBook = '';
    removeTitle.textContent = '';
    removeAuthor.textContent = '';
}

function performAction(response){
    action.classList.remove('open');
    removeTitle.textContent = '';
    removeAuthor.textContent = '';
    confirmAction = response;
    removeBookFromLibrary();
}

function removeBookFromLibrary(){
    if (confirmAction === 'yes'){
        myLibrary.splice(whichBook, 1);
        clearShelf();
        displayBooks(myLibrary);
    } else if (confirmAction === 'no'){
        resetCheckAction();
    }
}

function resetCheckAction(){
    removeTitle.textContent = '';
    removeAuthor.textContent = '';
    let xbutton = document.getElementById(`button${whichBook}`);
    xbutton.disabled = false;
    whichBook = '';
}