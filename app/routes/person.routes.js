module.exports = app => {
    const person = require("../controllers/person.controller.js");
  
    var router = require("express").Router();
  
    // Create a new person
    router.post("/", person.create);
  
    // Retrieve all Persons
    router.get("/", person.findAll);
  
    // Retrieve a single Person with id
    router.get("/:id", person.findOne);
  
    // Update a Person with id
    router.put("/:id", person.update);
  
    // Delete a Person with id
    router.delete("/:id", person.delete);
  
    app.use('/api/person', router);
  };