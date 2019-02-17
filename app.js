const express = require('express');
const app = express();
const projects = require('./projects');

app.use(express.json());

app.get('/projects', (req, res) => {
  res.send(projects);
});
app.get('/projects/:id', async (req, res) => {
  const project = await projects.find(el => el.id === +req.params.id);
  res.send(project);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on port ${PORT}...`));
