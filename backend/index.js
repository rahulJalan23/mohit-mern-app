const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const fs = require('fs');

dotenv.config();
var mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected..'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/stock', require('./controllers/StockController'));

app.get('/api', (_req, res) => {
  res.json({ message: 'alive' });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to requests on port ${process.env.PORT}`);
});
