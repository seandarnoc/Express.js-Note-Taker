const express = require('express');

const app = express();
const PORT = process.env.port || 3001;
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => 
  console.log(`Serving  at http://localhost:${PORT}!`)
);