var express = require('express');
var router = express.Router();
const Stock = require('../models/Stock');

router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    return res.send(stocks);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log({ id: req.params.id });
    const stock = await Stock.findById(req.params.id);
    console.log(stock);
    return res.send(stock);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
});

module.exports = router;
