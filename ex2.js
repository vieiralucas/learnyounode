var sum = 0,
    argv = process.argv;

argv.shift();
argv.shift();

argv.forEach(function(arg) {
    sum += parseInt(arg);
});

console.log(sum);