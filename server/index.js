const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const path = require("path")
const buildPath = path.join(__dirname, '..', 'build');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(buildPath));
app.use(require("./API"))


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});