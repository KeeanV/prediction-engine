const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();



app.get('/', (req,res) => {
    res.send("Hello Node API");
});


app.get('/api/matches', async (req, res) => {
    try {
      await client.connect();
      const collection = client.db('predictionEngine').collection('matches');
      const matches = await collection.find({}).toArray();
      res.json(matches);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching matches');
    } finally {
      await client.close();
    }
  });

app.get('/api/predictions', (req,res) => {
    res.send('Predicted Outcomes: ');
});

app.get('/api/statistics', (req,res) => {
    res.send('Statistics: ');
});

app.get('/api/About', (req,res) => {
  res.send('About: ');
});

app.listen(port, ()=> {
    console.log("node is running on port 3000");
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_KEY;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


