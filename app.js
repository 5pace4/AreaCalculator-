const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const areastorage = require('./js/areastorage');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//let serversidearea = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/views/index.html")
});

app.post('/areacalculator', (req, res) => {
     const polygonType = req.body.polygonType;
     let area = 0;
     switch(polygonType) {
        case "triangle":
            const base = req.body.base;
            const height = req.body.height;
            area = 0.5 * base * height;
            break;
        case "rectangle":
            const length = req.body.length;
            const width = req.body.width;
            area = length * width;
            break;
        case "circle":
            const radius = req.body.radius;
            area = Math.PI * radius * radius;
            break;
     }
     //areastorage.setArea(area);
     res.json({area: area});
});

module.exports = app;