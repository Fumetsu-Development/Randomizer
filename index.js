function randomizer(string) { //Helper function for (randomize) function
    const randomizer = Math.floor(Math.random() * (string.length - 1) + 1);
    const randomizedArray = string[randomizer];
    return randomizedArray;
}
/**
 * @param {String} string
 * @param {Number} max
 * @returns String
 */
function randomize(string, max) {
    if (!string) {
        throw new Error('No string specified.');
    }
    switch (typeof string) {
        case 'boolean':
        case 'number':
        case 'undefined':
            throw new TypeError('Paramater intakes a String or Array.');
            break;
    }
    if (string.length < 2) {
        throw new Error('String must have 1 or more characters.');
    }
    if (max) {
        switch (typeof max) {
            case 'string':
            case 'boolean':
            case 'undefined':
                throw new TypeError('Paramater intakes a number.');
                break;
        }
        if (Array.isArray(max)) {
            throw new TypeError('Paramater intakes a number.');
        }
    }
    const array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(randomizer(string));
        if (array.length == string.length) {
            const randomizedString = array.join('').toString();
            if (!max) {
                return randomizedString;
            } else {
                return randomizedString.slice(0, max);
            }
        }
    }
}

/**
 * @param {Number} max
 * @returns Number
 */
function randomNumber(max) {
    const string = '0123456789';
    if (max) {
        switch (typeof max) {
            case 'string':
            case 'boolean':
            case 'undefined':
                throw new TypeError('Paramater intakes a number.');
                break;
        }
        if (Array.isArray(max)) {
            throw new TypeError('Paramater intakes a number.');
        }
    }
    const array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(randomizer(string));
        if (array.length == string.length) {
            const randomizedString = array.join('').toString();
            if (!max) {
                return parseInt(randomizedString);
            } else {
                return parseInt(randomizedString.slice(0, max));
            }
        }
    }
}

/**
 * @param {Array} array
 * @returns Array
 */
function arrayPick(array) {
    if (!array) {
        throw new Error('No array specified.');
    }
    switch (typeof array) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'undefined':
            throw new TypeError('Paramater intakes an Array.');
            break;
    }
    if (array.length < 2) {
        throw new Error('Array must contain one or more items.');
    }
    const randomizer = Math.floor(Math.random() * (array.length - 1) + 1);
    return array[randomizer];
}

module.exports = {
    randomize: randomize, arrayPick: arrayPick, randomNumber: randomNumber
};