require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

var multer = require('multer');
const app = express();

var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_ID, 
{   useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: 'majority'
});

app.use(bodyParser.json());


const routesforstudent = require('./routes/student.js')
app.use('/', routesforstudent);


app.listen(3000);
