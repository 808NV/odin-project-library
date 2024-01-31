const myLibrary = document.querySelector('.my-library');
const name = document.querySelector('#book');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');

const submitBtn = document.querySelector('.submit-Btn');
const deleteBtn = document.querySelector('.delete-btn');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Create a new library element
    const newLibrary = document.createElement('div');
    newLibrary.classList.add('library');
  
    // Populate the new library element with the user input
    newLibrary.innerHTML = 
     `<div class="book">Book: ${name.value}</div>
      <div class="author">By: ${author.value}</div>
      <div class="pages">Page Number: ${pages.value}</div>
      <button class="delete-btn">Delete</button>`
    ;
  
    // Append the new library element to the my-library section
    const myLibrary = document.querySelector('.my-library');
    myLibrary.appendChild(newLibrary);
  
    // Clear the form fields after adding the new library
    name.value = '';
    author.value = '';
    pages.value = '';
});


myLibrary.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});
