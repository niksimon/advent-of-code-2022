const fs = require('fs');
const data = fs.readFileSync(`./input.txt`, 'utf-8');

let a = data.split("\r\n");
let max = 0;
let current = 0;
for(let i = 0, j = 0; i < a.length; i++) {
    if(a[i] === "") {
        j++;
        max = current > max ? current : max;
        current = 0;
        continue;
    }
    current += +a[i];
}

console.log(max);