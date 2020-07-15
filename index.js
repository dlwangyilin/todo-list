const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo');
const bodyParser = require('body-parser');

// Tool for extract data from body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);


const port = 3001;
app.listen(port, () => {
    console.log('APP is running in ', port);
});