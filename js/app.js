document.addEventListener('DOMContentLoaded', () => {

  // GRABBING WHOLE FORM ITEM AND FUNCTION FOR FORM HANDLING PASSED
  const inputForm = document.querySelector('#new-item-form');     
  inputForm.addEventListener('submit', handleFormSubmission);


  // CREATE DELETE BUTTON AFTER ENTRY SUBMISSION
  const clearButton = document.createElement('button'); 
  clearButton.textContent = ('❌');
  clearButton.addEventListener('click', handleClearButton);

  // APPEND NEW BUTTON TO FORM ELEMENT
  inputForm.appendChild(clearButton);

  // const changedForm = document.querySelector("#new-item-form");
  // changedForm.appendChild(clearButton);

  const resetForm = document.querySelector('#new-item-form');  
  // Event listener after saving entry > reset input fields > AND add button
  resetForm.addEventListener('submit', handleResettingInput);

});

  const handleFormSubmission = function (event) {

    // PREVENT DEFAULT = stops POST request from happening

    event.preventDefault();
    
    // GRAB UNORDERED LIST

    const resultItems = document.querySelector('#reading-list');  

    // CREATE DIV   

    const divChild = document.createElement('div');

    // GIVE DIV CHILD CLASS NAME

    divChild.classList.add('reading_item');


    // CREATE VARIABLES FOR NEWLY CREATED LI ITEMS, THEN GRAB AND INSERT INPUT VARIABLES INTO LI ELEMENTS

    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    const newTitle = document.createElement('li');
    newTitle.textContent = title;
    const newAuthor = document.createElement('li');
    newAuthor.textContent = author;
    const newCategory = document.createElement('li');
    newCategory.textContent = category;

    // APPEND NEW CHILD DIV('LI') ITEMS TO NEW '#READING_ITEM' PARENT DIV

    divChild.appendChild(newTitle);
    divChild.appendChild(newAuthor);
    divChild.appendChild(newCategory);

    // APPEND DIV TO READING LIST DIV
    
    resultItems.appendChild(divChild);
  };

  const handleResettingInput = function () {
    const resetForm = document.querySelector('#new-item-form');  
    resetForm.reset();

  };

  const handleClearButton = function () {
    const readingList = document.querySelector('#reading-list');
      readingList.innerHTML = '';
      
  };
  
