document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmission);
  form.addEventListener('submit', handleResettingInput);
  
  const list = document.querySelector('#reading-list');
  list.addEventListener('click', handleClearButton);


});

  const handleFormSubmission = function (event) {
    event.preventDefault();
    console.log(event);

    //access DOM element values
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    
    //access elements and append changing content. 
    const readList = document.querySelector('#reading-list');

    //create DIV parent for new entry
    const entryDiv = document.createElement('div');
    entryDiv.setAttribute('id', 'div-child');
    readList.appendChild(entryDiv);

    // create new child elements for UL and append DOM values
    const listTitle = document.createElement('li');
    listTitle.textContent = title;
    entryDiv.appendChild(listTitle);
    const listAuthor = document.createElement('li');
    listAuthor.textContent = author;
    entryDiv.appendChild(listAuthor);
    const listCategory = document.createElement('li');
    listCategory.textContent = category;
    entryDiv.appendChild(listCategory);

    const clearButton = document.createElement('button');
    clearButton.textContent = 'remove';
    clearButton.setAttribute('id', '#clear-button');
    entryDiv.appendChild(clearButton);


  };

  const handleResettingInput = function () {
    const form = document.querySelector('#new-item-form');
    form.reset();
    
  };

  const handleClearButton = function (){

    const list = document.querySelector('#reading-list #div-child');
    list.textContent = '';
  }
