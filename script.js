
// adding project 
//button event listeners for create new task, add new task to page, close popup
const addBtnProj = document.querySelector('#addBtnProj');
addBtnProj.addEventListener('click', addProjToProjects);

//Task Constructor
class Project {
    constructor(titleP) {
     
      this.titleP = formProj.titleP.value;          
      }
}

//creates task from Task Constructor, adds to myTasks

let myProjects = [];
let newProject;

function addProjToProjects(){
    event.preventDefault();
    newProject = new Project(titleP);
    // prevent non letter or non numbers 
    str = newProject.titleP;
    function onlyLettersAndNumbers(str) {
      return /^[A-Za-z0-9]*$/.test(str);
    }
    const string = onlyLettersAndNumbers(str)
   if(string === false){
    alert("Please type just letters and numbers")
      
   }else{
    
        //prevent users from creating an empty task:
        if(newProject.titleP ==='' ||newProject.titleP ===' ' ){
          alert("Please type a valid project title")
        }
        else{
          myProjects.push(newProject);
          renderProj();
        }
   }

  
   
}


function renderProj(){
    const display = document.getElementById('Proj-container');
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => display.removeChild(project));

    for (let i=0; i<myProjects.length; i++){
      createProject(myProjects[i]);
    }
}

// creates project DOM elements for rendering

function createProject(item) {
    const projects = document.querySelector('#Proj-container');
    const projectDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
     
    projectDiv.classList.add('project');
    projectDiv.setAttribute('id', myProjects.indexOf(item));

    titleDiv.textContent = item.titleP;
    titleDiv.classList.add('titleProject');
    projectDiv.appendChild(titleDiv);	

    removeBtn.textContent = 'X'; 
    removeBtn.setAttribute('id', 'removeBtn');
    projectDiv.appendChild(removeBtn);
    
    projects.appendChild(projectDiv);

    removeBtn.addEventListener('click', () => {
        myProjects.splice(myProjects.indexOf(item),1);
      
        renderProj();
        formProj.reset();
    });

   
};



// adding a task: 

function addingTaskIntoProject(){
//button event listeners for create new task, add new task to page, close popup
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addTaskToTasks);

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
    newTask = new Task(title, description, dueDate, done);
    //prevent users from creating an empty task:
  if(newTask.title ==='' ||newTask.title ===' ' ){
    alert("Please type a valid title")
  }else if( newTask.description === '' ||newTask.description === ' ' ){
    alert("Please type a valid description" );
  }else if(newTask.dueDate === '' || newTask.dueDate === ' '){
    alert("Please give a date");
  }
  else{
    myTasks.push(newTask);
    render();
    form.reset();
  }
   
}

//creates a visual task
function render(){
    const display = document.getElementById('Task-container');
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => display.removeChild(task));

    for (let i=0; i<myTasks.length; i++){
      createTask(myTasks[i]);
    }
}

// creates task DOM elements for rendering

function createTask(item) {
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
		

    removeBtn.textContent = 'X'; 
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
}

// **********************************************************************













