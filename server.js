#!/usr/bin/env node
const app = require('express')();

const PORT = process.env.PORT || 5000;

app.get( '/', (req, res) => res.send('<h1>Server started, cool!</h1>') )
app.listen(PORT, () => process.stdout.write(`server started at ${PORT}\n`));


