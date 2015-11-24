function Section (name, playersJSON){
	this.name = name;
	this.playerList = playersJSON;
}

Section.prototype.proposeToFirstChoice = function (player) {
    var firstChoice = this.playerList[player.prefList[0]];
    this.propose(player, firstChoice);
}

Section.prototype.reducePrefLists = function () {
    R.forEach(this.proposeToFirstChoice.bind(this), this.playerList);
    //for (var i = 0; i < this.playerList.length; i++) {
    //    this.proposeToFirstChoice(this.playerList[i]);
    //}
}

Section.prototype.removeAFromBPrefList = function(A,B){
	var foundSpot = R.indexOf(R.indexOf(A,this.playerList),B.prefList);
    if(foundSpot > -1){
    B.prefList = R.remove(foundSpot,1,B.prefList);
    }
}

Section.prototype.dropBottomPrefs = function(A, newLastIndex){
	if(newLastIndex == A.prefList.length-1){
      return;
    }
    var i;
    var originalLength = A.prefList.length;
    for(i = newLastIndex + 1; i<originalLength; i++){
      this.removeAFromBPrefList(A,this.playerList[A.prefList[A.prefList.length-1]]);
      this.removeAFromBPrefList(this.playerList[A.prefList[A.prefList.length-1]],A);
    }
}

Section.prototype.propose = function(proposer, recipient){
	var foundSpot = R.indexOf(R.indexOf(proposer,this.playerList),recipient.prefList);
    if (foundSpot > -1){
      if(recipient.currProp !== -1){
        this.removeAFromBPrefList(recipient,this.playerList[recipient.currProp]);
      }
      recipient.currProp = R.indexOf(proposer, this.playerList);
      this.dropBottomPrefs(recipient,foundSpot);
    }else{
      this.removeAFromBPrefList(recipient,proposer);
      if(proposer.prefList.length>0){
        this.propose(proposer, this.playerList[proposer.prefList[0]]);
      }else{
        alert("no stable pairing");
      }
      
    }
}

Section.prototype.phase2 = function(){
  var i;
  this.eliminatePairs(this.playerList);
  for(i = 0; i<this.playerList.length; i++){
    if(this.playerList[i].prefList.length>1){
      this.eliminate1rotation(i, this.playerList);
      this.phase2(this.playerList);
    }
  }
}

Section.prototype.eliminatePairs = function(){
  for (var i = 0; i < this.playerList.length; i++){
    if (this.playerList[i].prefList.length == 1){
      this.removeThisPair(this.playerList[i],this.playerList[this.playerList[i].prefList[0]],this.playerList);
    }
  }
}

Section.prototype.removeThisPair = function(A,B){
  for(var i = 0; i <this.playerList.length; i++){
    if(A == this.playerList[i]){
      A.prefList = [R.indexOf(B,this.playerList)];
    }else if(B == this.playerList[i]){
      B.prefList = [R.indexOf(A,this.playerList)];
    }else{
      this.removeAFromBPrefList(A,this.playerList[i]);
      this.removeAFromBPrefList(B,this.playerList[i]);
    }
  }
}

Section.prototype.eliminate1rotation = function(start){
  this.removeAFromBPrefList(this.playerList[start], this.playerList[this.playerList[start].prefList[0]]);
  this.removeAFromBPrefList(this.playerList[this.playerList[start].prefList[0]], this.playerList[start]);
  var isFirst = false;
  var newStart= 0;
  for (var j = 0; j<this.playerList.length; j++){
    if (j !== start && this.playerList[j].prefList[0] === this.playerList[start].prefList[0]){
      isFirst = true;
      newStart = j;
    }
  }
  if(isFirst){
    this.eliminate1rotation(newStart, this.playerList);
  }
}