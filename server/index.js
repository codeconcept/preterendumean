const express = require('express');
const topPagesRouter = require('./routes/index');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', topPagesRouter);

const port = 3003;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});