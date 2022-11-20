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

// adding a new book to collection
// addTaskToMyTasks("supermarket", 'buy xampu','2022-11-11')
// addTaskToMyTasks("supermarket2", 'buy xampu2','2022-11-12')

// adding a new book to collection from inputs
function addTask(){
  const inputTitle = document.getElementById("title").value;
  const inputDescription = document.getElementById("description").value;
  const inputDueDate = document.getElementById("dueDate").value;


 addTaskToMyTasks(inputTitle, inputDescription, inputDueDate);
 //printing the tasks to the console:
// for (let i in myTasks){
//   console.log(myTasks[i]);
  
// }
// console.log(" ")

}

 //printing the tasks to the screen

 const content = document.getElementById('content');

 function createElementsForTaskPrinting(){
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
          console.log(" ")

        
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
  





