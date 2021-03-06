const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

const users = require('../users');

router.get('/', (req, res) => {
    res.render('index', { title: 'Accueil'});
});

router.get('/users', (req, res) => {
    res.json(users);
});

router.get('/contact', (req, res) => {
    res.render('../views/contact', { title: 'Contact'});
});

router.get('/about', (req, res) => {
    res.render('../views/about', { title: 'A propos'});
});

router.get('/items', itemController.getItems);

router.post('/items', itemController.addItem);

module.exports = router;