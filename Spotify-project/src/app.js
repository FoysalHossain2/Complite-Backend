const express = require('express');
const cookieParser = require('cookie-parser');

const authRouters = require('./routes/auth.routes');
const musicRouters = require('./routes/music.routes');


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouters);
app.use('/api/music', musicRouters);


module.exports = app;