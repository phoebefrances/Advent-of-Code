const input = require('./input.js')

let horizontal = 0; 
let depth = 0; 

function calculatePosition () {

    for(let {command, unit} of input){
        if (command === 'up') {
            depth -= unit; 
        }
        else if (command === 'down'){
            depth += unit; 
        }
        else if (command === 'forward'){
            horizontal += unit
        }
    }
}

calculatePosition(input)
console.log(depth * horizontal)