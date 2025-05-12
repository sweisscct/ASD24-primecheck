// Jest -> JavaScript test

const isPrime = require("./primeCheck");

describe("isPrime()", () => {
    test("should return false for numbers less than 2", () => {
        expect(isPrime(1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(-1)).toBe(false);
        expect(isPrime(-11)).toBe(false);
    });

    test("should return true for known prime numbers", () => {
        // boundaries
        // representative sample
        // edge cases
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(97)).toBe(true);
        expect(isPrime(9999999967)).toBe(true);
        expect(isPrime(7919)).toBe(true);
    });

    test("should be false for non-integer or invalid input types", () => {
        expect(isPrime(null)).toBe(false);
        expect(isPrime(undefined)).toBe(false);
        expect(isPrime(NaN)).toBe(false);
        expect(isPrime('5')).toBe(false);
        expect(isPrime([])).toBe(false);
        expect(isPrime({})).toBe(false);
        expect(isPrime(5.5)).toBe(false);
    })
})

