import path from "path";

const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const buildPath = path.join(__dirname, '..', 'build');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(buildPath));
// app.use(require("./API"))


app.get('/api/', async (req, res) => {

    res.send(JSON.stringify({
        hi: "there"
    }))

})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});