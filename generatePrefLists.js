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
    if (n < 1) {
        return playerListHalves;
    }else if (n == 1) {
        return [R.drop(1, playerListHalves[0]), [playerListHalves[0][0]].concat(playerListHalves[1])];
    }else{
      var half = Math.floor((playerListHalves[0].length + playerListHalves[1].length) / 2);
      if(n < half){
        return slide((n-1), (slide(1, playerListHalves)));
      }else if(n == half){
        return [R.last(playerListHalves[1]), R.drop(1, R.reverse(playerListHalves[1])).concat(playerListHalves[0])];
      }else{
        return slide(((n-1)%half), R.reverse(slide(half, playerListHalves)));
      }
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

function sortScoreSection(n, section){
  var secHalves = breakIt(section);
  var slidSec = slide(n, secHalves);
  var riffList = R.flatten(R.zip(slidSec[0],slidSec[1])).concat(findExtras(slidSec));
  return riffList;
}