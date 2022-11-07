const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)




app.listen(port, () => {
    console.log(`server is running on port ${port}`.yellow.bold);
});