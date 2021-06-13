const express = require("express");

// catch 404 errors
const fourOhFourHandler = (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
};

// handle other errors
const generalHandler = (err, req, res, next) => {
  if (err.status === 404) {
    res.status(err.status).render("page-not-found", { err });
  } else {
    err.status = 500;
    err.message = "Internal Server Error";
    res.status(err.status);
    res.render("error", { err });
  }

  console.error(err.status, err.message);
};

module.exports = { fourOhFourHandler, generalHandler };
