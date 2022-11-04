const Chain = require("./chain.js");
const Readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

Readline.question('\nEnter Zone: ', iZone => {
    Readline.question("\nEnter Section: ", iSection => {
        Readline.question("\nEnter Difficulty: ", iDifficulty => {
            newVotting(new Chain(iZone, iSection, parseInt(iDifficulty)));
        });
    });
});
function newVotting(oThisChain) {
    Readline.question('\nEnter CPF: ', iCpf => {
        Readline.question("\nEnter Vote: ", iVote => {
            oThisChain.createNewBlock({ voter: iCpf, candidate: iVote });   
            newVotting(oThisChain);
        });
    });
}