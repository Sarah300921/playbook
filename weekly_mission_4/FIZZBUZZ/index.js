// JavaScript source code
const Reader = require("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorerService")
const explorers = Reader.readJsonFile("explorers.json")

console.log(ExplorerService.porMision(explorers, "node"))
console.log(ExplorerService.cantidadPorMision(explorers, "node"))
console.log(ExplorerService.usernamePorMision(explorers,"node"))

//ExplorerService(explorers, "node");
//ExplorerService(explorers, "node");

//console.log(explorers)

