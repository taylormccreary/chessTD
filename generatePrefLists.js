function breakIt(playerIndexes) {
    return [secondHalf(playerIndexes), R.reverse(firstHalf(playerIndexes))];
}

function secondHalf(playerIndexes) {
    return R.drop(Math.floor(playerIndexes.length / 2), playerIndexes);
}

function firstHalf(playerIndexes) {
    return R.take(Math.floor(playerIndexes.length / 2), playerIndexes);
}

function slide(n, playerListHalves) {
  var half = Math.floor((playerListHalves[0].length + playerListHalves[1].length) / 2);
  if (n < 1) {
    return playerListHalves;
  }else if (n == 1) {
    return [R.drop(1, playerListHalves[0]), [playerListHalves[0][0]].concat(playerListHalves[1])];
  }else if(n < half){
    return slide((n-1), (slide(1, playerListHalves)));
  }else if(n == half){
    return [[R.last(playerListHalves[1])], R.drop(1, R.reverse(playerListHalves[1])).concat(playerListHalves[0])];
  }else if(n > half){
    var toSlide = R.reverse(slide(half, playerListHalves));
    return slide(((n-1)%half), toSlide);
  }else{
    alert("something went wrong");
    return playerListHalves;
  }
}

function findExtras(listHalves){  
 var minLength = Math.min(listHalves[0].length, listHalves[1].length);
  if(minLength == listHalves[0].length){
   return R.drop(minLength, listHalves[1]); 
  }else if(minLength == listHalves[1].length){
   return R.drop(minLength, listHalves[0]); 
  }
}

function sortScoreSection(n, scoreSection){
  var secHalves = breakIt(scoreSection);
  var slidSec = slide(n, secHalves);
  var riffList = R.flatten(R.zip(slidSec[0],slidSec[1])).concat(findExtras(slidSec));
  return riffList;
}

function genScoreSecs(section){
  var k;
  var bigRes = [];
  for(k=0; k<6; k++){
    var res = [];
    var scoreI = R.filter(R.propEq('score', k), section);
    var i;
    for(i=0; i < scoreI.length; i++){
      res.push(R.indexOf(scoreI[i], section));
    }
    bigRes.push(res);
  }
  return bigRes;
}

function genIndPrefList(section, index){
  var player = section[index];
  var scoreSections = genScoreSecs(section);
  var score = player.score;
  var n = R.indexOf(R.indexOf(player,section),scoreSections[score]);
  var prefList = sortScoreSection(n, scoreSections[score]);
  var i;
  for(i=score+1;i<scoreSections.length;i++){
    prefList.push(R.reverse(scoreSections[i]));
  }
  for(i=score-1;i>=0;i--){
    prefList.push(scoreSections[i]);
  }
  return R.flatten(prefList);
}
