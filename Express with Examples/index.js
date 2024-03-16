const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const users = [{
    name: "Nagaraj",
    kidneys: [{
        healthy: false
    }]
}];

// Route for both getting kidney health data and adding kidney health data
app.post("/", function(req, res) {
    // If the request body contains "isHealthy" property, it means we are adding a new kidney
    if (req.body.hasOwnProperty("isHealthy")) {
        const isHealthy = req.body.isHealthy;
        users[0].kidneys.push({
            healthy: isHealthy
        });
        return res.json({
            msg: "Done"
        });
    }

    // If "isHealthy" property is not present, we are retrieving kidney health data
    const NJKidneys = users[0].kidneys;
    const numberoFKidneys = NJKidneys.length;

    // Filter out healthy kidney
    let numofhealthKidneys = 0;

    for (let index = 0; index < NJKidneys.length; index++) {
        if (NJKidneys[index].healthy) {
            numofhealthKidneys++;
        }
    }
    const numofUnhealthKidneys = numberoFKidneys - numofhealthKidneys;

    res.json({
        numberoFKidneys,
        numofhealthKidneys,
        numofUnhealthKidneys
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
