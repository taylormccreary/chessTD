

var firstRound = true;

$(document).ready(function () {
    //testSec = sortByPointsThenRating(testSec);
    //console.log(genScoreSecs(testSec));
    //alert(genScoreSecs(testSec)[0]);
    var open = new Section("Open", myPlayers);
    console.log(open);
    open.genAllPrefLists();
    open.reducePrefLists();
    open.phase2();
    console.log(open);
    open.genAllPrefLists();
    open.reducePrefLists();
    open.phase2();
    console.log(open);
    //alert(open.playerList[0].prefList + "\n" +
    //open.playerList[1].prefList + "\n" +
    //open.playerList[2].prefList + "\n" +
    //open.playerList[3].prefList + "\n" +
    //open.playerList[4].prefList + "\n" +
    //open.playerList[5].prefList)
    


    $("#randResults").click(function () {
        var pairedSec = sortByRating(section1);
        var round = simplePair(pairedSec);
        if (firstRound) {
            displayInitialPairings(round, pairedSec);
        } else {
            randResults(round, pairedSec);         
            displayResults(round, pairedSec);
            displayPairings(round);
        }
    });

    $("#pairRound").click(function () {
        var pairedSec2 = sortByPointsThenRating(section1);
        var round2 = simplePair(pairedSec2);
        if (firstRound) {
            displayInitialPairings(round2, pairedSec2);
        } else {
            randResults(round2, pairedSec2);
            displayResults(round2, pairedSec2);
            displayPairings(round2);
        }
    });

    $("#opps").click(function () {
        alert(section1[0].name + ": " + section1[0].opponents);
    })

})

function displayInitialPairings(round, sec) {
    firstRound = false;
    var i;
    for (i = 0; i < round.length; i++) {
        var myTable = document.getElementById("pairings");

        var row = myTable.insertRow(myTable.rows.length);
        row.insertCell(0).innerHTML = myTable.rows.length;
        row.insertCell(1).innerHTML = sec.indexOf(round[i][0]) + 1;
        row.insertCell(2).innerHTML = round[i][0].name + " (" + round[i][0].rating + ")";
        row.insertCell(3).innerHTML = round[i][0].score;
        row.insertCell(4).innerHTML = "";
        row.insertCell(5).innerHTML = sec.indexOf(round[i][1]) + 1;
        row.insertCell(6).innerHTML = round[i][1].name + " (" + round[i][1].rating + ")";
        row.insertCell(7).innerHTML = round[i][1].score;
        row.insertCell(8).innerHTML = "";
    }
}

function displayPairings(round) {
    var i;
    for (i = 0; i < round.length; i++) {
        var myTable = document.getElementById("pairings");
        myTable.rows[i + 1].cells[2].innerHTML = round[i][0].name + " (" + round[i][0].rating + ")";
        myTable.rows[i + 1].cells[3].innerHTML = round[i][0].score;
        myTable.rows[i + 1].cells[6].innerHTML = round[i][1].name + " (" + round[i][1].rating + ")";
        myTable.rows[i + 1].cells[7].innerHTML = round[i][1].score;
    }
}

function randResults(round, sec) {
    var j;
    for (j = 0; j < round.length; j++) {
        var res = Math.round(Math.random());
        round[j][0].rounds.push(res);
        round[j][0].score += res;
        round[j][0].opponents.push(round[j][1].name);
        if (res == 0) {
            round[j][1].rounds.push(1);
            round[j][1].score++;
            round[j][1].opponents.push(round[j][0].name);
        } else {
            round[j][1].rounds.push(0);
        }
    }
}

function displayResults(round, sec) {
    var i;
    var myTable = document.getElementById("pairings");
    for (i = 1; i < myTable.rows.length; i++) {
        myTable.rows[i].cells[4].innerHTML = round[i - 1][0].rounds[round[i - 1][0].rounds.length - 1];
        myTable.rows[i].cells[8].innerHTML = round[i - 1][1].rounds[round[i - 1][1].rounds.length - 1];
    }
}