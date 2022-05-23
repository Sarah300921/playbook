// JavaScript source code
class ExplorerService {
    static porMision(explorers, mission) {
        const explorerPorMision = explorers.filter((explorer) => explorer.mission === mission)
        return explorerPorMision
    }

    static cantidadPorMision(explorers, mission) {
        const cantPorMision = explorers.filter((explorer) => explorer.mission === mission)
        return cantPorMision.length
    }

    static usernamePorMision(explorers, mission) {
        const usernamePorMision = explorers.filter((explorer) => explorer.mission === mission)
        const githubusername = usernamePorMision.map((explorer) => explorer.githubUsername)
        return githubusername
    }

    static filterExplorerPorStack(explorers,elemento) {
        //const explorers = Reader.readJsonFile("explorers.json")
        const stacksPorExplorer = explorers.filter((explorer) => explorer.stacks.includes(elemento))
        const stackPorExplorer = stacksPorExplorer.map((explorer) => explorer.name)

        return stackPorExplorer
    }
}

///console.log(ExplorerService.filterExplorerPorStack("javascript"))
//console.log(ExplorerService.porMision("java"))
module.exports = ExplorerService