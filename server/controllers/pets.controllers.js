const Pet = require("../models/pets.models");

module.exports.AllPets = (req, res) => {
    Pet.find().sort({type: 1}) //find looks for all instances of whatever was specified within the (), such as (name:{name}). An empty () looks for all objects.
      .then(allPets => res.json({Pets: allPets }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createPet = (req, res) => {
    console.log(req.body)
    Pet.exists({name: req.body.name})
    .then(PetExists => {
        if (PetExists) {
            // Promise.reject() will activate the .catch() below.
            return Promise.reject('Pet already exists');
        }
        return Pet.create(req.body);
    })
    .then(saveResult => res.json(saveResult))
    .catch(err => res.json(err));
};

module.exports.onePet = (req,res) =>{
  console.log(req.body)
  Pet.findOne({_id: req.params.id})
    .then(onePet=>res.json({onePet}))
    .catch(err=>res.json({message: "Something went wrong", error: err}))
}

module.exports.updatePet = (req,res) =>{
  console.log(req.body)
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }) //locates the first instance of the specified object and updates it's contents using the body of the request as inputs.
    .then(updatedPet => res.json({ updatedPet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));

}

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id }) //Locates one instance of the specified object and destroys it.
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};