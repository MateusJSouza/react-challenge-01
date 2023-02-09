const express = require('express');
const cors = require('cors');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.use((error, request, response, next) => {
  console.log('#### Error handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
