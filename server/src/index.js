const express = require('express');

const routes = require('./routes');

const app = express();
app.use(routes);

app.get('/', (request, response) => {
  response.send('Hello world');
});

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
