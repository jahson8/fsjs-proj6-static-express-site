const express = require("express");
const router = express.Router();
const { projects } = require("../data/data.json");

router.get("/", (req, res) => {
  res.redirect("/");
});

router.get("/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  if (project) {
    res.render("project", { project });
  } else {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  }
});

module.exports = router;
