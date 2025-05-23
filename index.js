const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateRoute = require('./routes/generate');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/generate', generateRoute);

app.listen(3000, () => {
  console.log('Servidor ClipCorte rodando na porta 3000');
});
