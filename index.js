const Reader = require ("./lib/utils/Reader")
const ExplorerService = require ("./lib/services/ExplorerService")
const FizzbuzzService = require ("./lib/services/FizzbuzzService")
const ExplorerController = require("./lib/controllers/ExplorerController")

//PARTE 1
const explorers = Reader.readJsonFile("explorers.json")
//console.log(explorers)


//PARTE 2
//console.log(ExplorerService.filterByMission(explorers, "node"))
//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
//console.log(ExplorerService.getExplorersUsernames(explorers, "node"))
//console.log(ExplorerService.filterStack(explorers, "javascript"))

//PARTE 3
const explorer3 = {name: "Explorer3", score: 3}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer3))

const explorer5 = {name: "Explorer5", score: 5}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer5))

const explorer15 = {name: "Explorer15", score: 15}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer15))

//PARTE 4
const explorer4 = ExplorerController.getExplorersByMission("node")
//console.log(explorer4)

const explorer41 = ExplorerController.getExplorersUsernamesByMission("node")
//console.log(explorer41)

const explorer42 = ExplorerController.getExplorersAmonutByMission("node")
//console.log(explorer42)