function randomizer(string) { //Helper function for (randomize) function
    const randomizer = Math.floor(Math.random() * (string.length - 1) + 1);
    const randomizedArray = string[randomizer];
    return randomizedArray;
}
function randomize(string) {
    if (!string) {
        throw new Error('No string specified.');
    }
    switch (typeof string) {
        case 'boolean':
        case 'number':
        case 'undefined':
            throw new Error('Paramater intakes a String.');
            break;
    }
    if (string.length < 2) {
        throw new Error('String must have 1 or more characters.');
    }
    const array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(randomizer(string));
        if (array.length == string.length) {
            var randomizedString = array.join('').toString();
            return randomizedString;
        }
    }
}

function arrayPick(array) {
    if (!array) {
        throw new Error('No array specified.');
    }
    switch (typeof array) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'undefined':
            throw new Error('Paramater intakes an Array.');
            break;
    }
    if (array.length < 2) {
        throw new Error('Array must contain one or more items.');
    }
    const randomizer = Math.floor(Math.random() * (array.length - 1) + 1);
    return array[randomizer];
}
module.exports = {
    randomize: randomize, arrayPick: arrayPick;
};
