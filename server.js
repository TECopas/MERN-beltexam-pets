const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));

const PetRoutes = require("./server/routes/pets.routes");

PetRoutes(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
});