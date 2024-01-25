/**
 * JavaScript
 * Using JSDOM & fs-extra append the .svg logo of various shapes to an HTML file
 */

/*
JSDOM is a class (constructor function) within the jsdom library. 
So, when you use this line of code, 
you're essentially creating a local variable named JSDOM that points to jsdom.JSDOM. 
This is done so that we don't have to write jsdom.JSDOM each time 
you want to use the JSDOM class.
*/

const fs = require('fs-extra');
const jsdom = require('jsdom');
const { JSDOM } = jsdom; 
const htmlPath = './examples/testSVG.HTML';
const filePath = './examples/logo.svg';

async function insertSvg() {
    try{
        // Load the HTML file
        const html = await fs.readFile(htmlPath, 'utf-8');
        // Load the SVG file
        const svg = await fs.readFile(filePath, 'utf-8');
        // Parse the HTML file with jsdom
        const dom = new JSDOM(html);
        // define the document so you can use it like when running in the browser
        const document = dom.window.document;
        // Find the div where the SVG should be inserted
        const div = document.getElementById("svgs");
        // clean out the innerHTML before writing to i
        div.innerHTML = ""
    // Note: because we are using node.js we dont need to include a script tag on the HTML doc being written to we need to use JSDOM to alter the HTML file
        // Append the SVG content
        div.innerHTML += svg;
        // Write the updated HTML back to the file
        await fs.writeFile(htmlPath, dom.serialize());
        // dom.serialize() method in JSDOM converts the current DOM (Document Object Model) back into an HTML string.
    }
    catch(error){
        console.log('Error Writing to HTML: ', error)
    }
}

module.exports = insertSvg;