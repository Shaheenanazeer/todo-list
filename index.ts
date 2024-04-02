#! /usr/bin/env node
import inquirer from "inquirer"
import chalk  from "chalk";

let todos = [];
let condition = true

while(condition)
{

let addTask = await inquirer.prompt (
    [
    {
        name:"task",
        type:"input",
        message: chalk.blue ("Enter your next task ?")
        
    }
]
);
todos.push(addTask.task);
console.log(`${addTask.task} Task added in todo-list successfully`);

let addMoreTask = await inquirer.prompt(
    [
        {name: "addmore",
        message: chalk.apply ("Do you want to add more task?"),
        type: "confirm",
        default: "false"

        }
    ]
);

condition = addMoreTask.addmore
}
  

  
console.log("your updated todo-list:", todos);




