const inputTask = document.querySelector('#input-task');
const addTask = document.querySelector('#add-task');
const ul = document.querySelector('#ul');

/*add task btn disaled */
addTask.disabled = true;
/*If user type anything disabled will be false. */
inputTask.addEventListener('input', disableBtn);

/*user adding a list, with function addLi */
addTask.addEventListener('click', addLi);



/*Function to add elements, buttons to li, and to a ul after */
function addLi() {
    const Lista = document.createElement('li');
    const textPara = document.createElement('p');
    textPara.innerText = inputTask.value;
    textPara.classList.add('textPara');
    Lista.appendChild(textPara);

    inputTask.value = "";
    addTask.disabled = true;
    
    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('checkBtn');
    Lista.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('deleteBtn');
    Lista.appendChild(deleteBtn);

    ul.appendChild(Lista);

    checkBtn.addEventListener('click', checkedBtn);

    function checkedBtn (){

        if (textPara.classList.contains('checkpara')){
            textPara.classList.remove('checkpara');
        } else {
            textPara.classList.add('checkpara')
        }
    }

    deleteBtn.addEventListener('click', deletedBtn);

    function deletedBtn (e) {

        const liElement = e.target.closest('li');
        liElement.remove();
    
    }
    
}



/*Function to check if user have a valid input. */
function disableBtn() {
    if (inputTask.value.trim() !== ""){
        
        addTask.disabled = false;
    
    
    } else {
        addTask.disabled = true;
    }

}