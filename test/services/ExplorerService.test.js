const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Test de ExplorerService", () => {
	test("Requerimento Calcular Explorers", () => {
		const explorers = [{mission: "node" }]
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
		expect(explorersInNode.length).toBe(1);
	});
})