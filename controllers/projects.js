const express = require("express");
const projectsRouter = express.Router();
const Project = require("../models/project");

projectsRouter.get("/", async (req, res) => {
  const projects = await Project.find({});
  console.dir(projects)
  res.json(projects.map(project => project.toJSON()));
});

module.exports = projectsRouter;
