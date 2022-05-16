// JavaScript source code
const Reader = require("/../Users/sluevano68/Documents/Sarah/LaunchX/BackEnd/nodejs/playbook/weekly_mission_4/FIZZBUZZ/lib/utils/Reader")
const ExplorerService = require("./../ExplorerService")
const FizzBuzzService = require("./../FizzBuzzService2")
const { cantidadPorMision } = require("./../ExplorerService")

class ExplorerController {
    static getExplorerByMision(mission) {
        
        const explorers = Reader.readJsonFile("explorers.json")
        const todosporMision = ExplorerService.porMision(explorers, mission)
           return todosporMision
     }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json")
        const usernamesporMision = ExplorerService.usernamePorMision(explorers,mission) 
            return usernamesporMision
    }
    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json")
        const numPorMision = ExplorerService.cantidadPorMision(explorers, mission)
            return numPorMision
    }

    static getTest(mission) {
        const explorers = Reader.readJsonFile("explorers.json")
        const trickEC = FizzBuzzService.validacionExplorerScore(explorers,mission)
        return trickEC
    }

    static getFizzBuzz(score) {
        const fizzbuzzScore = FizzBuzzService.applyValidacionInNumber(score)
        //console.log(fizzbuzzScore)
        return fizzbuzzScore
    }
}

module.exports = ExplorerController


//console.log(ExplorerController.getFizzBuzz(30))
//console.log(ExplorerController.getTest("java"))
//console.log(ExplorerController.getExplorerByMision("java"))
//console.log(`cantidad de usuarios en node:` + ExplorerController.getExplorersAmountByMission("node"))