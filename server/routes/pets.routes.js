const PetController = require("../controllers/pets.controllers");

module.exports = app => {//Following the Host, these addresses specify when the methods of the controller will be activated.
  app.get("/api/pets/", PetController.AllPets);
  app.get("/api/pets/:id", PetController.onePet);
  app.put("/api/pets/update/:id", PetController.updatePet);
  app.post("/api/pets/new", PetController.createPet);
  app.delete("/api/pets/delete/:id", PetController.deletePet);
};