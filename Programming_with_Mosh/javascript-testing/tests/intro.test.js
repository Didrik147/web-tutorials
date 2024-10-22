import { describe, test, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

// Made from the following tutorial:
// https://www.youtube.com/watch?v=zuKbR4Q428o

// Test suite
describe('max', () => {
    it('should return the first argument if it is greater', () => {
        /* // Arrange
        const a = 2;
        const b = 1;

        // Act
        const result = max(a, b);

        // Assert
        expect(result).toBe(2) */
        expect(max(2,1)).toBe(2);
    })

    it('should return the second argument if it is greater', () => {
        expect(max(1,2)).toBe(2);
    })
    
    it('should return the first argument if arguments are equal', () => {
        expect(max(1,1)).toBe(1);
    })
})

// Code First
describe('fizzBuzz', () => {
    it('should return "Fizz" if it is divisible by 3 but not 5', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    })
    
    it('should return "Buzz" if it is divisible by 5 but not 3', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    })

    it('should return "FizzBuzz" if it is divisible by 3 and 5', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })

    it('should return argument as a string if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(2)).toBe('2')
    })
})

// TDD (Test-Driven Development)
describe('calculateAverage', () => {
    it('should return NaN if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    })
    
    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1);
    })

    it('should calculate the average of an array with a two elements', () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    })

    it('should calculate the average of an array with a three elements', () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    })
})

describe('factorial', () => {
    it('should return 1 if given 0', () => {
        expect(factorial(0)).toBe(1);
    })

    it('should return 1 if given 1', () => {
        expect(factorial(1)).toBe(1);
    })

    it('should return 2 if given 2', () => {
        expect(factorial(2)).toBe(2);
    })

    it('should return 6 if given 3', () => {
        expect(factorial(3)).toBe(6);
    })

    it('should return 24 if given 4', () => {
        expect(factorial(4)).toBe(24);
    })

    it('should return undefined if given a negative number', () => {
        expect(factorial(-1)).toBeUndefined;
    })
})