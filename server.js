const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hellooo Node API");
})


app.listen(port, ()=> {
    console.log("node is running on port 3000");
})
