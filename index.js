const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

app.listen( port , () => {
    console.log(`port started at ${port}`);
})

app.get('/', (req, res) => {
    res.send('<h1 align="center"> Welcome </h1>')
})