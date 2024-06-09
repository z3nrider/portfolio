const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs');
});

app.get('/about', (req, res) => {
  res.render(__dirname + '/views/about.ejs');
});

app.get('/contact', (req, res) => {
  res.render(__dirname + '/views/contact.ejs');
});

app.post('/contact', (req, res) => {
  res.send(req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});