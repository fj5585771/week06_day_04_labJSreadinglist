document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript loaded');

  const inputForm = document.querySelector('#new-item-form');     // GRABBING WHOLE FORM ITEM
  inputForm.addEventListener('submit', handleFormSubmission);

  const resetForm = document.querySelector('#new-item-form');     // Event listener after saving entry > reset input fields
  resetForm.addEventListener('submit', handleResettingForm);


});

  const handleFormSubmission = function (event) {

    event.preventDefault();
    const resultItems = document.querySelector('#reading-list');  
    // WE SHOULD BE QUERYING/SELECTING THE NEWLY CREATED UL>LI ITEM FOR APPENDING CONTENT 
    const newEntry = document.createElement('li');
    resultItems.appendChild(newEntry);
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    newEntry.textContent = (`Title: ${title} Author: ${author} Category: ${category}`);
};

  const handleResettingForm = function () {
    const resetForm = document.querySelector('#new-item-form');  
    resetForm.reset();
  }

    // MY FORM IS RESETTING THE ORIGINAL INSERT TO THE NEW FORM INPUT
