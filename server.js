const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(__dirname));

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