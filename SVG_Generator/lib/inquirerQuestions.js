/**
 * JavaScript inquirer question object
 */

const questions = [
    {
        type: 'input',
        name: 'logo',
        message: 'What 3 charecters (number or letter) would you like inside your logo?',
        validate: function (text){
            if(text.length !== 3){
                return 'Please enter only 3 charecters.'
            }return true
        },
    },
    {
        type: 'list',
        name: 'textColorType',
        message: 'Please choose a color option for your text.',
        choices: ['Color Name', 'Color Hex Value'],
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Input your text color, please use CSS Standard specific colors only and include the # for Hex Values.',
        when: function(answers) {
            // checks the results from the previous question and returns the result
            return answers.textColorType === 'Color Name' || answers.textColorType === 'Color Hex Value';
        },
            // validates the result of the current input according to what the answer was from the previous question
        validate: function (input, answers){
            // if color name was selected, do this...
            if(answers.textColorType === 'Color Name'){
                input = input.toLowerCase();
                return input.length > 2 || 'Please enter a valid color name';
            // if color hex value was selected do this.....    
            }else if(answers.textColorType === 'Color Hex Value'){
                var pattern =  /^#([0-9A-F]{6})$/i;
                // validate the hex pattern 
                if(!pattern.test(input)){
                    return 'Invalid Hex combination please try again'
                }
                return true;
            }
        },
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like the logo to be?',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'list',
        name: 'shapeColorType',
        message: 'Please Choose color format for your shape.',
        choices: ['Color Name', 'Color Hex Value'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Input your shapes color, please use CSS Standard specific colors only and include the # for Hex Values.',
        when: function(answers){
            // get the answer from the previous question and return the result
            return answers.shapeColorType === 'Color Name' || answers.shapeColorType === 'Color Hex Value';
        },
            // validate the result of the current input, according to what the answer was from the previous question 
        validate: function(input, answers){
            // if color name was selected do this...
            if(answers.shapeColorType === 'Color Name'){
                input = input.toLowerCase();
                return input.length > 2 || 'Please enter a valid color name';
            // if color hex value was selected do this...
            }else if(answers.shapeColorType === 'Color Hex Value'){
                var pattern =  /^#([0-9A-F]{6})$/i;
                // validate hex pattern
                if(!pattern.test(input)){
                    return 'Invalid Hex combination please try again';
                }
                return true;
            }
        },
    },
];

module.exports = questions;