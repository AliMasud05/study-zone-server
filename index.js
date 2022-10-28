const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const subject = require('./data/subject.json');
const subjects = require('./data/subjects.json');


