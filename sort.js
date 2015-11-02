/// <reference path="./lib/ramda.js" />

function simplePair(section) {
    return R.zip(R.take(section.length / 2, section), R.takeLast(section.length / 2, section));
}

function sortByRating(section) {
    return R.reverse(R.sortBy(R.prop('rating'))(section));
}

function sortByPoints(section) {
    return R.reverse(R.sortBy(R.prop('score'))(section));
}

function sortByPointsThenRating(section) {
    return R.reverse(R.sortBy(R.prop('score'))(R.sortBy(R.prop('rating'))(section)));
}