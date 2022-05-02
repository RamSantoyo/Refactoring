
class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
    static getExplorersUsernames(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.mission);
        return usernamesInNode
    }

    static filterStack(explorers, mission){
        const explorersstacks = explorers.filter((explorer) => explorer.stacks.includes(mission));
        const stacks = explorersstacks.map((explorer) => explorer);
        return stacks 
    }
}

module.exports = ExplorerService