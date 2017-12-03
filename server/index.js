const express = require('express');
const topPagesRouter = require('./routes/index');
const app = express();

app.use('/', topPagesRouter);

const port = 3003;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});