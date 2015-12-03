var firstRound = true;
var open = new Section("Open", myPlayers);
console.log(open);
open.genAllPrefLists();
open.reducePrefLists();
var openRound = open.phase2();
$(document).ready(function () {

    $("#pairings").loadTemplate("beforeResultsTemplate.html", openRound, { isFile: true });

    $("#randResults").click(function () {
        for (var i = 0; i < openRound.length; i++) {
            openRound[i].wRes = Math.round(Math.random());
            openRound[i].bRes = 1 - openRound[i].wRes;
        }
        $("#pairings").loadTemplate("resultTemplate.html", openRound, { isFile: true });
    });

    $("#pairRound").click(function () {
        open.calculateResults(openRound);
        open.genAllPrefLists();
        open.reducePrefLists();
        openRound = open.phase2();
        $("#pairings").loadTemplate("beforeResultsTemplate.html", openRound, { isFile: true });
    });

});

