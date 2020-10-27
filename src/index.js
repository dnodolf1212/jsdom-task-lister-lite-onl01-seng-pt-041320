document.addEventListener("DOMContentLoaded", () => {
  // addEventListener() for submit button (submit event on form element)
  // use preventDefault() function for submit event
  // function for adding html text string to TO DOs Box
  // button appended to text string to delete it
  const jobForm = document.querySelector('#create-task-form');
  const jobsList = document.querySelector('#tasks');

  jobForm.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const jobInput = document.querySelector('#new-task-description').value;
    jobsList.innerHTML += `
      <li> ${jobInput} 
        <button data-action="delete"> Dunnit </button>
      </li>`
    
    jobForm.reset()

  })

  jobsList.addEventListener('click', function(e) {
    console.log(e.target)
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove();
    }
    
  })
}) 

//var curSubmit = curForm.querySelector('button[type="submit"]');
//const jobItem = document.createElement('li');
    //jobItem.innerText = jobInput;
    //jobsList.appendChild(jobItem)