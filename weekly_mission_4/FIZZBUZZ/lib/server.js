// JavaScript source code server.js
const ExplorerController = require("./services/controllers/ExplorerController");

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json("FizzBuzz Api welcome!");
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
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


app.get("/fizzbuzz/", (request, response) => {
    response.json("FizzBuzz area");
});


app.get("/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const getScore= ExplorerController.getFizzBuzz(score);

    response.json({ "score": score, "trick": getScore });
});

