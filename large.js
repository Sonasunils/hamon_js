const numbers = [10, 20, 4, 45, 32, 56, 56, 12];

//Remove duplicates from the array
const uniqueNumbers = [...new Set(numbers)];

//Find the second largest number
let firstMax = -Infinity;
let secondMax = -Infinity;

for (let num of uniqueNumbers) {
    if (num > firstMax) {
        secondMax = firstMax;
        firstMax = num;
    } else if (num > secondMax && num !== firstMax) {
        secondMax = num;
    }
}

console.log("Second largest number:", secondMax);
