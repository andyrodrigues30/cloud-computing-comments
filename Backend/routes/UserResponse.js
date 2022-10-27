// Routes files are

const router = require("express").Router();
let Responses = require("../models/UserResponse.model.js");
//Loads Schema to make sure that response are in correct format and meet requirment
router.route("/").get((req, res) => {
    Responses.find()
        .then(UserResponses => res.json(UserResponses))
        .catch(err => res.status(400).json("Error: "+ err))
});
// route to get all responses

router.route("/add").post((req,res) => {
    const UserResponse = req.body
    const NewUserResponse = new Responses(UserResponse)

    NewUserResponse.save()
        .then(() => res.json("New Response added!"))
        .catch(err => res.status(400).json("Error: " + err))
})
// route to add a response to the database

router.route('/:id').get((req,res) =>{
    Responses.findById(req.params.id)
    .then(IndividualRes => res.json(IndividualRes))
    .catch(err => res.status(400).json("Error: "+ err))
})  
//route to get individual result

router.route("/:id").delete((req, res) => {
    Responses.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted"))
})
//Route to delete individual responce
router.route("/update/:id").post((req,res) =>{
    Responses.findById(req.params.id)
    .then(responses => {
        responses.UserResponse = req.body.UserResponse;
        responses.save()
            .then(()=> res.json("Response Updated"))
            .catch(err => res.status(400).json("Error: " + err))         
    })
    .catch(err => res.status(400).json("Error: " + err))         
})
// Route to update a individual response 
module.exports = router