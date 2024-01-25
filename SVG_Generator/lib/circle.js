/**
 * JavaScript
 * Create a Class that can be used to generate a circle .svg
 */
const shapes = require ('./shapes');


// circle class is derived from shapes class
class Circle extends shapes {
    // privatley scoped variable
    #color; 
    #cx;
    #cy;
    #r;
    #textColor;
    #fontSize;
    #innerText;
    // constructor for the circle specific properties
    constructor(color, cx, cy, r, textColor, fontSize, innerText){
        // calls super class so values can be user in render function
        super();
        // set default values
        this.#color = color || 'green';
        this.#cx = cx || '150';
        this.#cy = cy || '100';
        this.#r = r || '100';
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
    // getter for center x value
    get cx() { 
        return this.#cx; 
    }
    // setter for center x value
    set cx(value) {
        this.#cx = value; 
    }
    // getter for center y value
    get cy() { 
        return this.#cy; 
    }
    // setter for center y value
    set cy(value) { 
        this.#cy = value; 
    }
    // getter for radius
    get r() { 
        return this.#r; 
    }
    // setter for radius
    set r(value) { 
        this.#r = value; 
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
    // renders the circle
    render() {
        return `<svg xmlns="${this.xmlns}" width="${this.width}" height="${this.height}"><circle fill="${this.#color}" cx="${this.cx}" cy="${this.cy}" r="${this.r}"/><text x="${this.textx}" y="${this.texty}" text-anchor="${this.textAnchor}" dominant-baseline="${this.dominantBaseline}" fill="${this.textColor}" font-size="${this.fontSize}">${this.innerText}</text></svg>`;
    }
}


module.exports = Circle;