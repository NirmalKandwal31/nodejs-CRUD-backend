const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/routes');

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api', userRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('App is Running');
});

// Connect to MongoDB
async function connectDb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/', { dbName: 'UsersDB' });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB', err);
    }
}

connectDb().catch((err) => console.log(err));

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
