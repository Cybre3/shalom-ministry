require('dotenv').config();
const config = require('config');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;
const db = config.get('db');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use(morgan('tiny'));

console.log(config.get('name'));

mongoose.set('strictQuery', false);
mongoose.connect(db, { useUnifiedTopology: true }).then(() => {
  console.log(`Connected to ${db}...`);
});


app.listen(port, () => console.log(`listening on port ${port}...`));
