function Round(number, pairings) {
    this.number = number;
    this.pairings = pairings;
}

function Pairing(n, whitePlayer, blackPlayer) {
    this.white = whitePlayer;
    this.black = blackPlayer;
    this.wRes = 1;
    this.bRes = 1 - this.wRes;
    this.number = n;
}

//function Pairing(whiteNumber, blackNumber) {
//    this.white = whiteNumber;
//    this.black = blackNumber;
//    this.result = 1;
//}