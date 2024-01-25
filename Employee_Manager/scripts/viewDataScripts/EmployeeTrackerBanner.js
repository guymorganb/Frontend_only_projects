/**
 * 
 * Generates a Banner in the console 
 * 
 */
const figlet = require('figlet')

const generateBanner = async () =>{
    return new Promise((resolve, reject) =>{
    figlet.text(`Emplyee`,{
        font: 'Standard',
        horizontalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
    }, (err, employeeText) => {
        if (err) {
            console.error({ message: 'Error writing content', error: err });
            reject(err);
        } else {
            figlet.text('Tracker', {
            font: 'Standard',
            horizontalLayout: 'default',
            width: 80,
            whitespaceBreak: true,
            }, (err, trackerText) => {
            if (err) {
                console.error({ message: 'Error writing content', error: err });
                reject(err);
            } else {
                resolve(`${employeeText}\n${trackerText}`);
            }
            });
        }
        });
    });
};

const printBanner = async () =>{
    const bannerText = await generateBanner();
    const lines = '-'.repeat(47);
    //const emptyLine = '|'.padEnd(60, ' ');
    const verticalLine = '|'.padStart(1) + ' '.repeat(45) + '|';
    const boxText = `${lines}\n${verticalLine}\n${bannerText
      .split('\n')
      .map(line => `| ${line}${' '.repeat(43 - line.length)} |`)
      .join('\n')}\n${verticalLine}\n${lines}`;
  
    console.log(boxText);
}

module.exports = printBanner;