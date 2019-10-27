const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.options("*", cors({
    origin: "*"
}));

const port = 8000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

require("./app/routes")(app, {});

app.listen(port, () => {
    console.log(`We are live on port ${port}.`);
})