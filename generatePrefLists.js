Section.prototype.breakIt = function (playerIndexes) {
    return [this.secondHalf(playerIndexes), R.reverse(this.firstHalf(playerIndexes))];
}

Section.prototype.secondHalf = function (playerIndexes) {
    return R.drop(Math.floor(playerIndexes.length / 2), playerIndexes);
}

Section.prototype.firstHalf = function (playerIndexes) {
    return R.take(Math.floor(playerIndexes.length / 2), playerIndexes);
}

Section.prototype.slide = function (n, playerListHalves) {
    var half = Math.floor((playerListHalves[0].length + playerListHalves[1].length) / 2);
    if (n < 1) {
        return playerListHalves;
    } else if (n === 1) {
        return [R.drop(1, playerListHalves[0]), [playerListHalves[0][0]].concat(playerListHalves[1])];
    } else if (n < half) {
        return this.slide((n - 1), (this.slide(1, playerListHalves)));
    } else if (n === half) {
        return [[R.last(playerListHalves[1])], R.drop(1, R.reverse(playerListHalves[1])).concat(playerListHalves[0])];
    } else if (n > half) {
        var toSlide = R.reverse(this.slide(half, playerListHalves));
        return this.slide(((n - 1) % half), toSlide);
    } else {
        alert("something went wrong");
        return playerListHalves;
    }
}

Section.prototype.findExtras = function (listHalves) {

    var minLength = Math.min(listHalves[0].length, listHalves[1].length);

    if (minLength === listHalves[0].length) {
        return R.drop(minLength, listHalves[1]);
    } else if (minLength === listHalves[1].length) {
        return R.drop(minLength, listHalves[0]);
    }
 
}

Section.prototype.sortScoreSection = function (n, scoreSection) {

    var secHalves = this.breakIt(scoreSection);
    var slidSec = this.slide(n, secHalves);

    var riffList = R.flatten(R.zip(slidSec[0], slidSec[1])).concat(this.findExtras(slidSec));

    return riffList;
}

Section.prototype.genScoreSecs = function (section) {
    var k;
    var bigRes = [];
    for (k = 0; k < 6; k++) {
        var res = [];
        var scoreI = R.filter(R.propEq('score', k), section);
        var i;
        for (i = 0; i < scoreI.length; i++) {
            res.push(R.indexOf(scoreI[i], section));
        }
        bigRes.push(res);
    }
    return bigRes;
}

Section.prototype.genIndPrefList = function (section, index) {
    var player = section[index];
    var scoreSections = this.genScoreSecs(section);
    var score = player.score;
    var n = R.indexOf(R.indexOf(player, section), scoreSections[score]);
    var prefList = this.sortScoreSection(n, scoreSections[score]);
    var i;
    for (i = score + 1; i < scoreSections.length; i++) {
        prefList.push(R.reverse(scoreSections[i]));
    }
    for (i = score - 1; i >= 0; i--) {
        prefList.push(scoreSections[i]);
    }
    return R.flatten(prefList);
}
