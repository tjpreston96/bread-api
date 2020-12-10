var express = require('express');
const { route } = require('.');
var router = express.Router();
const breadsCtrl = require('../controllers/api/breads');

router.get('/breads', breadsCtrl.index)
router.get('/breads/:id', breadsCtrl.show)
router.post('/breads', breadsCtrl.create)
router.put('/breads/:id', breadsCtrl.update)
router.delete('/breads/:id', breadsCtrl.delete)

module.exports = router;
