#!/usr/bin/env node
const connectDB = require('./config/db.js');
connectDB();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get( '/', (req, res) => res.send('<h1 style="font-family: `Ekibastuz`">Server started, cool!</h1>') )

app.use(express.json({extended: false}));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => process.stdout.write(`server started at ${PORT}\n`));


