require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./router/auth-router')
const connectDB = require('./utils/db')

// middle ware
app.use(express.json())

app.use('/api/auth', router)

const PORT = 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`PORT is Running at ${PORT}`);
    });
});
