const Block = require("./block.js");

class Chain {
    constructor(iZone, iSection, iDifficulty) {
        this.Zone = iZone,
        this.Section = iSection,
        this.Blocks = [],
        this.difficulty = iDifficulty,
        this.isChainValid = this.isChainValid()
    }

    createNewBlock(jsonData) {
        let iIndex = 0;
        let Hash = "0";
        if (this.getLatestBlock() != undefined) {
            iIndex = this.getLatestBlock().Index + 1;
            Hash = this.getLatestBlock().Hash;
        }
        let oNewBlock = new Block(iIndex, jsonData, Hash, this.difficulty);
        this.Blocks.push(oNewBlock);
    }

    getLatestBlock() {
        return this.Blocks[this.Blocks.length - 1];
    }

    isChainValid() {
        for (let i = 1; i < this.Blocks.length; i++) {
            const currentBlock = this.Blocks[i];
            const previousBlock = this.Blocks[i - 1];
            if (currentBlock.Hash !== currentBlock.mineBlock(this.difficulty)) {
                return false;
            }
            if (currentBlock.PreviousHash !== previousBlock.Hash) {
                return false;
            }
        }
        return true;
    }

}module.exports = Chain;

