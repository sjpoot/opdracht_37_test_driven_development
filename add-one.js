const addOne = function (numbers) {
    const newNumbers = [];
    numbers.forEach(number => {
        newNumbers.push(number + 1);
    });
    return newNumbers;

}

module.exports = addOne;