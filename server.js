const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello Node API");
});


app.get('/api/matches', (req,res) => {
    res.send('Match History: ');
});

app.get('/api/predictions', (req,res) => {
    res.send('Predicted Outcomes: ');
});

app.get('/api/statistics', (req,res) => {
    res.send('Statistics: ');
});


app.listen(port, ()=> {
    console.log("node is running on port 3000");
})
