const express = require('express');
const app = express();
const api = require('./api');
const port = 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/movies', api);

app.listen(port, () => {
  console.log(`Movies listening at http://localhost:${port}`);
});
