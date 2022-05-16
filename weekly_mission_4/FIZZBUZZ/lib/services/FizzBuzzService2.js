// JavaScript source code
class FizzbuzzService {
    static validacionExplorerScore(explorers, mission) {
        const validacionExplorerMision = explorers.filter((explorer) => explorer.mission === mission)
        const validation = validacionExplorerMision.map((explorer) => {
            if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
                explorer.trick = "FIZZBUZZ";
                //console.log(explorer.name + " " + explorer.trick)
                return explorer.trick;
            } else if (explorer.score % 3 === 0) {
                explorer.trick = "FIZZ";
                //console.log(explorer.name + " " + explorer.trick)
                return explorer.trick;
            } else if (explorer.score % 5 === 0) {
                explorer.trick = "BUZZ";
                //console.log(explorer.name + " " + explorer.trick)
                return explorer.trick;
            } else {
                explorer.trick = explorer.score;
                //console.log(explorer.name + " " + explorer.score)
                return explorer.trick;
            }
        })
        return validation;
    }

    static applyValidacionInNumber(score) {
        function validar(score) {
        //const validacion = score;

       // const validacionPorNumero = ((score) => {
            if (score % 5 === 0 && score % 3 === 0) {
                const score = "FIZZBUZZ"
                return score;
            } else if (score % 3 === 0) {
                const score = "FIZZ"
                return score;
            } else if (score % 5 === 0) {
                const score = "BUZZ"
                return score;
            } else {
                return score;
            }
        }
        //return validacionPorNumero;
        //return score.trick
        return validar(score)
    }
 }

module.exports = FizzbuzzService
