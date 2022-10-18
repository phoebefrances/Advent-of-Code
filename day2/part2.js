const input = require('./input.js')

let horizontal = 0; 
let aim = 0; 
let depth = 0;

function calculatePosition () {

    for(let {command, unit} of input){
        if (command === 'up') {
            aim -= unit; 
        }
        else if (command === 'down'){
            aim += unit; 
        }
        else if (command === 'forward'){
            horizontal += unit;
            depth += aim * unit;
        }
    }
}

calculatePosition(input)
console.log(depth * horizontal)