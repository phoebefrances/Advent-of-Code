const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const array = contents.split(/\r?\n/).map((line) => {
    let [command, unit] = line.split(' ');
    unit = Number(unit);

    return {
        command,
        unit,
    };
});

  console.log(array); 

  return array;
}

let input = syncReadFile('./input.txt');

module.exports = input

