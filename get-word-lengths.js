const getWordLengths = function (someWords) {
    wordLengths = [];
    someWords.forEach(word => {
        wordLengths.push(word.length);
    });

    return wordLengths;
};

module.exports = getWordLengths;