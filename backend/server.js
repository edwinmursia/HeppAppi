const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

const app = express();
dotenv.config();
connectDB();
app.use(bodyParser.json());


//app.get('/', (req, res) => {
//    res.send("API is running..");
//});

app.use('/api/users',userRoutes) ;

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
