//button event listeners for create new task, add new task to page, close popup
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addTaskToTasks);

const newTaskBtn = document.querySelector('#newBtn');
newTaskBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

//Task Constructor
class Task {
    constructor(title, description, dueDate, done) {
        this.title = form.title.value; 
        this.description = form.description.value; 
        this.dueDate = form.dueDate.value; 
        this.done = form.done.checked; 
    }
}

//creates task from Task Constructor, adds to myTasks

let myTasks = [];
let newTask;

function addTaskToTasks(){
    event.preventDefault();
    popUpForm.style.display= "none";

    newTask = new Task(title, description, dueDate, done);
    myTasks.push(newTask);
    render();
    form.reset();
}

//creates a visual task
function render(){
    const display = document.getElementById('Task-container');
    const books = document.querySelectorAll('.task');
    books.forEach(task => display.removeChild(task));

    for (let i=0; i<myTasks.length; i++){
        createBook(myTasks[i]);
    }
}

// creates task DOM elements for rendering

function createBook(item) {
    const tasks = document.querySelector('#Task-container');
    const taskDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const dueDateDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const doneBtn = document.createElement('button');
    
    
    taskDiv.classList.add('task');
    taskDiv.setAttribute('id', myTasks.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    taskDiv.appendChild(titleDiv);

    descriptionDiv.textContent = item.description;
    descriptionDiv.classList.add('description');
    taskDiv.appendChild(descriptionDiv);

    dueDateDiv.textContent = item.dueDate;
    dueDateDiv.classList.add('dueDate');
    taskDiv.appendChild(dueDateDiv);

    doneBtn.classList.add('doneBtn')    
    taskDiv.appendChild(doneBtn);
    if(item.done===false){
        doneBtn.textContent = 'Not done';
        doneBtn.style.backgroundColor = 'hsl(0deg 100% 81%)';
    }else{
        doneBtn.textContent = 'Done';
        doneBtn.style.backgroundColor = 'hsl(118deg 100% 81%)' ;
    }
		

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    taskDiv.appendChild(removeBtn);
    
    tasks.appendChild(taskDiv);

    removeBtn.addEventListener('click', () => {
        myTasks.splice(myTasks.indexOf(item),1);
      //  setData()
        render();
    });

    //add toggle ability to each task 'done' button on click
    doneBtn.addEventListener('click', () => { 
        item.done = !item.done; 
   //     setData(); 
        render();
    }); 
};
