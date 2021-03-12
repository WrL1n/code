/*
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/

// My Solution
const arrayMadness = (a,b) => a.reduce((acc,rec)=>acc+rec**2,0) > b.reduce((acc,rec)=>acc+rec**3,0)

// Another Solution
const sumPwrs = (a, p) => a.reduce( (s, n) => s + n ** p, 0);
const arrayMadness = (a, b) => sumPwrs(a, 2) > sumPwrs(b, 3);
