const mongoose = require('mongoose');
const db = require('config').get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log('MongoDB connected');
    } catch(err) {
        console.log('MongoDB error - ', err);
        process.exit(1);
    }
}
module.exports = connectDB;