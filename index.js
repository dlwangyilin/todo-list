const express = require('express');
const app = express();
const port = 3001;
const todoRoutes = require('./routes/todo');
const bodyParser = require('body-parser');

// Tool for extract data from body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Root Route');
});

app.use('/api/todos', todoRoutes);


app.listen(port, () => {
    console.log('APP is running in ', port);
});