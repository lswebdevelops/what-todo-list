

// projects: 
//button event listeners for create new project, add new project to dueDate, close projectPopUp
const addProject = document.querySelector('#addProject');
addProject.addEventListener('click', addProjToProjects);


const newProjBtn = document.querySelector('#newProjBtn');
newProjBtn.addEventListener('click', () => projectPopUp.style.display = 'block');

const projectPopUp = document.getElementById('projectPopUp');
const closeprojectPopUp = document.getElementsByTagName('span')[0];
closeprojectPopUp.addEventListener('click', () => projectPopUpForm.style.display = 'none');




//project Constructor
class Project {
    constructor(title) {
        this.title = projectForm.title.value;
        
    }
}


//creates Project from Project Constructor, adds to myprojects

let myProjects = [];
let newProject;

function addProjToProjects() {
    event.preventDefault();
    projectPopUp.style.display = "none";

    newProject = new Project(title);
    myProjects.push(newProject);
    renderProjects();
    projectForm.reset();
}

//creates a visual Project
function renderProjects() {
    const display = document.getElementById('Projects-container');
    const Projects = document.querySelectorAll('.Project');
    Projects.forEach(Project => display.removeChild(Project));

    for (let i = 0; i < myProjects.length; i++) {
        createProject(myProjects[i]);

        console.log(myProjects[i]);

    }
}

// creates Project DOM elements for rendering

function createProject(item) {
    const myprojects = document.querySelector('#Projects-container');
    const ProjectDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
  


    ProjectDiv.classList.add('Project');
    ProjectDiv.setAttribute('id', myProjects.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    ProjectDiv.appendChild(titleDiv);

    removeBtn.textContent = 'X';
    removeBtn.setAttribute('id', 'removeProjBtn');
    ProjectDiv.appendChild(removeBtn);

    myprojects.appendChild(ProjectDiv);

    removeBtn.addEventListener('click', () => {
        myProjects.splice(myProjects.indexOf(item), 1);
       
        renderProjects();
    });

    
};



// tasks: 
//button event listeners for create new Task, add new Task to dueDate, close taskPopUp
const addTask = document.querySelector('#addTask');
addTask.addEventListener('click', addTaskToProjects);


const newTaskBtn = document.querySelector('#newTaskBtn');
newTaskBtn.addEventListener('click', () => taskPopUpForm.style.display = 'block');

const taskPopUpForm = document.getElementById('taskPopUp');
const closetaskPopUp = document.getElementsByTagName('span')[0];
closetaskPopUp.addEventListener('click', () => taskPopUpForm.style.display = 'none');




//Task Constructor
class Task {
    constructor(title, description, dueDate, done) {
        this.title = taskForm.title.value;
        this.description = taskForm.description.value;
        this.dueDate = taskForm.dueDate.value;
        this.done = taskForm.done.checked;

    }
}


//creates Task from Task Constructor, adds to mytasks

let myTasks = [];
let newTask;

function addTaskToProjects() {
    event.preventDefault();
    taskPopUpForm.style.display = "none";

    newTask = new Task(title, description, dueDate, done);
    myTasks.push(newTask);
    render();
    taskForm.reset();
}

//creates a visual Task
function render() {
    const display = document.getElementById('Tasks-container');
    const Tasks = document.querySelectorAll('.Task');
    Tasks.forEach(Task => display.removeChild(Task));

    for (let i = 0; i < myTasks.length; i++) {
        createTask(myTasks[i]);

        console.log(myTasks[i]);

    }
}

// creates Task DOM elements for rendering

function createTask(item) {
    const mytasks = document.querySelector('#Tasks-container');
    const TaskDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descDiv = document.createElement('div');
    const dueDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const doneBtn = document.createElement('button');


    TaskDiv.classList.add('Task');
    TaskDiv.setAttribute('id', myTasks.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    TaskDiv.appendChild(titleDiv);

    descDiv.textContent = item.description;
    descDiv.classList.add('description');
    TaskDiv.appendChild(descDiv);

    dueDiv.textContent = item.dueDate;
    dueDiv.classList.add('dueDate');
    TaskDiv.appendChild(dueDiv);

    doneBtn.classList.add('doneBtn')
    TaskDiv.appendChild(doneBtn);
    if (item.done === false) {
        doneBtn.textContent = 'Not done';
        doneBtn.style.backgroundColor = 'hsl(0deg 100% 81%)';
    } else {
        doneBtn.textContent = 'done';
        doneBtn.style.backgroundColor = 'hsl(118deg 100% 81%)';
    }


    removeBtn.textContent = 'X';
    removeBtn.setAttribute('id', 'removeBtn');
    TaskDiv.appendChild(removeBtn);

    mytasks.appendChild(TaskDiv);

    removeBtn.addEventListener('click', () => {
        myTasks.splice(myTasks.indexOf(item), 1);
        //  setData()
        render();
    });

    //add toggle ability to each Task 'done' button on click
    doneBtn.addEventListener('click', () => {
        item.done = !item.done;
        //     setData(); 
        render();
    });
};