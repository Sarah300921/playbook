// JavaScript source code
// pruebas para arreglos en objetos
const Reader = require("/../Users/sluevano68/Documents/Sarah/LaunchX/BackEnd/nodejs/playbook/weekly_mission_4/FIZZBUZZ/lib/utils/Reader")

class ExplorerService {
    
    static porStack(elemento) {
        const explorers = Reader.readJsonFile("explorers.json")
        const stacksPorExplorer = explorers.filter((explorer) => explorer.stacks.includes(elemento))
        const stackPorExplorer = stacksPorExplorer.map((explorer) => explorer.name)
       
       return stackPorExplorer
     
        
    }

}
module.exports = ExplorerService
console.log(ExplorerService.porStack("javascript"))

