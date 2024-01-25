/**
 * JavaScript
 * Create a Class that can be used to generate a triangle .svg
 */

const shapes = require ('./shapes');

class Triangle extends shapes {
    // privatley scoped variable
    #color; 
    #point1
    #point2
    #point3
    #textColor;
    #fontSize;
    #innerText;
    // constructor for trangle specific properties
    constructor(color, point1, point2, point3, textColor, fontSize, innerText){
        // calls parent/super class properties
        super();
        this.#color = color || 'green';
        this.#point1 = point1 || '60,10';
        this.#point2 = point2 || '290,100';
        this.#point3 = point3 || '60,180';
        this.#textColor = textColor || 'white';
        this.#fontSize = fontSize || '60';
        this.#innerText = innerText || '123';
    }
   
    // setter for color
    set color(newColor){
        this.#color = newColor;
    }
    // getter for color
    get color(){
        return this.#color;
    }
    // setter for point1
    set point1(newPoint1){
        this.#point1 = newPoint1;
    }
    // getter for point1
    get point1(){
        return this.#point1;
    }
    // setter for point2
    set point2(newPoint2){
        this.#point2 = newPoint2;
    }
    // getter for point2
    get point2(){
        return this.#point2;
    }
    // setter for point3
    set point3(newPoint3){
        this.#point3 = newPoint3;
    }
    // getter for point3
    get point3(){
        return this.#point3;
    }
    // getter for text color
    get textColor() { 
        return this.#textColor; 
    }
    // setter for text color
    set textColor(value) { 
        this.#textColor = value; 
    }
    //getter for font size
    get fontSize() { 
        return this.#fontSize; 
    }
    // setter for font size
    set fontSize(value) { 
        this.#fontSize = value; 
    }
    // getter for inner text
    get innerText() { 
        return this.#innerText; 
    }
    // setter for inner text
    set innerText(value) { 
        this.#innerText = value; 
    }
    render(){
        return `<svg xmlns="${this.xmlns}" width="${this.width}" height="${this.height}"><polygon fill="${this.color}" points="${this.point1} ${this.point2} ${this.point3}"  /><text x="${this.textx}" y="${this.texty}" text-anchor="${this.textAnchor}" dominant-baseline="${this.dominantBaseline}" fill="${this.textColor}" font-size="${this.fontSize}">${this.innerText}</text></svg>`
    }
}


module.exports = Triangle;

//height, width, textx, texty, textAnchor, dominantBaseline, xmlns