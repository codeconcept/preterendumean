const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://testuser:azeqsd123@localhost:27017/preterendu");
mongoose.Promise = global.Promise; 

const topPagesRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', topPagesRouter);

const port = 3003;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});