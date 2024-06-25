const string1 = "malayalam";
const string2 = "racecar";
const string3 = "new";

// Clean and check palindrome
const CheckPalindrome = (str) => {
    const cleanStr = str.toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
};

// Checking if strings are palindromes
console.log(string1 + " is palindrome:", CheckPalindrome(string1)); // Output: true
console.log(string2 + " is palindrome:", CheckPalindrome(string2)); // Output: true
console.log(string3 + " is palindrome:", CheckPalindrome(string3)); // Output: false
