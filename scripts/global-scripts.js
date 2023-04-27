function randomInt(min = 0, max = 1) {
    return Math.round(Math.random() * (max - min) + min);
};

function between(min = 0, num, max = 1) {
    return Math.min(Math.max(num, min), max);
};

export {randomInt, between};