"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [1, 2, 3, 4, 5, 6, 7, "8", 9, 10];
let num = [];
let num2 = [];
num[0] = 1;
num[1] = 2;
num2[0] = 1;
num2[1] = "2";
num2[2] = 3;
num2[3] = 4;
num[2] = 3;
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(numbers2); // [ 1, 2, 3, 4, 5, 6, 7, '8', 9, 10 ]
console.log(num); // [ 1, 2, 3 ]
console.log(num2); // [ 1, '2', 3, 4 ]
