// JavaScript source code
const Reader = require("/../Users/sluevano68/Documents/Sarah/LaunchX/BackEnd/nodejs/playbook/weekly_mission_4/FIZZBUZZ/lib/utils/Reader")

const ExplorerService = require("./../ExplorerService")
const FizzBuzzService = require("./../FizzBuzzService")

class ExplorerController {
    static getExplorerByMision(mission) {
        const explorers = Reader.readJsonFile("explorers.json")
        
        const uni = ExplorerService.porMision(explorers, mission)
           return uni
                return explorers
    }

}
console.log(ExplorerController.getExplorerByMision("node"))