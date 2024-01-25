/**
 * JavaScript Function to parse Inquirer data
 */

const Square = require('./square');
const Triangle = require('./triangle');
const Circle = require('./circle');

function parseUserInput(data){
    if(data.shape == 'Square'){
        const square = new Square();
        square.innerText = data.logo;
        square.textColor = data.textColor;
        square.color = data.shapeColor;
        const newLogoS = square.render()
        return newLogoS;
    }else if(data.shape == 'Triangle'){
        const triangle = new Triangle();
        triangle.innerText = data.logo;
        triangle.textColor = data.textColor;
        triangle.color = data.shapeColor;
        const newLogoT = triangle.render();
        return newLogoT;
    }else if(data.shape == 'Circle'){
        const circle = new Circle();
        circle.innerText = data.logo;
        circle.textColor = data.textColor;
        circle.color = data.shapeColor;
        const newLogoC = circle.render();
        return newLogoC;
    }
}

module.exports = parseUserInput;