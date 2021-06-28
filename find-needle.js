const findNeedle = function (words, input) {
    // Schrijf hier de functie...
    const isWord = (element) => element === input;
    return words.findIndex(isWord);
};

module.exports = findNeedle;