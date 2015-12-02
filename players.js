
var section1 = [
    { "name": "Carlsen", "rating": 2850, "rounds": [0], "opponents": [], "score": 0, "number":0},
    { "name": "Nakamura", "rating": 2816, "rounds": [0], "opponents": [], "score": 0, "number":1 },
    { "name": "Topalov", "rating": 2813, "rounds": [0], "opponents": [], "score": 0, "number": 2 },
    { "name": "Kramnik", "rating": 2777, "rounds": [0], "opponents": [], "score": 0, "number": 3 },
    { "name": "Grischuk", "rating": 2774, "rounds": [0], "opponents": [], "score": 0, "number": 4 },
    { "name": "Karjakin", "rating": 2762, "rounds": [0], "opponents": [], "score": 0, "number": 5 },
    { "name": "So", "rating": 2760, "rounds": [0], "opponents": [], "score": 0, "number": 6 },
    { "name": "Vachier-Lagrave", "rating": 2758, "rounds": [0], "opponents": [], "score": 0, "number": 7 },
    { "name": "Tomashevsky", "rating": 2758, "rounds": [0], "opponents": [], "score": 0, "number": 8 },
    { "name": "Li", "rating": 2750, "rounds": [0], "opponents": [], "score": 0, "number": 9 },
    { "name": "Jakovenko", "rating": 2748, "rounds": [0], "opponents": [], "score": 0, "number": 10 },
    { "name": "Anand", "rating": 2803, "rounds": [0], "opponents": [], "score": 0, "number": 11 },
    { "name": "Giri", "rating": 2798, "rounds": [0], "opponents": [], "score": 0, "number": 12 },
    { "name": "Caruana", "rating": 2796, "rounds": [0], "opponents": [], "score": 0, "number": 13 },
    { "name": "Aronian", "rating": 2784, "rounds": [0], "opponents": [], "score": 0, "number": 14 },
    { "name": "Ding", "rating": 2782, "rounds": [0], "opponents": [], "score": 0, "number": 15 }
]



//var myPlayers = [
//    { "name": "Carlsen", "rating": 2850, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 0},
//    { "name": "Nakamura", "rating": 2816, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 1 },
//    { "name": "Topalov", "rating": 2813, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 2 },
//    { "name": "Kramnik", "rating": 2777, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 3 },
//    { "name": "Grischuk", "rating": 2774, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 4 },
//    { "name": "Karjakin", "rating": 2762, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 5 },
//    { "name": "So", "rating": 2760, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 6 },
//    { "name": "Vachier-Lagrave", "rating": 2758, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 7 },
//    { "name": "Tomashevsky", "rating": 2758, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 8 },
//    { "name": "Li", "rating": 2750, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 9 },
//    { "name": "Jakovenko", "rating": 2748, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 10 },
//    { "name": "Anand", "rating": 2803, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 11 },
//    { "name": "Giri", "rating": 2798, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 12 },
//    { "name": "Caruana", "rating": 2796, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 13 },
//    { "name": "Aronian", "rating": 2784, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 14 },
//    { "name": "Ding", "rating": 2782, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 15 }
//];
var myPlayers = [
    { "name": "Carlsen", "rating": 2850, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 0 },
    { "name": "Nakamura", "rating": 2816, "rounds": [0], "opponents": [], "score": 1, "prefList": [], "currProp": -1, "number": 1 },
    { "name": "Topalov", "rating": 2813, "rounds": [0], "opponents": [], "score": 2, "prefList": [], "currProp": -1, "number": 2 },
    { "name": "Kramnik", "rating": 2777, "rounds": [0], "opponents": [], "score": 3, "prefList": [], "currProp": -1, "number": 3 },
    { "name": "Grischuk", "rating": 2774, "rounds": [0], "opponents": [], "score": 4, "prefList": [], "currProp": -1, "number": 4 },
    { "name": "Karjakin", "rating": 2762, "rounds": [0], "opponents": [], "score": 5, "prefList": [], "currProp": -1, "number": 5 },
    { "name": "So", "rating": 2760, "rounds": [0], "opponents": [], "score": 4, "prefList": [], "currProp": -1, "number": 6 },
    { "name": "Vachier-Lagrave", "rating": 2758, "rounds": [0], "opponents": [], "score": 3, "prefList": [], "currProp": -1, "number": 7 },
    { "name": "Tomashevsky", "rating": 2758, "rounds": [0], "opponents": [], "score": 4, "prefList": [], "currProp": -1, "number": 8 },
    { "name": "Li", "rating": 2750, "rounds": [0], "opponents": [], "score": 3, "prefList": [], "currProp": -1, "number": 9 },
    { "name": "Jakovenko", "rating": 2748, "rounds": [0], "opponents": [], "score": 2, "prefList": [], "currProp": -1, "number": 10 },
    { "name": "Anand", "rating": 2803, "rounds": [0], "opponents": [], "score": 2, "prefList": [], "currProp": -1, "number": 11 },
    { "name": "Giri", "rating": 2798, "rounds": [0], "opponents": [], "score": 2, "prefList": [], "currProp": -1, "number": 12 },
    { "name": "Caruana", "rating": 2796, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 13 },
    { "name": "Aronian", "rating": 2784, "rounds": [0], "opponents": [], "score": 1, "prefList": [], "currProp": -1, "number": 14 },
    { "name": "Ding", "rating": 2782, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 15 }
];

for (var i = 0; i < myPlayers.length; i++) {
    myPlayers[i].seed = R.indexOf(myPlayers[i], myPlayers) + 1;
}

//var myPlayers = [
//    { "name": "Carlsen", "rating": 2850, "rounds": [0], "opponents": [], "score": 5, "prefList": [], "currProp": -1, "number": 0 },
//    { "name": "Nakamura", "rating": 2816, "rounds": [0], "opponents": [], "score": 3, "prefList": [], "currProp": -1, "number": 1 },
//    { "name": "Topalov", "rating": 2813, "rounds": [0], "opponents": [], "score": 1, "prefList": [], "currProp": -1, "number": 2 },
//    { "name": "Kramnik", "rating": 2777, "rounds": [0], "opponents": [], "score": 2, "prefList": [], "currProp": -1, "number": 3 },
//    { "name": "Grischuk", "rating": 2774, "rounds": [0], "opponents": [], "score": 3, "prefList": [], "currProp": -1, "number": 4 },
//    { "name": "Karjakin", "rating": 2762, "rounds": [0], "opponents": [], "score": 3, "prefList": [], "currProp": -1, "number": 5 },
//    { "name": "So", "rating": 2760, "rounds": [0], "opponents": [], "score": 3, "prefList": [], "currProp": -1, "number": 6 },
//    { "name": "Vachier-Lagrave", "rating": 2758, "rounds": [0], "opponents": [], "score": 3, "prefList": [], "currProp": -1, "number": 7 },
//    { "name": "Tomashevsky", "rating": 2758, "rounds": [0], "opponents": [], "score": 2, "prefList": [], "currProp": -1, "number": 8 },
//    { "name": "Li", "rating": 2750, "rounds": [0], "opponents": [], "score": 1, "prefList": [], "currProp": -1, "number": 9 },
//    { "name": "Jakovenko", "rating": 2748, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 10 },
//    { "name": "Anand", "rating": 2803, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 11 },
//    { "name": "Giri", "rating": 2798, "rounds": [0], "opponents": [], "score": 1, "prefList": [], "currProp": -1, "number": 12 },
//    { "name": "Caruana", "rating": 2796, "rounds": [0], "opponents": [], "score": 4, "prefList": [], "currProp": -1, "number": 13 },
//    { "name": "Aronian", "rating": 2784, "rounds": [0], "opponents": [], "score": 1, "prefList": [], "currProp": -1, "number": 14 },
//    { "name": "Ding", "rating": 2782, "rounds": [0], "opponents": [], "score": 0, "prefList": [], "currProp": -1, "number": 15 }
//];

function sortByRating(section) {
    return R.reverse(R.sortBy(R.prop("rating"))(section));
}
//myPlayers = sortByRating(myPlayers);
