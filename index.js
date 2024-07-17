const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASS}@cluster0.k4th77t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    // const userdb=client.connect
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('mfs server is running');
});

// app.post('/register', (req, res) => {
//   const { name, pin, phone, email } = req.body;
//   // You can add your logic here to handle registration data
//   console.log("Received data:", { name, pin, phone, email });

//   // Send a response back to the client
//   res.json({ message: 'Registration data received', data: req.body });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
