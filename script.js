const   action = document.getElementById('action');
const   addBook = document.getElementById('addBook').addEventListener('click', () => addBookToLibrary());
const   addBookForm = document.getElementById('addForm').addEventListener('click', () => form.classList.add('open'));
const   btnCont = document.getElementById('btnCont');
let     confirmAction;
const   form = document.getElementById('addBookForm');
const   formTitle = document.getElementById('title');
const   formAuthor = document.getElementById('author');
const   formPages = document.getElementById('pages');
const   formRadios = document.querySelectorAll('input[type="radio"]');
const   message = document.createElement('p');
const   msgCont = document.getElementById('msgCont');
const   no = document.createElement('button');
const   originalData = [
    {   title: "Pride and Prejudice",
        author: "Jane Austen",
        pages: 226,
        read: "read",
    },
    {   title: "Dracula",
        author: "Bram Stoker",
        pages: 488,
        read: "read",
    },
    {   title: "Frankenstein",
        author: "Mary Shelley",
        pages: 352,
        read: "read",
    },
    {   title: "Bridget Jones's Diary",
        author: "Helen Fielding",
        pages: 320,
        read: "read",
    },
];
const   shelf = document.getElementById('shelf');  
let     radio;
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

function findRadioValue(){
    formRadios.forEach(radioButton => {
        if (radioButton.checked == true){
            radio = radioButton.value;
        }
    });
    console.log('radio function completed')
    return radio;
}

function addBookToLibrary(){
    findRadioValue();
    let newBook = new Book(formTitle.value, formAuthor.value, formPages.value, radio);
    console.log(myLibrary);
    myLibrary.push(newBook);
    console.log(myLibrary);
    clearShelf();
    displayBooks(myLibrary);
}

function displayBooks(myLibrary){ 
    for (let i = 0; i < myLibrary.length; i++){
        let card = document.createElement('div');
        let title = document.createElement('p');
        title.textContent = `${myLibrary[i].title}`;
        let author = document.createElement('p');
        author.textContent = `by ${myLibrary[i].author}`;
        let pages = document.createElement('p');
        pages.textContent = `${myLibrary[i].pages} pages`;
        let read = document.createElement('p');
        read.textContent = `${myLibrary[i].read}`;
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
3. Read / unread logic
4. 
*/

/* ===================================== TESTING CENTRE */
