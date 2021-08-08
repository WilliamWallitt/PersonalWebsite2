const express = require("express");
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
// const buildPath = path.join(__dirname, '..', 'build');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(require("./API"))

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

