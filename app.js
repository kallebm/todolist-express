const express = require("express");
const path = require("path");

const checkListRouter = require("./src/routes/checklist.js");
const taskRouter = require("./src/routes/task.js");

require("./config/database.js");
const rootRouter = require("./src/routes/index.js");
const methodOverride = require("method-override");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rootRouter);
app.use("/checklists", checkListRouter);
app.use("/checklists", taskRouter.checklistDepedent);
app.use("/tasks", taskRouter.simple);

app.listen(3000, () => {
  console.log("Server foi iniciado");
});
