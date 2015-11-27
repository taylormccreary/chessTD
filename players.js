
var section1 = [
    { "name": "Carlsen", "rating": 2850, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Nakamura", "rating": 2816, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Topalov", "rating": 2813, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Kramnik", "rating": 2777, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Grischuk", "rating": 2774, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Karjakin", "rating": 2762, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "So", "rating": 2760, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Vachier-Lagrave", "rating": 2758, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Tomashevsky", "rating": 2758, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Li", "rating": 2750, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Jakovenko", "rating": 2748, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Anand", "rating": 2803, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Giri", "rating": 2798, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Caruana", "rating": 2796, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Aronian", "rating": 2784, "rounds": [0], "opponents": [], "score": 0 },
    { "name": "Ding", "rating": 2782, "rounds": [0], "opponents": [], "score": 0 }
]

//var myPlayers = [
//    { "name": "Carlsen", "rating": 2850, "rounds": [0], "opponents": [], "score": 0, "prefList": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Nakamura", "rating": 2816, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Topalov", "rating": 2813, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Kramnik", "rating": 2777, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Grischuk", "rating": 2774, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Karjakin", "rating": 2762, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "So", "rating": 2760, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Vachier-Lagrave", "rating": 2758, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Tomashevsky", "rating": 2758, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Li", "rating": 2750, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Jakovenko", "rating": 2748, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Anand", "rating": 2803, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15], "currProp": -1 },
//    { "name": "Giri", "rating": 2798, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15], "currProp": -1 },
//    { "name": "Caruana", "rating": 2796, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "currProp": -1 },
//    { "name": "Aronian", "rating": 2784, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "currProp": -1 },
//    { "name": "Ding", "rating": 2782, "rounds": [0], "opponents": [], "score": 0, "prefList": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "currProp": -1 }
//];


var myPlayers = [
    { "name": "Carlsen", "rating": 2850, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Nakamura", "rating": 2816, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Topalov", "rating": 2813, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Kramnik", "rating": 2777, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Grischuk", "rating": 2774, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Karjakin", "rating": 2762, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "So", "rating": 2760, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Vachier-Lagrave", "rating": 2758, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Tomashevsky", "rating": 2758, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Li", "rating": 2750, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Jakovenko", "rating": 2748, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Anand", "rating": 2803, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Giri", "rating": 2798, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Caruana", "rating": 2796, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Aronian", "rating": 2784, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 },
    { "name": "Ding", "rating": 2782, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1 }
];

function sortByRating(section) {
    return R.reverse(R.sortBy(R.prop("rating"))(section));
}
myPlayers = sortByRating(myPlayers);
var testSec = [
    { "name": "Carlsen", "score": 1 },
    { "name": "Nakamura", "score": 2 },
    { "name": "Topalov", "score": 2 },
    { "name": "Kramnik", "score": 3 },
    { "name": "Grischuk", "score": 1 },
    { "name": "Karjakin", "score": 0 },
    { "name": "So", "score": 0 },
    { "name": "Vachier-Lagrave", "score": 0 },
    { "name": "Tomashevsky", "score": 2 },
    { "name": "Li", "score": 2 },
    { "name": "Jakovenko", "score": 3 },
    { "name": "Anand", "score": 0 },
    { "name": "Giri", "score": 0 },
    { "name": "Caruana", "score": 0 },
    { "name": "Aronian", "score": 4 },
    { "name": "Ding", "score": 4 }
]