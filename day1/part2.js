const array = require('./puzzleInput.js')

let count = 0;
function measureSums () {
    for (let i = 0; i < array.length; i++) {
        let a = Number(array[i]);
        let b = Number(array[i + 1]);
        let c = Number(array[i + 2]);
        let d = Number(array[i + 3]);
    
        let currentValue = a + b + c;
        let nextValue = b + c + d;
    
        if (nextValue > currentValue) {
            count++;
        }
    }
    
    console.log(count);
}

measureSums()