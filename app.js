const express = require('express');
const app = express();
const path = require('path');
const projects = require('./routes/projects');
const contact = require('./routes/contact');

app.use(express.json());
app.use('/projects', projects);
app.use('/contact', contact);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on port ${PORT}...`));
