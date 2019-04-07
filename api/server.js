require('dotenv').config();

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app);

app.listen(port, () => {
  console.log('We are live on ' + port);
});