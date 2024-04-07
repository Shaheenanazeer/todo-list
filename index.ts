#! /usr/bin/env node
import inquirer from "inquirer"
import chalk  from "chalk";

let TodoList: string [] = [];
let conditions = true

// while(condition)



let  main = async () => {
    while(conditions){
       let option = await inquirer.prompt([
           {
               name: "choice",
               type: "list",
               message: "Select an option you want to do:",
               choices: ["Add Task", "Delete task", "Update task", "View Todo-List", "Exit"],
        
           }
       ]);
       if(option.choice === "Add Task"){
           await addTask()
       }
       else if(option.choice === "Delete task"){
           await deleteTask()
       }
       
       else if(option.choice === "Update task"){
        await UpdateTask()

       }
       else if(option.choice === "View Todo-List"){
           await viewTask()
       } 
       else if(option.choice === "Exit"){
           conditions = false;
       }

   }
}
 
//   FUNCTION TO ADD  NEW TASK TO THE LIST
let  addTask = async () => {
    let newTask = await inquirer.prompt([
       {
           name: "task",
           type: "input",
           message: "Enter your new task :"
       }
    ]);
    TodoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
    
}
//  FUNCION TO VIEW ALL TODO-LIST TASKS

let viewTask = () => {
   console.log("\n your Todo-List: \n");
   TodoList.forEach((task, index) => {
       console.log(`${index + 1}: ${task}`)
       
   })

}

// FUNCTION TO DELETE TASK FROM THE LIST

let deleteTask = async () => {
   await viewTask()
   let taskIndex =  await inquirer.prompt([
       {
           name: "Index",
           type: "number",
           message: "Enter the 'index no' of the task you want to delete:",
       }
       
   ]);
   let deleteTask =TodoList.splice(taskIndex.index - 1 , 1);
   console.log(`\n ${deleteTask} this task has been deleted succcessfully from your Todo-List`);
   

}
// function to Update a task
let UpdateTask = async () => {
    await viewTask()
    let Update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task you  want to update :"

        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    TodoList[Update_task_index.index - 1] =Update_task_index.new_task
    console.log(`\n Task at index no.${Update_task_index.index - 1} updated successfully[for updated list check option "view Todo-List"]`);
    
}

main();




