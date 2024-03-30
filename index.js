#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 5 + 1);
let answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "Number",
        message: "Please Guess any number between (1-6): "
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations!!!! You Guess Right Number");
}
else {
    console.log("You Guess Wrong Number");
}
