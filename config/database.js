const mongoose = require("mongoose");
const { use } = require("../src/routes/checklist");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/todo-list", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.log(err));
