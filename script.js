const   action = document.getElementById('action');
const   addBook = document.getElementById('addBook');
const   btnCont = document.getElementById('btnCont');
const   originalData = [
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
let     confirmAction;
const   message = document.createElement('p');
const   msgCont = document.getElementById('msgCont');
const   no = document.createElement('button');
const   shelf = document.getElementById('shelf');
let     whichBook;
const   yes = document.createElement('button');

no.textContent = 'no';
no.addEventListener('click', () => performAction('no'));
message.textContent = 'Remove this book from the library?';
yes.textContent = 'yes';
yes.addEventListener('click', () => performAction('yes'));

let myLibrary = originalData;
displayBooks(myLibrary);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    //CALL constructor
    //  
}

function displayBooks(myLibrary){
    for (let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        let title = document.createElement('p');
        title.textContent = `${myLibrary[i].Title}`;
        let author = document.createElement('p');
        author.textContent = `by ${myLibrary[i].Author}`;
        let pages = document.createElement('p');
        pages.textContent = `${myLibrary[i].Pages} pages`;
        let read = document.createElement('p');
        read.textContent = `${myLibrary[i].Read}`;
        let container = document.createElement('div');
        let button = document.createElement('button');
        button.textContent = 'x';
        button.classList.add(i);
        button.value = i;
        button.addEventListener('click', () => checkAction(button));
        card.classList.add('card');
        card.classList.add(i);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        container.appendChild(button);
        card.appendChild(container);
        shelf.appendChild(card);
    } 
}

function checkAction(button){
    whichBook = +button.value;
    action.classList.add('remove');
    msgCont.appendChild(message);
    btnCont.appendChild(yes);
    btnCont.appendChild(no);
}

function performAction(response){
    action.classList.remove('remove');
    message.remove();
    yes.remove();
    no.remove();
    confirmAction = response;
    removeBookFromLibrary(confirmAction, whichBook);
}

function removeBookFromLibrary(confirmAction, whichBook){
    if (confirmAction === 'yes'){
        myLibrary.splice(whichBook, 1);
        clearShelf();
        displayBooks(myLibrary);
    }
}

function clearShelf(){
    while (shelf.firstChild){
        shelf.removeChild(shelf.firstChild);
    }
}


/*
===================================== TO SOLVE
1. Remove book logic
2. Add book logic
3. Read / unread logic
4. 
*/

/* ===================================== TESTING CENTRE */
// OPTION 1 - remove from array copy and rerun display function
// OPTION 2 - remove dom elements that display the book
// OPTION 3 - identify 'removed' book and rerun display books   and skip iteration with 'removed' status

