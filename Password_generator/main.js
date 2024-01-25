let lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let spChars = ["@","%","+","/","\\","!","'","#","$","^","?",";",",","(",")","{","}","[","]","~","-","_",".","="];
let nums = ['0','1','2','3','4','5','6','7','8','9'];
let tempPass = [];
let finalPass=[]
let firstPass;
let secondPass = [];
let number = false;
let special = false;
let upperCase = false;
let input;
let conf1;

// Selector element function
const $ = selector => document.querySelector(selector);
//Assignment Code

// Write password to the #password input

document.addEventListener("DOMContentLoaded", function(){
    var generateBtn = document.querySelector("#generate");
    var passwordText = document.querySelector("#password");
    generateBtn.addEventListener('click',
    function promptUser1() {                                                    // prompt the user to get info
      input = prompt('Please select a password length: between 8-128 char.');
     
      if (isNaN(input) || input < 8 || input > 128) {
        conf1 = confirm("Please enter a valid number (8-128chars) or cancel to exit");
            if (conf1) {
            promptUser1();
            } else {
                alert("This session is over, refresh to start over");
            }
        } else{
        promptUser2(); 
        }
    })
    function promptUser2() {
      number = confirm('Do you want to include numbers? :Cancel for no');
      special = confirm('Do you want to include special characters? :Cancel for no');
      upperCase = confirm('Do you want to include capital letters? :Cancel for no');
      
      if (!number && !special && !upperCase) {
        let conf2 = confirm('You should select at least 1 type, cancel to exit');
        if (conf2) {
          promptUser2();
        } else {
          alert("This session is over, refresh to start over");
        }
      } else{ 
        putInHat(number, special, upperCase);
        }
    }
    function putInHat(number,special,upperCase){
        if (number && !special && !upperCase){                                            // includes only number *
            console.log('number only');
            for (let i = 1; i <= Math.ceil(input/2); i++){ 
                tempPass.unshift(lowerChars[Math.floor(Math.random()*lowerChars.length)]);
                
                tempPass.unshift(nums[Math.floor(Math.random()*nums.length)]);
            }
            Shuffle(tempPass); 
        } 
        else if(number && special && !upperCase){               // includes number and special (not upperCase)*
            console.log('number & special');
            for (let i = 1; i<= Math.ceil(input/3); i++){
                tempPass.unshift(lowerChars[Math.floor(Math.random()*lowerChars.length)]);
                
                tempPass.unshift(nums[Math.floor(Math.random()*nums.length)]);
                
                tempPass.unshift(spChars[Math.floor(Math.random()*spChars.length)]);
            }
            Shuffle(tempPass);
        }
        else if(number && special && upperCase){                // includes all *
            console.log('all');
            for (let i = 1; i<= Math.ceil(input/4); i++){
                tempPass.unshift(lowerChars[Math.floor(Math.random()*lowerChars.length)]);
                
                tempPass.unshift(nums[Math.floor(Math.random()*nums.length)]);
               
                tempPass.unshift(spChars[Math.floor(Math.random()*spChars.length)]);
                
                tempPass.unshift(upperChars[Math.floor(Math.random()*upperChars.length)]);
            }
            Shuffle(tempPass)
        }
        else if(!number && special && upperCase){           // includes special and upperCase (not number)*
            console.log('UpperCase & Special');
            for (let i = 1; i<= Math.ceil(input/3); i++){
                tempPass.unshift(lowerChars[Math.floor(Math.random()*lowerChars.length)]);
                
                tempPass.unshift(upperChars[Math.floor(Math.random()*upperChars.length)]);
                
                tempPass.unshift(spChars[Math.floor(Math.random()*spChars.length)]);
            }
            Shuffle(tempPass)
        }
        else if(!number && !special && upperCase){          // includes only upperCase*
            console.log('UpperCase');
            for (let i = 1; i<= Math.ceil(input/2); i++){
                tempPass.unshift(lowerChars[Math.floor(Math.random()*lowerChars.length)]);
                
                tempPass.unshift(upperChars[Math.floor(Math.random()*upperChars.length)]);
            }
            Shuffle(tempPass)
        }
        else if(!number && special && !upperCase){          // includes only Special*
            console.log('Special');
            for (let i = 1; i<= Math.ceil(input/2); i++){
                tempPass.unshift(lowerChars[Math.floor(Math.random()*lowerChars.length)]);
                
                tempPass.unshift(spChars[Math.floor(Math.random()*spChars.length)]);
            }console.log('tempPass= ' + tempPass)
            Shuffle(tempPass);
        }
    }
    
    function Shuffle(array){
        firstPass = [];
        for (let i = array.length; i > 0 ; i--){
          let j = Math.floor(Math.random()*(i));
          firstPass.unshift(array[j]);  // brute force
    
          array.splice(j, 1); 
        }console.log('first pass= ' + firstPass);
        ShuffleAndTrim(firstPass);
    }
    
    function ShuffleAndTrim(array){               // shuffle again and trim to length
        
        for (let i = array.length; i > 0 ; i--){
          let j = Math.floor(Math.random()*(i));
          secondPass.unshift(array[j]);   // brute force
          array.splice(j, 1); 
        }
        if (secondPass.length > input){
            for(let k = 0; k <= input-1; k++){
                finalPass.unshift(secondPass[k]);
            }
        }else{
                finalPass = secondPass;
                
            }passwordText.value=finalPass.join('')

      console.log('second pass= ' + secondPass + 'length of ' + secondPass.length )
      console.log('this is finalPass= ' + finalPass + 'length of ' + finalPass.length )
    }
})













