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

// Replace "192.168.0.12" with your own ip-address.
const hostname = '192.168.0.12';
const PORT = process.env.PORT

app.listen(PORT, hostname, console.log(`Server running at http://${hostname}:${PORT}/`));
