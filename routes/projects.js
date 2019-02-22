const express = require('express');
const projects = require('../projects');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(projects);
});
router.get('/:name', async (req, res) => {
  const project = await projects.find(el => el.url === req.params.name);
  res.send(project);
});

module.exports = router;
