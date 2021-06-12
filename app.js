// require the framework and set up the app
const express = require("express");
const app = express();
const port = 3000;
const mainRoutes = require("./routes");
const projectRoutes = require("./routes/projects");
const errorHandlers = require("./error");

// set templating engine
app.set("view engine", "pug");

// STATIC FILE SERVER
app.use("/static", express.static("public"));

// Project Routing
app.use(mainRoutes);
app.use("/projects", projectRoutes);

// Error Handling
app.use(errorHandlers.fourOhFourHandler);
app.use(errorHandlers.generalHandler);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
