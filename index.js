const Reader = require ("./lib/utils/Reader")
const ExplorerService = require ("./lib/services/ExplorerService")
const FizzbuzzService = require ("./lib/services/FizzbuzzService")


//PARTE 1
const explorers = Reader.readJsonFile("explorers.json")
console.log(explorers)


//PARTE 2
console.log(ExplorerService.filterByMission(explorers, "node"))
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
console.log(ExplorerService.getExplorersUsernames(explorers, "node"))


//PARTE 3
const explorer3 = {name: "Explorer3", score: 3}
console.log(FizzbuzzService.applyValidationInExplorer(explorer3))

const explorer5 = {name: "Explorer5", score: 5}
console.log(FizzbuzzService.applyValidationInExplorer(explorer5))

const explorer15 = {name: "Explorer15", score: 15}
console.log(FizzbuzzService.applyValidationInExplorer(explorer15))
