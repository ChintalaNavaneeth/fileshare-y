const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

const connectDB = require('./config/db');
connectDB();

//Cors
var allowedOrigins = ['http://localhost:3000',
                      'http://127.0.0.1:3000'];
const corsOptions = {
    origin : allowedOrigins,
}
app.use(cors(corsOptions)),
//template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
//Routes
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));





app.listen(PORT,()=>{ console.log(`Listening on port ${PORT}.`)});