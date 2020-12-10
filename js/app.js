document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript loaded');

  const inputForm = document.querySelector('#new-item-form');     // GRABBING WHOLE FORM ITEM
  inputForm.addEventListener('submit', handleFormSubmission);

  const resetForm = document.querySelector('#new-item-form');     // Event listener after saving entry > reset input fields
  resetForm.addEventListener('submit', handleResettingForm);

  const insertNewEntry = document.querySelector('#new-item-form');     
  insertNewEntry.addEventListener('submit', handleNewListEntry);

});

  const handleFormSubmission = function (event) {

    event.preventDefault();
    const resultItems = document.querySelector('#reading-list');  
    // WE SHOULD BE QUERYING/SELECTING THE NEWLY CREATED UL>LI ITEM FOR APPENDING CONTENT 
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    resultItems.textContent = (`Title: ${title} Author: ${author} Category: ${category}`);
};

  const handleResettingForm = function () {
    const resetForm = document.querySelector('#new-item-form');  
    resetForm.reset();
  }

  const handleNewListEntry = function (event) {
    const newEntry = document.createElement('li');
    const newContent = document.createTextNode (`Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`);
    newEntry.appendChild(newContent);
    const newItem = document.querySelector('li');
    document.body.insertBefore(newEntry, newItem);
  };

    // MY FORM IS RESETTING THE ORIGINAL INSERT TO THE NEW FORM INPUT
