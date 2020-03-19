const app = require("./app");
var mongoose = require("mongoose");

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});

// Connecting to MongoDB via Mongoose
const db = require('./config/keys').mongoURI;

mongoose
.connect(db)
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));

