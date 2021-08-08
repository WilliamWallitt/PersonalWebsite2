// import path from "path";
// const express = require("express");
// const PORT = process.env.PORT || 5000;
// const bodyParser = require('body-parser');
// const buildPath = path.join(__dirname, '..', 'build');
//
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// app.use(express.static(buildPath));
// app.use(require("./API"))
//
//
// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });

const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.get('/jobs', async (req, res) => {
    try {
        res.send({
            hi: "it will"
        });
    } catch (error) {
        res.status(400).send('Error while getting list of jobs.Try again later.');
    }
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});