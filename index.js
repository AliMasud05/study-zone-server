const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const subject = require('./data/subject.json');
const subjects = require('./data/subjects.json');



app.get('/', (req, res) => {
    res.send('subject run');
});
app.get('/subject', (req, res) => {
    res.send(subject);
});
app.get('/subjects', (req, res) => {
    res.send(subjects);
})
app.get('/subject/:id', (req, res) => {
    const id = req.params.id;
    const selectedSubject = subjects.find(n => n.id === id);
    res.send(selectedSubject);
});


app.listen(port, () => {
    console.log('subject running', port);
})