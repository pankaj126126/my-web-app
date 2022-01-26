const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config()

const port = process.env.PORT || 8080;

app.use(cors())

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});


app.listen(port, () => {
    console.log('connected');
});

