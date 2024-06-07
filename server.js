const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs');
});

app.get('/about', (req, res) => {
  res.render(__dirname + '/views/about.ejs');
});

app.get('/contact', (req, res) => {
  res.render(__dirname + '/views/contact.ejs');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});