const express = require("express");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(require("./API"))


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});