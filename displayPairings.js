

var firstRound = true;
var open = new Section("Open", myPlayers);
console.log(open);
$(document).ready(function () {



    //testSec = sortByPointsThenRating(testSec);
    //console.log(genScoreSecs(testSec));
    //alert(genScoreSecs(testSec)[0]);

    open.genAllPrefLists();
    open.reducePrefLists();
    var openRound = open.phase2();
    //console.log(open);
    //open.genAllPrefLists();
    //open.reducePrefLists();
    //open.phase2();
    //console.log(open);


    var pairedSec = sortByRating(section1);
    var round = simplePair(pairedSec);
    //displayInitialPairings(round, pairedSec);

    $("#pairings").loadTemplate($("#template"),
        openRound);


    $("#randResults").click(function () {

        randResults(round, pairedSec);
        displayResults(round, pairedSec);
        displayPairings(round);

    });

    $("#pairRound").click(function () {
        var pairedSec2 = sortByPointsThenRating(section1);
        var round2 = simplePair(pairedSec2);
        randResults(round2, pairedSec2);
        displayResults(round2, pairedSec2);
        displayPairings(round2);

    });


});

function displayInitialPairings(round, sec) {

    firstRound = false;

    for (var i = 0; i < round.length; i++) {
        var myTable = document.getElementById("pairings");

        var row = myTable.insertRow(myTable.rows.length);
        row.insertCell(0).innerHTML = myTable.rows.length - 1;
        row.insertCell(1).innerHTML = round[i][0].number;
        row.insertCell(2).innerHTML = round[i][0].name + " (" + round[i][0].rating + ")";
        row.insertCell(3).innerHTML = round[i][0].score;
        row.insertCell(4).innerHTML = "";
        row.insertCell(5).innerHTML = round[i][1].number;
        row.insertCell(6).innerHTML = round[i][1].name + " (" + round[i][1].rating + ")";
        row.insertCell(7).innerHTML = round[i][1].score;
        row.insertCell(8).innerHTML = "";
    }
}

function displayPairings(round) {

    for (var i = 0; i < round.length; i++) {
        var myTable = document.getElementById("pairings");
        myTable.rows[i + 1].cells[1].innerHTML = round[i][0].number;
        myTable.rows[i + 1].cells[2].innerHTML = round[i][0].name + " (" + round[i][0].rating + ")";
        myTable.rows[i + 1].cells[3].innerHTML = round[i][0].score;
        myTable.rows[i + 1].cells[5].innerHTML = round[i][1].number;
        myTable.rows[i + 1].cells[6].innerHTML = round[i][1].name + " (" + round[i][1].rating + ")";
        myTable.rows[i + 1].cells[7].innerHTML = round[i][1].score;
    }
}

function randResults(round, sec) {

    for (var j = 0; j < round.length; j++) {
        var res = Math.round(Math.random());
        round[j][0].rounds.push(res);
        round[j][0].score += res;
        round[j][0].opponents.push(round[j][1].name);
        if (res === 0) {
            round[j][1].rounds.push(1);
            round[j][1].score++;
            round[j][1].opponents.push(round[j][0].name);
        }
        else {
            round[j][1].rounds.push(0);
        }
    }
}

function displayResults(round, sec) {

    var myTable = document.getElementById("pairings");

    for (var i = 1; i < myTable.rows.length; i++) {
        myTable.rows[i].cells[4].innerHTML = round[i - 1][0].rounds[round[i - 1][0].rounds.length - 1];
        myTable.rows[i].cells[8].innerHTML = round[i - 1][1].rounds[round[i - 1][1].rounds.length - 1];
    }
}