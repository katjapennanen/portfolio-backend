const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  technologies: [String],
  githubUrl: String,
  demoUrl: String,
  date: String,
  scrotUrl: String,
});

projectSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});


module.exports = mongoose.model("Project", projectSchema);