/**
 * JavaScript
 * Create a Class that abstracts methods used in creating various .svg shapes
 */

class shapes {
    constructor(height= '200', width= '320', textx = '150', texty = '100', textAnchor = 'middle', dominantBaseline = 'middle', xmlns = "http://www.w3.org/2000/svg"){
        this.height = height;
        this.width = width;
        this.textx = textx;
        this.texty = texty;
        this.textAnchor = textAnchor;
        this.dominantBaseline = dominantBaseline;
        this.xmlns = xmlns;
    }
}

module.exports = shapes;

