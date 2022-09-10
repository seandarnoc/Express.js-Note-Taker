const express = require('express');
const fs = require("fs");

const app = express();

const apiRoutes = require('../../api/apiRoutes.js');
const htmlRoutes = require('../../html/htmlRoutes.js');

const PORT = process.env.port || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( express.static("public"));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => 
  console.log(`Serving  at http://localhost:${PORT}!`)
);