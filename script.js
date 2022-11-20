let myProjects = [];
let newProject;
class Project {
  constructor(title) {
      this.title = title; 
  }
}
function addProjToMyProjects(title){
  
  newProject = new Project(title);
  myProjects.push(newProject);
  

}

function addProj(){
  const inputTitleOfProj = document.getElementById("titleOfProj").value;
 
  addProjToMyProjects(inputTitleOfProj);
}
//printing the projects to the screen
const contentProj = document.getElementById('contentProj');

 function createElementsForProjPrinting(){
  // delete content of screen so it woun't repeat
  deleteContentofProj()
      function addParagraph(title){
      const titleLabel = document.createElement('p')
      titleLabel.textContent = `${title}`
      contentProj.appendChild(titleLabel);
           }
                               
           for (let i in myProjects){
            let test = myProjects[i]
            addParagraph(myProjects[i].title );
         
          }
         

        
}
let buttonAddProjEvent = document.querySelector('.btnAddProj').addEventListener('click', buttonAddProj);

function buttonAddProj(){
  createElementsForProjPrinting();

}

function deleteContentofProj(){
  // delete all below id='contentProj' when a button add Add Project is clicked
  function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
    
  }
  
  let parentProf = document.getElementById("contentProj");
  empty(parentProf);
 
}

// adding tasks: 
let myTasks = [];
let newTask;
// console.log(newTask);
class Task {
  constructor(title, description, dueDate) {
      this.title = title; 
      this.description = description; 
      this.dueDate = dueDate; 
  }
}
function addTaskToMyTasks(title, description, dueDate){
  
  newTask = new Task(title, description, dueDate);
  myTasks.push(newTask);
  
  // console.log(newTask);
}

function addTask(){
  const inputTitle = document.getElementById("title").value;
  const inputDescription = document.getElementById("description").value;
  const inputDueDate = document.getElementById("dueDate").value;
addTaskToMyTasks(inputTitle, inputDescription, inputDueDate);

}
 //printing the tasks to the screen
 const content = document.getElementById('content');
 function createElementsForTaskPrinting(){
  // delete content of screen so it woun't repeat
   deleteContent()
      function addParagraph(title, description, dueDate){
      const titleLabel = document.createElement('p')
      titleLabel.textContent = `${title}: ${description}, ! ${dueDate}`
      content.appendChild(titleLabel);
           }
                               
           for (let i in myTasks){
            let test = myTasks[i]
            addParagraph(myTasks[i].title, myTasks[i].description,myTasks[i].dueDate );
                    
}
   
        
}
let buttonAddTaskEvent = document.querySelector('.btnAddTask').addEventListener('click', buttonAddTask);
function buttonAddTask(){
  createElementsForTaskPrinting();
}
function deleteContent(){
  // delete all below id='content' when a button add Task clicked
  function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
    
  }
  
  let parent = document.querySelector("#content");
  empty(parent);
 
}
