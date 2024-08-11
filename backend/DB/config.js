const mongoose = require('mongoose');
require('dotenv').config(); // For managing environment variables

const connectDB = async () => {
    try {
        // Use environment variable for the MongoDB URI
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined in .env file');
        }

        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true, // Use the new URL parser
            useUnifiedTopology: true // Use the new Server Discover and Monitoring engine
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message || err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
