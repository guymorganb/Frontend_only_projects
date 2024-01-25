/**
 * JavaScript
 * Create tests for shapes classes using jest
 */

// Jest is a dependency and is acessible without importing

const Circle = require('./circle');

const Square = require('./square');

const Triangle = require('./triangle');

// jest testing
describe('Circle class', () =>{
    test('Should create new instance of Circle, and also set fill color to blue, and text color to black', ()=>{
        const circle = new Circle();
        circle.color = 'blue';
        circle.textColor = 'black'
        expect(circle).toBeInstanceOf(Circle);
        expect(circle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><circle fill="blue" cx="150" cy="100" r="100"/><text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="black" font-size="60">123</text></svg>')
    })
});

describe('Square class', () =>{
    test('Should create new instance of Square, and also set fill color to green, and text color to blue', () =>{
        const square = new Square();
        square.color = 'green';
        square.textColor = 'blue';
        expect(square).toBeInstanceOf(Square);
        expect(square.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect x="68" y="15" width="160" height="160" fill="green" /><text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="blue" font-size="60">123</text></svg>');
    })
});

describe('Triangle class', ()=>{
    test('Should create new instance of Triangle, and also set fill color to red, and text color to green', ()=>{
        const triangle = new Triangle();
        triangle.color = 'red';
        triangle.textColor = 'green';
        expect(triangle).toBeInstanceOf(Triangle);
        expect(triangle.render()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><polygon fill="red" points="60,10 290,100 60,180"  /><text x="150" y="100" text-anchor="middle" dominant-baseline="middle" fill="green" font-size="60">123</text></svg>')
    })
})
