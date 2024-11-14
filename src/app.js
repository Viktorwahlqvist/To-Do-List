const inputTask = document.querySelector('#input-task');
const addTask = document.querySelector('#add-task');
const ul = document.querySelector('#ul');

/*add task btn disaled */
addTask.disabled = true;
/*If user type anything add task btn will enable the btn. */
inputTask.addEventListener('input', disableBtn);

/*When the butting is clicked the task gets added to the list. */
addTask.addEventListener('click', addLi);



/* Function to add new task list items (li) with check and delete buttons */
function addLi() {
    const Lista = document.createElement('li');
    const textPara = document.createElement('p');
    textPara.innerText = inputTask.value;
    textPara.classList.add('textPara');
    Lista.appendChild(textPara);

    inputTask.value = "";
    addTask.disabled = true;


     /* Create a check button to mark the task as complete */
    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('checkBtn');
    Lista.appendChild(checkBtn);

    /* Create a delete button to remove the task */
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('deleteBtn');
    Lista.appendChild(deleteBtn);

    /*Append the new list item (li) to the unordered list (ul) */
    ul.appendChild(Lista);

    /*Add event listener to the check button for marking tasks as complete */
    checkBtn.addEventListener('click', checkedBtn);

    function checkedBtn (){

        if (textPara.classList.contains('checkpara')){
            textPara.classList.remove('checkpara');
        } else {
            textPara.classList.add('checkpara')
        }
    }
    /*Add event listener to the delete button to remove the task */
    deleteBtn.addEventListener('click', deletedBtn);

    function deletedBtn (e) {

        const liElement = e.target.closest('li');
        liElement.remove();
    
    }
    
}



/*Function to check if the input field is not empty before enabling the add button */
function disableBtn() {
    if (inputTask.value.trim() !== ""){
        
        addTask.disabled = false;
    
    
    } else {
        addTask.disabled = true;
    }

}