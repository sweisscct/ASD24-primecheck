// function isPrime(num) {
//     return false;
// }

function isPrime(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        return false; // Not a valid integer number
    }

    if (n <= 1) return false; // 0, 1, and negatives are not prime
    if (n <= 3) return true;  // 2 and 3 are prime
    if (n % 2 === 0 || n % 3 === 0) return false; // Eliminate multiples of 2 and 3

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}


module.exports = isPrime;