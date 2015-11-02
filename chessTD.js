

var firstRound = true;

$(document).ready(function() {
    
    $("#randResults").click(function() {
        var half = section1.length / 2;
        var round = R.zip(R.take(half, section1), R.takeLast(half, section1))
        if (firstRound) {
            displayInitialPairings(round, section1);
        } else {
            randResults(round, section1);
            alert(section1[0].opponents);
            displayResults(round, section1);
            displayPairings(round);
        }
    });


});

function displayInitialPairings(round, sec) {
    firstRound = false;
    var i;
    for (i = 0; i < round.length; i++) {
        var myTable = document.getElementById("pairings");

        var row = myTable.insertRow(myTable.rows.length);
        row.insertCell(0).innerHTML = myTable.rows.length;
        row.insertCell(1).innerHTML = sec.indexOf(round[i][0]) + 1;
        row.insertCell(2).innerHTML = round[i][0].name;
        row.insertCell(3).innerHTML = round[i][0].score;
        row.insertCell(4).innerHTML = "";
        row.insertCell(5).innerHTML = sec.indexOf(round[i][1]) + 1;
        row.insertCell(6).innerHTML = round[i][1].name;
        row.insertCell(7).innerHTML = round[i][1].score;
        row.insertCell(8).innerHTML = "";
    }
}

function displayPairings(round) {
    var i;
    for (i = 0; i < round.length; i++) {
        var myTable = document.getElementById("pairings");
        myTable.rows[i + 1].cells[2].innerHTML = round[i][0].name;
        myTable.rows[i + 1].cells[3].innerHTML = round[i][0].score;
        myTable.rows[i + 1].cells[6].innerHTML = round[i][1].name;
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