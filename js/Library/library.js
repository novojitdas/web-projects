const button = document.querySelector('#button');
const myLibrary = [];
const tableHead = ["BOOK","AUTHOR","PAGES"];

button.addEventListener('click', (event) => {
      event.preventDefault();
      // selecting element
      const bookInput = document.querySelector('#book');
      const authorInput = document.querySelector('#author');
      const pagesInput = document.querySelector('#page');
      // storing current values into variable
      const bookValue = bookInput.value;
      const authorValue = authorInput.value;
      const pagesValue = pagesInput.value;

      // creating a new object
      const newBook = {
            title: bookValue,
            author: authorValue,
            pages: pagesValue,
      };

      myLibrary.push(newBook);

      bookInput.value = '';
      authorInput.value = '';
      pagesInput.value = '';

      showBookList();
      console.log("clicked");
});

// For Starting View
const table = document.querySelector('#table');
table.innerHTML = '';

const tr = document.createElement('tr');

tableHead.forEach( head =>{
      const th = document.createElement('th');
      th.textContent = head;
      tr.appendChild(th);
});
// appending th row into the table 
table.appendChild(tr); 
// For Starting View


function showBookList() {
      const table = document.querySelector('#table');
      table.innerHTML = '';
      
      const tr = document.createElement('tr');
      
      tableHead.forEach( head =>{
            const th = document.createElement('th');
            th.textContent = head;
            tr.appendChild(th);
      });
      // appending th row into the table 
      table.appendChild(tr);

      myLibrary.forEach( book =>{
            const trBook = document.createElement('tr');
            
            const tdTitle = document.createElement('td');
            tdTitle.textContent = book.title;
            trBook.appendChild(tdTitle);

            const tdAuthor = document.createElement('td');
            tdAuthor.textContent = book.author;
            trBook.appendChild(tdAuthor);

            const tdPages = document.createElement('td');
            tdPages.textContent = book.pages;
            trBook.appendChild(tdPages);

            table.appendChild(trBook);
      });
}