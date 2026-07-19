require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express()

const PORT = process.env.PORT || 1001

const userRouter = require('./routes/users')

app.use(express.json())


app.use('/api/v1/users', userRouter)

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to Database");
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error connecting to database", error.message);
    });