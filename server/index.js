const express = require('express');
const topPagesRouter = express.Router();
const app = express();
const users = require('./users');

topPagesRouter.get('/', (req, res) => {
    res.send('Bienvenue sur Prêté Rendu (le site qui permet de retrouver vos affaires)');
});

topPagesRouter.get('/users', (req, res) => {
    res.json(users);
});

console.log(app.use);
app.use('/', topPagesRouter);

const port = 3003;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});