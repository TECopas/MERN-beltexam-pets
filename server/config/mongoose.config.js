const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/petsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the PETS database"))
    .catch(err => console.log("Something went wrong when connecting to the PETS database", err));