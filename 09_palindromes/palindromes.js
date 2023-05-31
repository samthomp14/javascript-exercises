function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }

const palindromes = function (str) {
    // if (str.length < 2) {
    //     return true;
    // }
    // const arr = Array.from(str);
    // const lastAlnum = arr.findIndex(char => isAlphanumeric(char));
    // const firstAlnum = arr.findLastIndex(char => isAlphanumeric(char));

    // console.log(lastAlnum, firstAlnum);
    // if ((str[lastAlnum]).toLowerCase() === (str[firstAlnum]).toLowerCase()) {
    //     return palindromes(str.slice(firstAlnum + 1, lastAlnum));
    // } else return false;

    const processed = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

    return (processed) == (processed.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
