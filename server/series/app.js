const express = require('express');
const app = express();
const api = require('./api');
const port = 5002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/series', api);

app.listen(port, () => {
  console.log(`Series listening at http://localhost:${port}`);
});
