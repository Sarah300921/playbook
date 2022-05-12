// JavaScript source code
const ExplorerController = require ("./../controllers/ExplorerController")
//const Reader = require("/../Users/sluevano68/Documents/Sarah/LaunchX/BackEnd/nodejs/playbook/weekly_mission_4/FIZZBUZZ/lib/utils/Reader")
const Reader = require("/Users/sluevano68/Documents/Sarah/LaunchX/BackEnd/nodejs/playbook/weekly_mission_4/FIZZBUZZ/lib/utils/Reader")
const ExplorerService = require("./../ExplorerService")
const FizzBuzzService = require("./../FizzBuzzService")

describe("TDD para ExplorerController", () => {
    test("prueba modulo ExplorerService", () => {
        const unitest = ExplorerController.getExplorerByMision("node")
        expect(unitest[9].mission).toBe("node")
    })
})