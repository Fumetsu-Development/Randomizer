function randomizer(string) {
    var randomizer = Math.floor(Math.random() * (string.length - 1) + 1);
    var randomizedArray = string[randomizer];
    return randomizedArray;
}
function randomize(string) {
    if (!string) {
        throw new Error("No string specified.");
    }
    var array = [];
    for (var i = 0; i < string.length; i++) {
        array.push(randomizer(string));
        if (array.length == string.length) {
            var randomizedString = array.join('').toString();
            return randomizedString;
        }
    }
}
module.exports = {
    randomize: randomize
};
