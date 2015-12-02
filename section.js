function Section(name, playersJSON) {
    this.name = name;
    this.playerList = playersJSON;
    this.rounds = [];
}

Section.prototype.proposeToFirstChoice = function (player) {
    var firstChoice = this.playerList[player.prefList[0]];
    this.propose(player, firstChoice);
}

Section.prototype.reducePrefLists = function () {
    R.forEach(this.proposeToFirstChoice.bind(this), this.playerList);
    for (var i = 0; i < this.playerList.length; i++) {
        this.playerList[i].currProp = -1;
    }
}

Section.prototype.removeAFromBPrefList = function (playerA, playerB) {

    var foundSpot = R.indexOf(R.indexOf(playerA, this.playerList), playerB.prefList);

    if (foundSpot > -1) {
        playerB.prefList = R.remove(foundSpot, 1, playerB.prefList);
    }
}

Section.prototype.dropBottomPrefs = function (playerA, newLastIndex) {

    if (newLastIndex === playerA.prefList.length - 1) {
        return;
    }

    var i;
    var originalLength = playerA.prefList.length;

    for (i = newLastIndex + 1; i < originalLength; i++) {
        this.removeAFromBPrefList(playerA, this.playerList[playerA.prefList[playerA.prefList.length - 1]]);
        this.removeAFromBPrefList(this.playerList[playerA.prefList[playerA.prefList.length - 1]], playerA);
    }
}

Section.prototype.propose = function (proposer, recipient) {

    var foundSpot = R.indexOf(R.indexOf(proposer, this.playerList), recipient.prefList);

    if (foundSpot > -1) {

        if (recipient.currProp !== -1) {
            var otherGuy = this.playerList[recipient.currProp];
            this.removeAFromBPrefList(recipient, otherGuy);
            this.proposeToFirstChoice(otherGuy);
        }
        recipient.currProp = R.indexOf(proposer, this.playerList);
        this.dropBottomPrefs(recipient, foundSpot);

    } else {

        this.removeAFromBPrefList(recipient, proposer);

        if (proposer.prefList.length > 0) {
            this.propose(proposer, this.playerList[proposer.prefList[0]]);
        } else {
            alert("no stable pairing");
        }

    }
}

Section.prototype.recPhase2 = function () {
    this.eliminatePairs(this.playerList);

    for (var i = 0; i < this.playerList.length; i++) {
        if (this.playerList[i].prefList.length > 1) {
            this.eliminate1rotation(i, this.playerList);
            this.recPhase2();
        }
    }
}

Section.prototype.phase2 = function () {

    this.recPhase2();
    var pairings = [];
    for (var j = 0; j < this.playerList.length; j++) {
        //this.playerList[j].opponents[this.playerList[j].opponents.length] = this.playerList[j].prefList[0];
        this.playerList[j].opponents.push(this.playerList[j].prefList[0]);
        if (j < this.playerList[j].prefList[0]) {
            var pair = new Pairing(pairings.length+1,this.playerList[j], this.playerList[this.playerList[j].prefList[0]]);
            pairings.push(pair);
        }
    }
    return pairings;
}

Section.prototype.eliminatePairs = function () {

    for (var i = 0; i < this.playerList.length; i++) {
        if (this.playerList[i].prefList.length == 1) {
            this.removeThisPair(this.playerList[i], this.playerList[this.playerList[i].prefList[0]], this.playerList);
        }
    }
}

Section.prototype.removeThisPair = function (playerA, playerB) {

    for (var i = 0; i < this.playerList.length; i++) {
        if (playerA == this.playerList[i]) {
            playerA.prefList = [R.indexOf(playerB, this.playerList)];
        } else if (playerB == this.playerList[i]) {
            playerB.prefList = [R.indexOf(playerA, this.playerList)];
        } else {
            this.removeAFromBPrefList(playerA, this.playerList[i]);
            this.removeAFromBPrefList(playerB, this.playerList[i]);
        }
    }
}

Section.prototype.eliminate1rotation = function (start) {

    this.removeAFromBPrefList(this.playerList[start], this.playerList[this.playerList[start].prefList[0]]);
    this.removeAFromBPrefList(this.playerList[this.playerList[start].prefList[0]], this.playerList[start]);

    var isFirst = false;
    var newStart = 0;

    for (var j = 0; j < this.playerList.length; j++) {
        if (j !== start && this.playerList[j].prefList[0] === this.playerList[start].prefList[0]) {
            isFirst = true;
            newStart = j;
        }
    }

    if (isFirst) {
        this.eliminate1rotation(newStart, this.playerList);
    }
}

Section.prototype.calculateResults = function (roundWithResults) {
    for (var i = 0; i < roundWithResults.length; i++) {
        var wPlayer = R.indexOf(roundWithResults[i].white, this.playerList);
        this.playerList[wPlayer].score += roundWithResults[i].wRes;
        var bPlayer = R.indexOf(roundWithResults[i].black, this.playerList);
        this.playerList[bPlayer].score += roundWithResults[i].bRes;
    }
}