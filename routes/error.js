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
    res.render("page-not-found", { err });
  } else {
    res.status(500 || err.status);
    err.message = "Internal Server Error";
    res.render("error", { err });
  }
};

module.exports = { fourOhFourHandler, generalHandler };
