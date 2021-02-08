function randomizer(string) { //Helper function for (randomize) function
    const randomizer = Math.floor(Math.random() * (string.length - 1) + 1);
    const randomizedArray = string[randomizer];
    return randomizedArray;
}
function randomize(string) {
    if (!string) {
        throw new Error("No string specified.");
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
        throw new Error("No array specified.");
    }    
    const randomizer = Math.floor(Math.random() * (string.length - 1) + 1);
    return array[randomizer];
}
module.exports = {
    randomize: randomize, arrayPick: arrayPick;
};
