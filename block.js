const CryptoJS = require("crypto-js");

class Block {
    constructor(iIndex, jsonData, sPreviousHash, iDifficulty) {
        this.Index = iIndex,
        this.TimeStamp = new Date(),
        this.Data = jsonData,
        this.PreviousHash = sPreviousHash,
        this.Hash = this.mineBlock(iDifficulty)
    }

    mineBlock(iDifficulty) {
        var startTime = performance.now();
        let i = 0;
        let sHash = this.calculateHash(0);
        while (sHash.substring(0, iDifficulty) !== new Array(iDifficulty + 1).join("0")) {  
            sHash = this.calculateHash(i++);
            console.log("Dificuldade: " + iDifficulty + " > " + i + " - " + sHash);
        }
        var endTime = performance.now();
        console.log("Time: " + (endTime - startTime) + " milliseconds.")
        return sHash;
    }
    
    calculateHash(nonce) {
        return CryptoJS.SHA256(this.Index + this.TimeStamp + this.PreviousHash + this.Data.voter + this.Data.candidate + nonce).toString();
    }
}

module.exports = Block;