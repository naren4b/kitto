'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.send(JSON.stringify(req.headers));
  res.sendFile('index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);