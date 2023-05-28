const sumAll = function(num1, num2) {
    let sum = 0;
    
    if (typeof num1 == "number" && typeof num2 == "number") {
        if (num1 >= 0 && num2 >= 0) {
            if (num2 > num1) {
                for (let i = num1; i <= num2; i++) {
                    sum += i;
                }
            } else {
                for (let i = num2; i <= num1; i++) {
                    sum += i;
                }
            }    
            return sum;        
        }
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
