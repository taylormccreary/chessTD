function Round(number, pairings) {
    this.number = number;
    this.pairings = pairings;
}

function Pairing(whitePlayer, blackPlayer) {
    this.white = whitePlayer;
    this.black = blackPlayer;
    this.wRes = 1;
    this.bRes = 1 - this.wRes;
}

//function Pairing(whiteNumber, blackNumber) {
//    this.white = whiteNumber;
//    this.black = blackNumber;
//    this.result = 1;
//}