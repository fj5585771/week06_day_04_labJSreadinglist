document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript loaded');

  const inputForm = document.querySelector('#new-item-form');     // GRABBING WHOLE FORM ITEM
  inputForm.addEventListener('submit', handleFormSubmission);

});


  const handleFormSubmission = function (event) {

    event.preventDefault();
    console.log(event.target.title.value);

    const resultItems = document.querySelector('#reading-list');  
    // WE SHOULD BE QUERYING/SELECTING THE NEWLY CREATED UL>LI ITEM FOR APPENDING CONTENT 
    resultItems.textContent = (`Title: ${event.target.title.value} Author: ${event.target.author.value} Category: ${event.target.category.value}`);
};

    // I NEED TO FIND A WAY TO ATTACH ID FOR BUTTON ELEMENT TO BE REFERRED TO IN FORM SUBMISSION FUNCTION 


  // when button clicked, create new event listener for submission form and also element for holding info in list item