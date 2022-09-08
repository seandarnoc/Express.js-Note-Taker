const express = require('express');

const app = express();
const PORT = process.env.port || 3001;
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');
const fs = require ('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`Serving  at http://localhost:${PORT}!`)
});