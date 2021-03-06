const Reader = require ("../utils/Reader")
const ExplorerService = require ("../services/ExplorerService")
const FizzbuzzService = require ("../services/FizzbuzzService")

class ExplorerController{
    
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.getExplorersUsernames(explorers, mission).length;
    }

    static getFizzbuzzService(score){
        return FizzbuzzService.applyValidationInExplorer({name: "Explorer"+score, score: score});
    }

    static getStacks(mission){
        const explorers = Reader.readJsonFile("explorers.json")
        return ExplorerService.filterStack(explorers, mission);
    }

}

module.exports = ExplorerController