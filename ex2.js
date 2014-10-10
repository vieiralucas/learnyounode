/**
* BABY STEPS
* Exercise 2 of 13
*
* Write a program that accepts one or more numbers as command-line arguments and 
* prints the sum of those numbers to the console (stdout).
*/

var sum = 0,
    argv = process.argv;

argv.shift();
argv.shift();

argv.forEach(function(arg) {
    sum += parseInt(arg);
});

console.log(sum);