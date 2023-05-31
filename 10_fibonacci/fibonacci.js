const fibonacci = function(n) {
    n = +n;
    if (n < 0) return 'OOPS'
    let prev = 1;
    let curr = 0;
    let fib = 0;
    for (let i = 0; i < n; ++i) {
        fib += prev;
        prev = curr;
        curr = fib;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
