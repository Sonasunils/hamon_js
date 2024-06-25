function fizzbizz(n) {
    let results = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            results.push("FizzBizz");
        } else if (i % 3 === 0) {
            results.push("Fizz");
        } else if (i % 5 === 0) {
            results.push("Bizz");
        } else {
            results.push(i.toString());
        }
    }
    return results;
}


if (i)
{

}
else
{
    
}


// Example usage:
const n = 15; // Replace with any positive integer
const fizzbizzResults = fizzbizz(n);
console.log(fizzbizzResults.join(", ")); // Output as a comma-separated string
