/**
 * JavaScript
 * Create a Class that can be used to generate a square .svg
 */

const shapes = require ('./shapes');

class Square extends shapes {
    // privatley scoped variables
    #color;
    #originX;
    #originY;
    #rectWidth;
    #rectHeight;
    #textColor;
    #fontSize;
    #innerText; 
    // constructor for the square specific properties
    constructor(color, originX, originY, rectWidth, rectHeight, textColor, fontSize, innerText){
        // calls parent/super class properties
        super();
        this.#color = color || 'blue';
        this.#originX = originX || '68';
        this.#originY = originY || '15';
        this.#rectWidth = rectWidth || '160';
        this.#rectHeight = rectHeight || '160';
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
    // setter for originX
    set originX(newX){
        this.#originX = newX;
    }
    // getter for originX
    get originX(){
        return this.#originX
    }
    // setter for originY
    set originY(newY){
        this.#originY = newY;
    }
    // getter for originY
    get originY(){
        return this.#originY;
    }
    // setter for rectWidth
    set rectWidth(newWidth){
        this.#rectWidth = newWidth;
    }
    // getter for rectWidth
    get rectWidth(){
        return this.#rectWidth;
    }
    // setter for rectHeight
    set rectHeight(newHeight){
        this.#rectHeight = newHeight;
    }
    // getter for rectHeight
    get rectHeight(){
        return this.#rectHeight;
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
    render() {
        return `<svg xmlns="${this.xmlns}" width="${this.width}" height="${this.height}"><rect x="${this.#originX}" y="${this.originY}" width="${this.rectWidth}" height="${this.rectHeight}" fill="${this.#color}" /><text x="${this.textx}" y="${this.texty}" text-anchor="${this.textAnchor}" dominant-baseline="${this.dominantBaseline}" fill="${this.textColor}" font-size="${this.fontSize}">${this.innerText}</text></svg>`
    }
}

module.exports = Square;
