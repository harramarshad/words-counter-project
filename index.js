//impoting inquirer and chalk packages.
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourfull wlcome message
console.log(chalk.bold.cyanBright("\n  \t\tword counter project"));
console.log("=".repeat(60));
// Prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
//Triming the sentence  and splitting it into words in "spaces"
let words = answer.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count : ${words.length} `));
console.log("=".repeat(60));
