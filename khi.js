#! usr/bin/env node
import inquirer from "inquirer";
console.log(`welcome to a rock , paper , scissor `);
let choices = await inquirer.prompt([{
        type: "list",
        name: "choices1",
        massege: "player 1: choose rock , paper , scissor",
        choices: ["rock", "paper", "scissor"],
    },
    {
        type: "list",
        name: "choices2",
        massege: "player 2: choose rock , paper , scissor",
        choices: ["rock", "paper", "scissor"],
    },
]);
console.log(`user one picked ${choices.choices1}`);
console.log(`user two picked ${choices.choices2}`);
let hello = function (choices1, choices2) {
    if (choices1 === "rock") {
        if (choices2 === "scissor") {
            console.log("rock wins");
        }
        else if (choices2 === "rock") {
            console.log("its a tie");
        }
        else if (choices2 === "paper") {
            console.log("paper wins");
        }
    }
    else if (choices1 === "paper") {
        if (choices2 === "rock") {
            console.log("paper wins");
        }
        else if (choices2 === "paper") {
            console.log("its a tie");
        }
        else if (choices2 === "scissor") {
            console.log("scissor win");
        }
    }
    else if (choices1 === "scissor") {
        if (choices2 === "rock") {
            console.log("rock wins");
        }
        else if (choices2 === "paper") {
            console.log("scissor win");
        }
        else if (choices2 === "scissor") {
            console.log("its a tie");
        }
    }
};
hello(choices.choices1, choices.choices2);
