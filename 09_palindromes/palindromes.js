const palindromes = function (word) {
    const string = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    return string.split("").reverse().join("") === string;
};
// Do not edit below this line
module.exports = palindromes;
