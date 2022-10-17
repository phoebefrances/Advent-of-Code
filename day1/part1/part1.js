const array = require('./puzzleInput.js')

let count = 0; 
function measureIncreases () {
 
    for (let i = 0; i < array.length; i++) {
   
        let currentValue = Number(array[i]);
        let nextValue = Number(array[i + 1]);


        if (nextValue > currentValue) {
            count ++;
        }
    }
    console.log(count);
}

measureIncreases()
