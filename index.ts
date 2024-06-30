import inquirer from "inquirer"

let {str} = await inquirer.prompt([{ //"   Hello   world  "
    name:"str",
    type:"input",
    message:"Enter paragraph:"
}])


let characcters_without_spaces = str.replace(/\s/g,"")//"helloworld"
console.log("Characters without spaces :",characcters_without_spaces.length)

str = str.replace(/[^\w\s]/g, " "); // Replace punctuation with spaces

let wordsArray = str.split(/\s+/);//['','Hello','','world','']

let words = wordsArray.filter((word:any) => word.length > 0);//['hello','world']

console.log("words count:",words.length);

