const express = require('express');
const router = express.Router();

const users = require('../users');

router.get('/', (req, res) => {
    res.send('Bienvenue sur Prêté Rendu (le site qui permet de retrouver vos affaires)');
});

router.get('/users', (req, res) => {
    res.json(users);
});

module.exports = router;