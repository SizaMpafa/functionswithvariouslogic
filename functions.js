function multiply(num1, num2, num3) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        throw new Error("All three numbers must be different!");
    }
    return num1 * num2 * num3;
}

const convertToSeconds = function(minutes) {
    return minutes * 60;
};

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

console.log("=== Testing multiply function ===");
console.log(multiply(2, 3, 4)); 
console.log(multiply(1, 5, 7)); 

console.log("\n=== Testing convertToSeconds function ===");
console.log(convertToSeconds(5)); 
console.log(convertToSeconds(2.5)); 

console.log("\n=== Testing fahrenheitToCelsius function ===");
console.log(fahrenheitToCelsius(32)); 
console.log(fahrenheitToCelsius(100));

console.log("\n=== Testing reverseString function ===");
console.log(reverseString("SaSS")); 
console.log(reverseString("Mbwwwwww")); 

console.log("\n=== Testing countVowels function ===");
console.log(countVowels("Uxhonyiwe"));
console.log(countVowels("Umgangatho")); 

console.log("\n=== Testing isPrime function with 4 numbers ===");
console.log(`2 is prime: ${isPrime(2)}`); 
console.log(`4 is prime: ${isPrime(4)}`); 
console.log(`17 is prime: ${isPrime(17)}`); 
console.log(`25 is prime: ${isPrime(25)}`); 