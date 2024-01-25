/**
 * JavaScript
 * Using inquirer create a command line app to create an .svg logo of various shapes
 */
const filePath = './examples/logo.svg';
const parseUserInput = require('./lib/parseInput')
const data = require('./lib/inquirerQuestions')
const inquirer = require('inquirer');
const fs = require('fs-extra');
const insertSvg = require('./lib/appendSVG')




async function init (data) {
    // handling errors
    try{
        const answers = await inquirer.prompt(data)
        const logo = parseUserInput(answers)
        fs.appendFile(filePath, logo + '\n', error =>{
            // handling errors
            if(error){
                console.log("Error:", error)
                return;
            }console.log(`Logo successfully written to ${filePath}.`)
        }) 
    }
    catch(error){
        console.log("Error", error)
        return
    }
    finally{
        insertSvg()
    }
}

init(data)


