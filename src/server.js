const app = require("./app");
var mongoose = require("mongoose");

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});

// Connecting to MongoDB via Mongoose
mongoose
  .connect(
    "mongodb+srv://larrylee3107:90points!@cluster0-bpf6b.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    },
    function(err, db) {}
  )
  .then(() => console.log("MongoDB Connected Successfully!")) //Display message when database is connected
  .catch(err => console.log(err));

