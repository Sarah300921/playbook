// JavaScript source code
class FizzbuzzService {
    static validacionExplorerScore(explorers, mission) {
        const validacionExplorerMision = explorers.filter((explorer) => explorer.mission === mission)
        const validation = validacionExplorerMision.map((explorer) => {
            if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
                explorer.trick = "FIZZBUZZ";
                console.log(explorer.name + " " + explorer.trick)
                return explorer.trick;
            } else if (explorer.score % 3 === 0) {
                explorer.trick = "FIZZ";
                console.log(explorer.name + " " + explorer.trick)
                return explorer.trick;
            } else if (explorer.score % 5 === 0) {
                explorer.trick = "BUZZ";
                console.log(explorer.name + " " + explorer.trick)
                return explorer.trick;
            } else {
                explorer.trick = explorer.score;
                console.log(explorer.name + " " + explorer.score)
                return explorer;
            }
        })
        return validation;
    }
}

module.exports = FizzbuzzService
