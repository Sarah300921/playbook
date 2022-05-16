// JavaScript source code
const ExplorerController = require("./services/controllers/ExplorerController");
const FizzBuzzController = require ("./services/FizzBuzzService")

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json("FizzBuzz trick Api welcome!");
});

app.listen(port, () => {
    console.log(`FizzBuzz API trick in localhost:${port}`);
});

app.get("/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMision = ExplorerController.getExplorerByMision(mission);

    response.json(explorersInMision);
});

app.get("/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const cantExplorersInMision = ExplorerController.getExplorersAmountByMission(mission);

    response.json(cantExplorersInMision);
});

app.get("/explorers/gitusernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const gitExplorersInMision = ExplorerController.getExplorersUsernamesByMission(mission);

    response.json(gitExplorersInMision);
});
