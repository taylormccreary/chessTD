

var firstRound = true;
var open = new Section("Open", myPlayers);
console.log(open);
open.genAllPrefLists();
open.reducePrefLists();
var openRound = open.phase2();
$(document).ready(function () {



    //testSec = sortByPointsThenRating(testSec);
    //console.log(genScoreSecs(testSec));
    //alert(genScoreSecs(testSec)[0]);

    //console.log(open);
    //open.genAllPrefLists();
    //open.reducePrefLists();
    //open.phase2();
    //console.log(open);



    $("#pairings").loadTemplate("beforeResultsTemplate.html", openRound, { isFile: true });


    $("#randResults").click(function () {
        for (var i = 0; i < openRound.length; i++) {
            openRound[i].wRes = Math.round(Math.random());
            openRound[i].bRes = 1 - openRound[i].wRes;
        }
        $("#pairings").loadTemplate("resultTemplate.html", openRound, { isFile: true });
    });

    $("#pairRound").click(function () {
        console.log("button clicked");
        open.calculateResults(openRound);
        console.log("results calculated");
        open.genAllPrefLists();
        console.log("prefLists generated");
        console.log(open);
        open.reducePrefLists();
        console.log("prefLists reduced");
        openRound = open.phase2();
        console.log("phase2 done");
        $("#pairings").loadTemplate("beforeResultsTemplate.html", openRound, { isFile: true });

    });


});

