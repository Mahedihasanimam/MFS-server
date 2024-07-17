const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Sample route to test the server
app.get('/', (req, res) => {
    res.send('mfs server is running');
});

// Route to handle form submission
app.post('/register', (req, res) => {
    const { name, pin, phone, email } = req.body;
    // You can add your logic here to handle registration data
    console.log("Received data:", { name, pin, phone, email });

    // Send a response back to the client
    res.json({ message: 'Registration data received', data: req.body });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
